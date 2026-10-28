import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { CSV_COLUMNS, CSV_TEMPLATE, parseCsv, type CsvResult } from "@/lib/demo-logic";
import { demo } from "@/lib/demo-store";
import { downloadText } from "@/lib/download";

type Loaded = { name: string; size: number; result: CsvResult };
const MAX_BYTES = 50 * 1024 * 1024;

/** Reads, previews and validates a CSV in the browser; nothing is sent anywhere. */
export function CsvReview() {
  const [file, setFile] = useState<Loaded | null>(null);
  const [showAll, setShowAll] = useState(false);
  const fileRef = useRef<Loaded | null>(null);
  fileRef.current = file;

  async function load(f: File) {
    if (!/\.csv$/i.test(f.name)) { toast.error("Formato no compatible", { description: "En esta demostración solo se aceptan archivos .csv." }); return; }
    if (f.size > MAX_BYTES) { toast.error("Archivo demasiado grande", { description: "Máximo 50 MB." }); return; }
    const result = parseCsv(await f.text());
    setFile({ name: f.name, size: f.size, result }); setShowAll(false);
    if (result.errors.length) toast.warning(`${result.errors.length} problemas encontrados`, { description: "Revisa el detalle antes de cargar." });
    else toast.success(`${result.validRows} filas válidas`);
  }

  useEffect(() => {
    const zone = document.getElementById("dropZone");
    const input = document.getElementById("fileInput") as HTMLInputElement | null;
    if (!zone || !input) return;
    const openPicker = (e?: Event) => { if (e?.target === input) return; input.click(); };
    const onChange = () => { if (input.files?.[0]) load(input.files[0]); input.value = ""; };
    const onDrop = (e: DragEvent) => { e.preventDefault(); const f = e.dataTransfer?.files?.[0]; if (f) load(f); };
    const onOver = (e: DragEvent) => e.preventDefault();
    zone.addEventListener("click", openPicker); input.addEventListener("change", onChange);
    zone.addEventListener("drop", onDrop); zone.addEventListener("dragover", onOver);
    zone.setAttribute("role", "button"); zone.setAttribute("tabindex", "0"); zone.setAttribute("aria-label", "Seleccionar archivo CSV");
    const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.click(); } };
    zone.addEventListener("keydown", onKey);
    const tpl = () => { downloadText("plantilla_aquasense.csv", CSV_TEMPLATE); toast.success("Plantilla descargada"); };
    const quick = () => input.click();
    const inject = () => {
      const cur = fileRef.current;
      if (!cur) { toast.error("Primero selecciona un archivo CSV"); return; }
      if (cur.result.errors.length) { toast.error("No se puede cargar", { description: `Corrige ${cur.result.errors.length} problemas en el archivo.` }); return; }
      demo.log("datos", `CSV cargado: ${cur.name}`, `${cur.result.validRows} filas validadas en el navegador (demo, sin envío a base histórica).`);
      toast.success(`${cur.result.validRows} filas cargadas (demo)`, { description: "Registrado en la Bitácora." });
    };
    const ids: [string, () => void][] = [["btnDownloadTemplate", tpl], ["btnQuickUpload", quick], ["btnInject", inject]];
    ids.forEach(([id, fn]) => document.getElementById(id)?.addEventListener("click", fn));
    return () => {
      zone.removeEventListener("click", openPicker); input.removeEventListener("change", onChange);
      zone.removeEventListener("drop", onDrop); zone.removeEventListener("dragover", onOver); zone.removeEventListener("keydown", onKey);
      ids.forEach(([id, fn]) => document.getElementById(id)?.removeEventListener("click", fn));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!file) return <div className="mt-4 p-4 rounded-xl bg-card border border-dashed border-border text-sm text-muted-foreground">
    Ningún archivo seleccionado. Columnas requeridas: <span className="font-label-mono">{CSV_COLUMNS.join(", ")}</span>. Descarga la plantilla para empezar.
  </div>;

  const { result } = file;
  const ok = result.errors.length === 0;
  const errors = showAll ? result.errors : result.errors.slice(0, 5);
  return <div className="mt-4 p-4 rounded-xl bg-card border border-border shadow-sm space-y-3" aria-live="polite">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="font-bold text-foreground break-all">{file.name}</div>
        <div className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(1)} KB · {result.rows.length} filas · {result.validRows} válidas</div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${ok ? "bg-scada-ink-36 text-scada-ink-39" : "bg-destructive/10 text-destructive"}`}>{ok ? "Listo para cargar" : `${result.errors.length} problemas`}</span>
        <button type="button" className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive" aria-label="Descartar archivo" onClick={() => setFile(null)}><span className="material-symbols-outlined text-[18px]">delete</span></button>
      </div>
    </div>
    {result.headers.length > 0 && <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted"><tr>{result.headers.map((h) => <th key={h} className="px-3 py-2 text-left font-semibold whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>{result.rows.slice(0, 5).map((r, i) => <tr key={i} className="border-t border-border">{result.headers.map((h) => <td key={h} className="px-3 py-1.5 whitespace-nowrap">{r[h]}</td>)}</tr>)}</tbody>
      </table>
      {result.rows.length > 5 && <div className="px-3 py-1.5 text-xs text-muted-foreground border-t border-border">Vista previa de 5 de {result.rows.length} filas</div>}
    </div>}
    {!ok && <div>
      <ul className="text-sm text-destructive space-y-1">{errors.map((e, i) => <li key={i}>{e.row > 0 ? `Fila ${e.row}: ` : ""}{e.message}</li>)}</ul>
      {result.errors.length > 5 && <button type="button" className="mt-1 text-sm font-semibold text-primary underline" onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : `Ver los ${result.errors.length} problemas`}</button>}
    </div>}
  </div>;
}
