/** Pure rules for the demonstration app. No plant connection. */

export const SAFE_DOSE_MIN = 18;
export const SAFE_DOSE_MAX = 22;

export type DoseCheck = { ok: true } | { ok: false; reason: string };

export function validateDose(ppm: number, qualityWithinLimits = true): DoseCheck {
  if (!Number.isFinite(ppm)) return { ok: false, reason: "Dosis no válida." };
  if (ppm < SAFE_DOSE_MIN || ppm > SAFE_DOSE_MAX)
    return { ok: false, reason: `La dosis ${ppm} ppm está fuera del rango seguro (${SAFE_DOSE_MIN}–${SAFE_DOSE_MAX} ppm).` };
  if (!qualityWithinLimits) return { ok: false, reason: "La calidad proyectada supera los límites NOM-001." };
  return { ok: true };
}

export const CSV_COLUMNS = ["timestamp", "sensor_id", "parametro", "valor", "unidad"] as const;
export const CSV_RANGES: Record<string, [number, number]> = {
  ph: [0, 14],
  turbidez: [0, 100],
  dqo: [0, 2000],
  pac: [0, 100],
  caudal: [0, 1000],
  presion: [0, 20],
};

export type CsvRow = Record<string, string>;
export type CsvIssue = { row: number; message: string };
export type CsvResult = { headers: string[]; rows: CsvRow[]; errors: CsvIssue[]; validRows: number };

function splitLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (quoted && line[i + 1] === '"') { cur += '"'; i++; } else quoted = !quoted;
    } else if ((c === "," || c === ";") && !quoted) { out.push(cur.trim()); cur = ""; }
    else cur += c;
  }
  out.push(cur.trim());
  return out;
}

export function parseCsv(text: string): CsvResult {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((l) => l.trim() !== "");
  const errors: CsvIssue[] = [];
  if (lines.length === 0) return { headers: [], rows: [], errors: [{ row: 0, message: "El archivo está vacío." }], validRows: 0 };
  const headers = splitLine(lines[0] ?? "").map((h) => h.toLowerCase());
  const missing = CSV_COLUMNS.filter((c) => !headers.includes(c));
  if (missing.length) errors.push({ row: 1, message: `Faltan columnas: ${missing.join(", ")}.` });
  const rows: CsvRow[] = [];
  let validRows = 0;
  lines.slice(1).forEach((line, i) => {
    const n = i + 2;
    const cells = splitLine(line);
    const row: CsvRow = {};
    headers.forEach((h, j) => (row[h] = cells[j] ?? ""));
    rows.push(row);
    if (missing.length) return;
    const before = errors.length;
    const ts = row["timestamp"] ?? "", valor = row["valor"] ?? "", parametro = row["parametro"] ?? "";
    if (cells.length !== headers.length) errors.push({ row: n, message: `Se esperaban ${headers.length} columnas y hay ${cells.length}.` });
    if (Number.isNaN(Date.parse(ts))) errors.push({ row: n, message: `Fecha no válida: "${ts}".` });
    const value = Number(valor);
    if (valor === "" || !Number.isFinite(value)) errors.push({ row: n, message: `Valor no numérico: "${valor}".` });
    else {
      const range = CSV_RANGES[parametro.toLowerCase()];
      if (!range) errors.push({ row: n, message: `Parámetro desconocido: "${parametro}".` });
      else if (value < range[0] || value > range[1]) errors.push({ row: n, message: `${parametro} = ${value} fuera de rango (${range[0]}–${range[1]}).` });
    }
    if (errors.length === before) validRows++;
  });
  if (lines.length === 1) errors.push({ row: 0, message: "El archivo no contiene filas de datos." });
  return { headers, rows, errors, validRows };
}

function escapeCell(v: unknown): string {
  const s = String(v ?? "");
  return /[",\n;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCsv(headers: string[], rows: (string | number)[][]): string {
  return [headers, ...rows].map((r) => r.map(escapeCell).join(",")).join("\n");
}

export const CSV_TEMPLATE = toCsv([...CSV_COLUMNS], [
  ["2026-10-28T14:00:00", "PAC-01", "pac", 19, "ppm"],
  ["2026-10-28T14:00:00", "TURB-02", "turbidez", 1.8, "NTU"],
  ["2026-10-28T14:00:00", "DQO-01", "dqo", 48, "mg/L"],
]);
