import { Link } from "@tanstack/react-router";
import { useDemo, type LogEntry } from "@/lib/demo-store";
import { toCsv } from "@/lib/demo-logic";

export function logToCsv(log: LogEntry[]) {
  return toCsv(["hora", "tipo", "evento", "detalle"], log.map((e) => [e.time, e.kind, e.title, e.detail]));
}

const icons: Record<LogEntry["kind"], string> = { consigna: "tune", alerta: "warning", datos: "upload_file", turno: "verified", sistema: "settings" };

export function SessionLog() {
  const log = useDemo((s) => s.log);
  return <section aria-labelledby="session-log-title" className="rounded-xl bg-card border border-border p-5 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
      <h2 id="session-log-title" className="font-bold text-foreground">Actividad de esta sesión ({log.length})</h2>
      <span className="text-xs text-muted-foreground">Se reinicia al recargar la página · Demostración</span>
    </div>
    {log.length === 0
      ? <p className="text-sm text-muted-foreground">Aún no hay acciones. Aprueba una consigna en <Link to="/recomendaciones" className="text-primary font-semibold underline">Recomendaciones IA</Link>, atiende una <Link to="/alertas" className="text-primary font-semibold underline">alerta</Link> o carga un CSV y aparecerá aquí.</p>
      : <ol className="divide-y divide-border">
        {log.map((e) => <li key={e.id} className="py-2.5 flex items-start gap-3">
          <span className="material-symbols-outlined text-primary text-[20px] shrink-0">{icons[e.kind]}</span>
          <div className="min-w-0 flex-1"><div className="text-sm font-semibold text-foreground">{e.title}</div><div className="text-sm text-muted-foreground">{e.detail}</div></div>
          <span className="font-label-mono text-xs text-muted-foreground shrink-0">{e.time}</span>
        </li>)}
      </ol>}
  </section>;
}
