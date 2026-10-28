import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScadaShell } from "./ScadaShell";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export function AlertasScreen() {
 const [filter, setFilter] = useState("all");
 const [ppm, setPpm] = useState(19);
 const [changed, setChanged] = useState(false);
 const [stress, setStress] = useState(false);
 const [completed, setCompleted] = useState<Record<string, string>>({});
 const [detail, setDetail] = useState<string | null>(null);
 const actions: Record<string, string> = {"filter-all": "Todas 3", "filter-cost": "Sobrecosto Económico", "filter-chemical": "Parámetro Químico", "filter-filter": "Mantenimiento / Filtro", "quick-mitigate-all": "bolt Mitigar con Consignas IA", "action-5": "tune Ajustar a 19 ppm en SCADA", "action-6": "calculate Simular Impacto Hidráulico", "action-7": "wash Programar Ciclo de Lavado", "action-8": "query_stats Ver Telemetría Presión", "action-9": "build Solicitar Mant. Preventivo", "action-10": "snooze Pausar Alarma 4h"};
 function handleAction(id: string) {
  if (id.startsWith("filter-")) { setFilter(id.slice(7)); return; }
  if (id === "btn-stress-test") { setStress(!stress); setPpm(stress ? 19 : 23); setChanged(true); return; }
  const label = actions[id] || "";
  if (/Simular|Telemetría|desglose/.test(label)) {
   setDetail(/desglose/.test(label) ? "Reactivos: $0.58/m³ · Energía: $0.44/m³ · Lodos: $0.26/m³ · Membranas: $0.14/m³. Total: $1.42/m³." : /Presión/.test(label) ? "FILT-DEHYD-02: 4.8 bar. Rango nominal: 3.2–4.0 bar. Umbral crítico: 5.5 bar. Datos de demostración." : "Escenario de demostración: PAC 19 ppm · Turbidez 1.8 NTU · DQO 48 mg/L · Ahorro estimado $14,820 USD/mes."); return;
  }
  setCompleted((current) => ({ ...current, [id]: /Lavado/.test(label) ? "Lavado programado (demo)" : /Mant./.test(label) ? "Solicitud registrada (demo)" : /Pausar/.test(label) ? "Alarma pausada 4h (demo)" : "Consigna aprobada (demo)" }));
  setDetail("Acción registrada en esta demostración. No se ha enviado ninguna orden a una planta ni a un PLC real.");
 }
 return <ScadaShell><div data-stress={stress ? "active" : "inactive"}><main className="w-full pt-24 pb-16 px-8 min-h-screen space-y-6"><div className="flex flex-col w-full">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono uppercase tracking-normal text-primary font-bold">Diagnóstico SCADA • Motor Inferencial IA</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-[10px] font-bold">
          3 ACTIVAS EN VIVO
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-normal">Desviaciones Operativas y Detección de Anomalías</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Supervisión en tiempo real de sobrecostos, desvíos de consigna química y alertas de cumplimiento normativo con prescripciones automatizadas.
      </p>
</div>

<div className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-surface-container shadow-xs self-start lg:self-auto">
<Button variant="ghost" size="sm" onClick={() => handleAction("filter-all")} className="px-3.5 py-1.5 rounded-lg font-caption text-caption font-bold bg-surface-container-lowest text-on-surface shadow-xs transition-all flex items-center gap-1.5" id="filter-all" data-action="filter-all" disabled={Boolean(completed["filter-all"]) && !"filter-all".startsWith("filter-")}>{completed["filter-all"] || <> 
<span >Todas</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-mono text-[10px]">3</span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("filter-cost")} className="px-3.5 py-1.5 rounded-lg font-caption text-caption font-medium text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5" id="filter-cost" data-action="filter-cost" disabled={Boolean(completed["filter-cost"]) && !"filter-cost".startsWith("filter-")}>{completed["filter-cost"] || <> 
<span >Sobrecosto Económico</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("filter-chemical")} className="px-3.5 py-1.5 rounded-lg font-caption text-caption font-medium text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5" id="filter-chemical" data-action="filter-chemical" disabled={Boolean(completed["filter-chemical"]) && !"filter-chemical".startsWith("filter-")}>{completed["filter-chemical"] || <> 
<span >Parámetro Químico</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("filter-filter")} className="px-3.5 py-1.5 rounded-lg font-caption text-caption font-medium text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5" id="filter-filter" data-action="filter-filter" disabled={Boolean(completed["filter-filter"]) && !"filter-filter".startsWith("filter-")}>{completed["filter-filter"] || <> 
<span >Mantenimiento / Filtro</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
 </>}</Button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

<div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-5 shadow-sm flex flex-col justify-between group">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-error/5 group-hover:scale-110 transition-transform pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-normal">Impacto por Desviación MTD</span>
<div className="flex items-baseline gap-2 pt-1">
<span className="font-data-metric-lg text-data-metric-lg text-error font-bold">+$21,450</span>
<span className="font-label-mono text-data-metric-sm text-on-surface-variant font-medium">USD</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">trending_up</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/70 rounded-lg p-3 flex items-center gap-2.5">
<span className="material-symbols-outlined text-error text-[18px] shrink-0">crisis_alert</span>
<p className="font-caption text-caption text-on-surface-variant truncate">
          Causa principal: <strong className="text-on-surface font-semibold">Sobredosificación PAC</strong> en Reactor MBR
        </p>
</div>
</div>

<div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-5 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-normal">Severidad de Alertas</span>
<div className="flex items-center gap-2 pt-1 font-label-mono text-data-metric-md font-semibold text-on-surface">
<span >3 Eventos Activos</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">stacked_bar_chart</span>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-2">
<div className="p-2 rounded-lg bg-scada-ink-52/80 text-scada-ink-66 flex flex-col items-center justify-center text-center">
<span className="font-label-mono text-[16px] font-bold text-error leading-tight">1</span>
<span className="font-caption text-[10px] uppercase font-semibold text-scada-ink-69">Crítica</span>
</div>
<div className="p-2 rounded-lg bg-scada-ink-79/80 text-scada-ink-80 flex flex-col items-center justify-center text-center">
<span className="font-label-mono text-[16px] font-bold text-scada-ink-81 leading-tight">1</span>
<span className="font-caption text-[10px] uppercase font-semibold text-scada-ink-82">Moderada</span>
</div>
<div className="p-2 rounded-lg bg-scada-ink-59/80 text-scada-ink-83 flex flex-col items-center justify-center text-center">
<span className="font-label-mono text-[16px] font-bold text-primary leading-tight">1</span>
<span className="font-caption text-[10px] uppercase font-semibold text-primary">Preventiva</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-surface-container-high/60 via-surface-container-lowest to-surface-container-lowest p-5 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-tertiary uppercase tracking-normal font-bold">Ahorro Potencial Mitigable</span>
<div className="flex items-baseline gap-2 pt-1">
<span className="font-data-metric-lg text-data-metric-lg text-tertiary font-bold">$14,820</span>
<span className="font-label-mono text-data-metric-sm text-tertiary font-medium">USD / mes</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">savings</span>
</div>
</div>
<div className="mt-4 pt-2 flex items-center justify-between gap-3">
<Button variant="ghost" size="sm" onClick={() => handleAction("quick-mitigate-all")} className="w-full py-2.5 px-4 rounded-lg bg-tertiary text-on-tertiary font-caption text-caption font-bold hover:bg-tertiary-container transition-all flex items-center justify-center gap-2 shadow-sm group" id="quick-mitigate-all" data-action="quick-mitigate-all" disabled={Boolean(completed["quick-mitigate-all"]) && !"quick-mitigate-all".startsWith("filter-")}>{completed["quick-mitigate-all"] || <> 
<span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">bolt</span>
<span >Mitigar con Consignas IA</span>
 </>}</Button>
</div>
</div>
</div>

<div className="space-y-5">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">troubleshoot</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Incidentes Activos en Proceso</h2>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant">Ordenado por criticidad financiera</span>
</div>

<article hidden={filter !== "all" && !["cost", "chemical"].includes(filter)} className="relative rounded-lg bg-surface-container-lowest p-6 shadow-sm overflow-hidden group transition-all hover:shadow-md" data-category="cost chemical">

<div className="absolute left-0 top-0 bottom-0 w-2 bg-error"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 pl-2">

<div className="flex-1 space-y-4">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-mono text-[11px] font-bold uppercase tracking-normal flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              Alerta Crítica • Turno C
            </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono text-[11px]">
              MBR-REACT-04
            </span>
<span className="font-caption text-caption text-on-surface-variant">
              Detectado hace 42 min
            </span>
</div>
<div >
<h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-normal">
              Sobredosificación Crítica de PAC en Reactor MBR
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Desfase severo entre caudal afluente disminuido y bomba dosificadora peristáltica fija. Se acumula exceso de sales coagulantes sin incremento en rendimiento clarificador.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Consigna Real vs IA</span>
<div className="flex items-baseline gap-1.5 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-error">28</span>
<span className="font-caption text-caption text-on-surface-variant">ppm</span>
<span className="font-label-mono text-[11px] text-on-surface-variant">vs</span>
<span className="font-data-metric-md text-data-metric-md font-bold text-tertiary">19</span>
<span className="font-caption text-caption text-on-surface-variant">ppm</span>
</div>
<span className="font-caption text-[11px] font-semibold text-error mt-0.5 block">+47.3% exceso químico</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Impacto Económico</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-on-surface">+$0.104</span>
<span className="font-caption text-caption text-on-surface-variant">USD/m³</span>
</div>
<span className="font-caption text-[11px] text-error font-medium mt-0.5 block">$14,820 USD/mes sobregasto</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Norma NOM-001 (Turbidez)</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-tertiary">1.8</span>
<span className="font-caption text-caption text-on-surface-variant">NTU</span>
</div>
<span className="font-caption text-[11px] text-tertiary font-medium mt-0.5 block">Límite < 4.0 NTU (Margen OK)</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">psychology</span>
<div className="text-body-sm font-body-sm text-on-surface">
<strong className="font-semibold text-primary">Diagnóstico Causa Raíz IA:</strong>
              Dosificación PAC quedó fijada en perfil de carga diurna punta mientras el caudal reactor descendió a 94 m³/h. Reducción a 19 ppm conserva el cumplimiento normativo pleno de turbidez sin precipitación residual.
            </div>
</div>
</div>

<div className="w-full lg:w-72 shrink-0 flex flex-col justify-between p-4 rounded-lg bg-surface-container-low">
<div >
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-[11px] text-on-surface-variant uppercase font-semibold">Perfil PAC 24h</span>
<span className="font-label-mono text-[10px] text-error font-bold">DESVÍO +9 ppm</span>
</div>

<div className="w-full h-24 relative flex items-end">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 200 80">

<rect className="text-tertiary/10" fill="currentColor" height="20" width="200" x="0" y="42"></rect>

<line className="text-tertiary" stroke="currentColor" strokeDasharray="3,3" strokeWidth="1.5" x1="0" x2="200" y1="52" y2="52"></line>

<path className="text-error" d="M 0,50 Q 40,48 70,30 T 130,18 T 200,12" fill="none" stroke="currentColor" strokeWidth="2.5"></path>

<circle className="text-error animate-ping" cx="200" cy="12" fill="currentColor" r="4"></circle>
<circle className="text-error" cx="200" cy="12" fill="currentColor" r="3.5"></circle>
</svg>
</div>
<div className="flex items-center justify-between text-[10px] font-label-mono text-on-surface-variant pt-1">
<span >08:00h</span>
<span className="text-tertiary font-semibold">Target 19 ppm</span>
<span className="text-error font-bold">Actual 28 ppm</span>
</div>
</div>

<div className="space-y-2 pt-4">
<Button variant="ghost" size="sm" onClick={() => handleAction("action-5")} className="w-full py-2.5 px-3 rounded-lg bg-tertiary text-on-tertiary font-caption text-caption font-bold hover:bg-tertiary-container transition-all flex items-center justify-center gap-1.5 shadow-xs" data-action="action-5" disabled={Boolean(completed["action-5"]) && !"action-5".startsWith("filter-")}>{completed["action-5"] || <> 
<span className="material-symbols-outlined text-[18px]">tune</span>
<span >Ajustar a 19 ppm en SCADA</span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-6")} className="w-full py-2 px-3 rounded-lg bg-surface-container-highest text-on-surface font-caption text-caption font-semibold hover:bg-surface-variant transition-all flex items-center justify-center gap-1.5" data-action="action-6" disabled={Boolean(completed["action-6"]) && !"action-6".startsWith("filter-")}>{completed["action-6"] || <> 
<span className="material-symbols-outlined text-[17px]">calculate</span>
<span >Simular Impacto Hidráulico</span>
 </>}</Button>
</div>
</div>
</div>
</article>

<article hidden={filter !== "all" && !["filter"].includes(filter)} className="relative rounded-lg bg-surface-container-lowest p-6 shadow-sm overflow-hidden group transition-all hover:shadow-md" data-category="filter">

<div className="absolute left-0 top-0 bottom-0 w-2 bg-scada-ink-44"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 pl-2">
<div className="flex-1 space-y-4">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-scada-ink-45 text-scada-ink-46 font-label-mono text-[11px] font-bold uppercase tracking-normal flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-scada-ink-44"></span>
              Alerta Moderada
            </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono text-[11px]">
              FILT-DEHYD-02
            </span>
<span className="font-caption text-caption text-on-surface-variant">
              Detectado hace 2h 15 min
            </span>
</div>
<div >
<h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-normal">
              Aumento Gradual de Pérdida de Carga en Filtro Prensa
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Presión diferencial superior al rango operativo óptimo con retraso de ciclo. Posible saturación de telas filtrantes o formación de torta de lodos con viscosidad anómala.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Presión Diferencial (ΔP)</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-scada-ink-81">4.8</span>
<span className="font-caption text-caption text-on-surface-variant">bar</span>
</div>
<span className="font-caption text-[11px] text-on-surface-variant mt-0.5 block">Nominal: 3.2 - 4.0 bar</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Sequedad de Torta</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-on-surface">28%</span>
<span className="font-caption text-caption text-on-surface-variant">humedad</span>
</div>
<span className="font-caption text-[11px] text-scada-ink-84 font-medium mt-0.5 block">Incremento +6% agua en lodo</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Riesgo Financiero Logístico</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-on-surface">+$1,850</span>
<span className="font-caption text-caption text-on-surface-variant">USD</span>
</div>
<span className="font-caption text-[11px] text-on-surface-variant mt-0.5 block">Flete de disposición x tonelada</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container flex items-start gap-3">
<span className="material-symbols-outlined text-scada-ink-84 text-[20px] shrink-0 mt-0.5">warning</span>
<div className="text-body-sm font-body-sm text-on-surface">
<strong className="font-semibold text-scada-ink-82">Riesgo Operativo:</strong>
              Riesgo inminente de disparo térmico en bomba de alimentación por contrapresión e interrupción de la línea de deshidratación antes del cambio de turno.
            </div>
</div>
</div>

<div className="w-full lg:w-72 shrink-0 flex flex-col justify-between p-4 rounded-lg bg-surface-container-low">
<div >
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-[11px] text-on-surface-variant uppercase font-semibold">Tendencia Presión</span>
<span className="font-label-mono text-[10px] text-scada-ink-81 font-bold">ALZA CONSTANTE</span>
</div>

<div className="space-y-2 py-2">
<div className="flex justify-between font-label-mono text-[11px]">
<span className="text-on-surface-variant">Actual: 4.8 bar</span>
<span className="text-error font-semibold">Crítico: 5.5 bar</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden p-0.5">
<div className="bg-gradient-to-r from-scada-ink-17 via-scada-ink-44 to-scada-ink-23 h-full w-[82%] rounded-full"></div>
</div>
<div className="flex justify-between text-[9px] font-label-mono text-on-surface-variant">
<span >0.0</span>
<span >Normal (3.2-4.0)</span>
<span >Max 6.0</span>
</div>
</div>
</div>
<div className="space-y-2 pt-4">
<Button variant="ghost" size="sm" onClick={() => handleAction("action-7")} className="w-full py-2.5 px-3 rounded-lg bg-primary text-on-primary font-caption text-caption font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-xs" data-action="action-7" disabled={Boolean(completed["action-7"]) && !"action-7".startsWith("filter-")}>{completed["action-7"] || <> 
<span className="material-symbols-outlined text-[18px]">wash</span>
<span >Programar Ciclo de Lavado</span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-8")} className="w-full py-2 px-3 rounded-lg bg-surface-container-highest text-on-surface font-caption text-caption font-semibold hover:bg-surface-variant transition-all flex items-center justify-center gap-1.5" data-action="action-8" disabled={Boolean(completed["action-8"]) && !"action-8".startsWith("filter-")}>{completed["action-8"] || <> 
<span className="material-symbols-outlined text-[17px]">query_stats</span>
<span >Ver Telemetría Presión</span>
 </>}</Button>
</div>
</div>
</div>
</article>

<article hidden={filter !== "all" && !["chemical"].includes(filter)} className="relative rounded-lg bg-surface-container-lowest p-6 shadow-sm overflow-hidden group transition-all hover:shadow-md" data-category="chemical">

<div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 pl-2">
<div className="flex-1 space-y-4">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-[11px] font-bold uppercase tracking-normal flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
              Alerta Preventiva • Telemetría
            </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono text-[11px]">
              SENS-TURB-RO-01
            </span>
<span className="font-caption text-caption text-on-surface-variant">
              Detectado hace 5h 40 min
            </span>
</div>
<div >
<h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-normal">
              Deriva en Sensor Óptico de Turbidez (Línea Salida RO)
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Micro-fluctuaciones atípicas de alta frecuencia sin cambio correlacionado en conductividad ni flujo permeado. Posible biofouling o sedimentación en la lente protectora de la fotocélula.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Ruido de Señal</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-primary">±0.4</span>
<span className="font-caption text-caption text-on-surface-variant">NTU</span>
</div>
<span className="font-caption text-[11px] text-on-surface-variant mt-0.5 block">Frecuencia: 0.12 Hz (ruido óptico)</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Duración de la Anomalía</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-on-surface">5.8</span>
<span className="font-caption text-caption text-on-surface-variant">horas</span>
</div>
<span className="font-caption text-[11px] text-on-surface-variant mt-0.5 block">Desde inicio de turno nocturno</span>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low">
<span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-normal block">Confiabilidad Sensor IA</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-data-metric-md text-data-metric-md font-bold text-primary">82.4%</span>
<span className="font-caption text-caption text-on-surface-variant">Score</span>
</div>
<span className="font-caption text-[11px] text-primary font-medium mt-0.5 block">Degradación de señal detectada</span>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">biotech</span>
<div className="text-body-sm font-body-sm text-on-surface">
<strong className="font-semibold text-primary">Diagnóstico IA:</strong>
              Incrustación leve en lente de sonda óptica. Los parámetros aguas arriba no respaldan presencia real de sólidos en el efluente ultrafiltrado.
            </div>
</div>
</div>

<div className="w-full lg:w-72 shrink-0 flex flex-col justify-between p-4 rounded-lg bg-surface-container-low">
<div >
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-[11px] text-on-surface-variant uppercase font-semibold">Ruido de Turbidez (6h)</span>
<span className="font-label-mono text-[10px] text-primary font-bold">RUIDO ALTO</span>
</div>

<div className="w-full h-20 relative flex items-center">
<svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">

<path className="text-primary" d="M 0,30 L 40,30 L 50,22 L 60,38 L 70,18 L 80,42 L 95,20 L 110,40 L 125,24 L 140,36 L 160,16 L 175,44 L 190,26 L 200,34" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="flex items-center justify-between text-[10px] font-label-mono text-on-surface-variant">
<span >-6h Normal</span>
<span className="text-primary font-semibold">Lectura fluctuante</span>
</div>
</div>
<div className="space-y-2 pt-4">
<Button variant="ghost" size="sm" onClick={() => handleAction("action-9")} className="w-full py-2.5 px-3 rounded-lg bg-primary text-on-primary font-caption text-caption font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-xs" data-action="action-9" disabled={Boolean(completed["action-9"]) && !"action-9".startsWith("filter-")}>{completed["action-9"] || <> 
<span className="material-symbols-outlined text-[18px]">build</span>
<span >Solicitar Mant. Preventivo</span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-10")} className="w-full py-2 px-3 rounded-lg bg-surface-container-highest text-on-surface font-caption text-caption font-semibold hover:bg-surface-variant transition-all flex items-center justify-center gap-1.5" data-action="action-10" disabled={Boolean(completed["action-10"]) && !"action-10".startsWith("filter-")}>{completed["action-10"] || <> 
<span className="material-symbols-outlined text-[17px]">snooze</span>
<span >Pausar Alarma 4h</span>
 </>}</Button>
</div>
</div>
</div>
</article>
</div>

<div className="mt-10 rounded-lg bg-surface-container-lowest p-6 shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">history_toggle_off</span>
</div>
<div >
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Bitácora de Mitigación y Cierre de Alertas (Hoy)</h3>
<p className="font-caption text-caption text-on-surface-variant">Validaciones operativas firmadas por personal de turno</p>
</div>
</div>
<span className="font-label-mono text-label-mono text-tertiary font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
        2 RESUELTAS EN TURNO B
      </span>
</div>

<div className="space-y-2.5 pt-2">
<div className="p-3.5 rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-surface-container transition-colors">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-scada-ink-54 text-scada-ink-39 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</span>
<div >
<div className="font-body-md text-body-md font-semibold text-on-surface">
              Recuperación de Oxígeno Disuelto en Soplador #2
            </div>
<div className="font-caption text-caption text-on-surface-variant flex items-center gap-2">
<span >Soplador BLW-02 rebalanceado a 42 Hz</span>
<span >•</span>
<span className="text-tertiary font-medium">OD normalizado en 2.3 mg/L</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 text-right self-end md:self-auto font-label-mono text-label-mono text-on-surface-variant">
<span className="text-on-surface font-medium">Validado por Ing. M. Romero</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Hace 3h 12m</span>
</div>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-surface-container transition-colors">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-scada-ink-54 text-scada-ink-39 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</span>
<div >
<div className="font-body-md text-body-md font-semibold text-on-surface">
              Ajuste de Soda Cáustica en Neutralización Efluente Ácido
            </div>
<div className="font-caption text-caption text-on-surface-variant flex items-center gap-2">
<span >Dosificación reducida -12% ante neutralización buffer</span>
<span >•</span>
<span className="text-tertiary font-medium">pH estabilizado en 7.42</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 text-right self-end md:self-auto font-label-mono text-label-mono text-on-surface-variant">
<span className="text-on-surface font-medium">Validado por Ing. M. Romero</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Hace 6h 40m</span>
</div>
</div>
</div>
</div>


</div></main></div>
 <Dialog open={detail !== null} onOpenChange={(open) => { if (!open) setDetail(null); }}><DialogContent><DialogHeader><DialogTitle>Resultado de demostración</DialogTitle><DialogDescription>{detail}</DialogDescription></DialogHeader></DialogContent></Dialog>
 </ScadaShell>;
}
