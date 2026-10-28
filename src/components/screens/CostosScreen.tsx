import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScadaShell } from "./ScadaShell";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export function CostosScreen() {
 const [filter, setFilter] = useState("all");
 const [ppm, setPpm] = useState(19);
 const [changed, setChanged] = useState(false);
 const [stress, setStress] = useState(false);
 const [completed, setCompleted] = useState<Record<string, string>>({});
 const [detail, setDetail] = useState<string | null>(null);
 const actions: Record<string, string> = {"action-0": "check_circle Aplicar Optimización", "action-1": "tune Simular", "action-2": "Ver desglose detallado por tren arrow_forward", "action-3": "electric_bolt Aprobar Ajuste en SCADA (19 ppm)"};
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
 return <ScadaShell><div data-stress={stress ? "active" : "inactive"}><main className="w-full pt-24 pb-16 px-8 min-h-screen space-y-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-3 border-b border-scada-ink-26/80">
<div >
<div className="flex items-center gap-2.5">
<h1 className="font-headline-md text-2xl font-bold text-scada-ink-33 tracking-normal">Centro de Mando Operativo</h1>
<span className="px-2.5 py-1 rounded-full bg-scada-ink-36 text-scada-ink-39 font-label-mono text-xs font-bold flex items-center gap-1.5 border border-scada-ink-42 shadow-xs">
<span className="w-2 h-2 rounded-full bg-scada-ink-17 animate-pulse"></span> En Vivo (Turno B)
      </span>
</div>
<p className="font-body-sm text-xs text-scada-ink-35 mt-1.5">Supervisión instantánea de costo unitario, cumplimiento normativo NOM-001 y optimización química.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-scada-ink-10 px-3.5 py-2 rounded-lg border border-scada-ink-26 shadow-xs font-label-mono text-xs text-scada-ink-34">
<span className="material-symbols-outlined text-[17px] text-primary">water_drop</span>
<span className="">Caudal: <strong className="text-scada-ink-33 font-bold">198.4 m³/h</strong></span>
</div>
<div className="flex items-center gap-2 bg-scada-ink-10 px-3.5 py-2 rounded-lg border border-scada-ink-26 shadow-xs font-label-mono text-xs text-scada-ink-34">
<span className="material-symbols-outlined text-[17px] text-scada-ink-43">verified</span>
<span className="">Volumen MTD: <strong className="text-scada-ink-33 font-bold">142,850 m³</strong></span>
</div>
</div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="bg-scada-ink-10 rounded-lg p-6 border border-scada-ink-26 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-scada-ink-44"></span>
<span className="font-label-mono text-xs font-bold uppercase tracking-normal text-scada-ink-34">Costo Operativo / m³</span>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-scada-ink-45 text-scada-ink-46 font-label-mono text-[11px] font-bold border border-scada-ink-47 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">warning</span> Alerta Moderada
      </span>
</div>
<div className="flex items-center justify-center my-4">
<div className="relative w-36 h-36 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="var(--color-scada-ink-48)" strokeWidth="10"></circle>
<circle cx="50" cy="50" fill="transparent" opacity="0.2" r="40" stroke="var(--color-scada-ink-49)" strokeDasharray="190 251" strokeWidth="10"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="var(--color-scada-ink-50)" strokeDasharray="208 251" strokeDashoffset="28" strokeLinecap="round" strokeWidth="10"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-data-metric-lg text-3xl font-black text-scada-ink-33 leading-none">$1.42</span>
<span className="font-label-mono text-[11px] text-scada-ink-35 font-bold uppercase mt-1">USD / m³</span>
</div>
</div>
</div>
<div className="space-y-2 pt-2 border-t border-scada-ink-31 font-label-mono text-xs">
<div className="flex items-center justify-between text-scada-ink-34">
<span className="">Meta presupuestada:</span>
<span className="font-bold text-scada-ink-51 bg-scada-ink-36 px-2 py-0.5 rounded border border-scada-ink-37">$1.28 /m³</span>
</div>
<div className="flex items-center justify-between text-scada-ink-34">
<span className="">Desviación neta:</span>
<span className="font-bold text-scada-ink-40 bg-scada-ink-52 px-2 py-0.5 rounded border border-scada-ink-53">+$0.14 (+10.9%)</span>
</div>
<p className="text-[11px] text-scada-ink-35 font-body-sm pt-1">Causa raíz: Exceso de dosificación en coagulación MBR Turno C.</p>
</div>
</div>

<div className="bg-scada-ink-10 rounded-lg p-6 border border-scada-ink-26 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-scada-ink-17"></span>
<span className="font-label-mono text-xs font-bold uppercase tracking-normal text-scada-ink-34">Norma NOM-001 SEMARNAT</span>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-scada-ink-54 text-scada-ink-39 font-label-mono text-[11px] font-bold border border-scada-ink-42">
        100% Cumple
      </span>
</div>
<div className="flex items-center justify-center my-4">
<div className="relative w-36 h-36 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-scada-ink-31" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-scada-ink-17" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="99.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-data-metric-lg text-3xl font-black text-scada-ink-51 leading-none">99.4%</span>
<span className="font-label-mono text-[11px] text-scada-ink-39 font-bold uppercase mt-1">Garantizado</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 border-t border-scada-ink-31 text-center">
<div className="bg-scada-ink-36/80 border border-scada-ink-37 rounded-lg p-2">
<div className="text-[10px] font-label-mono text-scada-ink-39 uppercase font-bold">DQO Efluente</div>
<div className="font-data-metric-md text-base font-black text-scada-ink-51">48 <span className="text-[10px] font-normal">mg/L</span></div>
<div className="text-[9px] font-label-mono text-scada-ink-43 font-semibold">&lt; 60 límite</div>
</div>
<div className="bg-scada-ink-36/80 border border-scada-ink-37 rounded-lg p-2">
<div className="text-[10px] font-label-mono text-scada-ink-39 uppercase font-bold">Turbidez</div>
<div className="font-data-metric-md text-base font-black text-scada-ink-51">1.8 <span className="text-[10px] font-normal">NTU</span></div>
<div className="text-[9px] font-label-mono text-scada-ink-43 font-semibold">&lt; 4.0 límite</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-scada-ink-43 via-scada-ink-55 to-scada-ink-56 text-scada-ink-10 rounded-lg p-6 shadow-lg shadow-scada-ink-57/20 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-40 h-40 bg-scada-ink-10/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-scada-ink-10/20 backdrop-blur-md flex items-center justify-center text-scada-ink-20">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
</div>
<span className="font-label-mono text-xs font-bold uppercase tracking-normal text-scada-ink-20">Ahorro IA Identificado</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-6 text-scada-ink-11 font-label-mono text-[10px] font-extrabold uppercase tracking-normal">
        Optimización Activa
      </span>
</div>
<div className="my-4">
<div className="flex items-baseline gap-2">
<span className="font-data-metric-lg text-4xl font-extrabold tracking-normal text-scada-ink-10 leading-none">+$14,820</span>
<span className="font-label-mono text-base text-scada-ink-20 font-semibold">USD/mes</span>
</div>
<p className="text-xs text-scada-ink-58 mt-2 font-body-sm leading-relaxed">
        Recupera el costo presupuestado (-$0.104/m³) ajustando PAC nocturno en Turno C (28→19 ppm) sin afectar DQO.
      </p>
</div>
<div className="pt-3 border-t border-scada-ink-10/20 flex items-center gap-3">
<Button variant="ghost" size="sm" onClick={() => handleAction("action-0")} className="flex-1 py-2.5 px-4 bg-scada-ink-10 hover:bg-scada-ink-59 text-scada-ink-33 font-headline-sm font-bold text-xs rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95" data-action="action-0" disabled={Boolean(completed["action-0"]) && !"action-0".startsWith("filter-")}>{completed["action-0"] || <> 
<span className="material-symbols-outlined text-[16px] text-scada-ink-55">check_circle</span>
<span className="">Aplicar Optimización</span>
 </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-1")} className="py-2.5 px-3 bg-scada-ink-10/15 hover:bg-scada-ink-10/25 text-scada-ink-10 font-headline-sm font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1" data-action="action-1" disabled={Boolean(completed["action-1"]) && !"action-1".startsWith("filter-")}>{completed["action-1"] || <> 
<span className="material-symbols-outlined text-[16px]">tune</span>
<span className="">Simular</span>
 </>}</Button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-6 bg-scada-ink-10 rounded-lg p-6 border border-scada-ink-26 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between pb-3 border-b border-scada-ink-31">
<div >
<h2 className="font-headline-sm text-base font-bold text-scada-ink-33">¿Dónde se está gastando el dinero?</h2>
<p className="text-xs font-label-mono text-scada-ink-35 mt-0.5">Distribución ponderada sobre el costo total ($1.42 /m³)</p>
</div>
<span className="font-data-metric-md text-sm font-black text-scada-ink-33 bg-scada-ink-31 px-2.5 py-1 rounded-lg border border-scada-ink-26">
        100% Gasto
      </span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center my-4">
<div className="sm:col-span-5 flex flex-col items-center justify-center relative">
<div className="relative w-36 h-36 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
<circle cx="21" cy="21" fill="transparent" r="15.91549430918954" stroke="var(--color-scada-ink-60)" strokeWidth="6.5"></circle>

<circle cx="21" cy="21" fill="transparent" r="15.91549430918954" stroke="var(--color-scada-ink-61)" strokeDasharray="40.8 59.2" strokeDashoffset="0" strokeWidth="6.5"></circle>

<circle cx="21" cy="21" fill="transparent" r="15.91549430918954" stroke="var(--color-scada-ink-62)" strokeDasharray="31.0 69.0" strokeDashoffset="-40.8" strokeWidth="6.5"></circle>

<circle cx="21" cy="21" fill="transparent" r="15.91549430918954" stroke="var(--color-scada-ink-63)" strokeDasharray="18.3 81.7" strokeDashoffset="-71.8" strokeWidth="6.5"></circle>

<circle cx="21" cy="21" fill="transparent" r="15.91549430918954" stroke="var(--color-scada-ink-64)" strokeDasharray="9.9 90.1" strokeDashoffset="-90.1" strokeWidth="6.5"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-data-metric-lg text-lg font-black text-scada-ink-33 leading-tight">$1.42</span>
<span className="font-label-mono text-[9px] text-scada-ink-15 font-bold uppercase">Costo Real</span>
</div>
</div>
</div>

<div className="sm:col-span-7 space-y-2.5 font-label-mono">

<div className="p-2.5 rounded-lg bg-scada-ink-52 border-2 border-scada-ink-65 flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-scada-ink-40 shrink-0"></span>
<div >
<div className="font-headline-sm text-xs font-bold text-scada-ink-66 leading-tight">Reactivos PAC / Polím.</div>
<div className="text-[10px] text-scada-ink-67 font-semibold">⚠️ Foco de sobrecosto (+18.4%)</div>
</div>
</div>
<div className="text-right">
<div className="font-bold text-scada-ink-67 text-xs">$0.58 <span className="text-[10px] text-scada-ink-68 font-black">(41%)</span></div>
<div className="text-[9px] text-scada-ink-69 font-medium">4,142 kg PAC</div>
</div>
</div>

<div className="p-2 rounded-lg bg-scada-ink-70/80 border border-scada-ink-71 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-scada-ink-72 shrink-0"></span>
<span className="text-xs font-bold text-scada-ink-32 font-headline-sm">Energía Eléctrica</span>
</div>
<div className="text-right text-xs">
<span className="font-bold text-scada-ink-73">$0.44</span>
<span className="text-[10px] text-scada-ink-35 ml-1">(31%)</span>
</div>
</div>

<div className="p-2 rounded-lg bg-scada-ink-31 border border-scada-ink-26 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-scada-ink-35 shrink-0"></span>
<span className="text-xs font-bold text-scada-ink-32 font-headline-sm">Manejo de Lodos</span>
</div>
<div className="text-right text-xs">
<span className="font-bold text-scada-ink-32">$0.26</span>
<span className="text-[10px] text-scada-ink-35 ml-1">(18%)</span>
</div>
</div>

<div className="p-2 rounded-lg bg-scada-ink-74/80 border border-scada-ink-75 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-scada-ink-76 shrink-0"></span>
<span className="text-xs font-bold text-scada-ink-32 font-headline-sm">Membranas & Cartuchos</span>
</div>
<div className="text-right text-xs">
<span className="font-bold text-scada-ink-77">$0.14</span>
<span className="text-[10px] text-scada-ink-35 ml-1">(10%)</span>
</div>
</div>
</div>
</div>
<div className="pt-3 border-t border-scada-ink-31 flex items-center justify-between text-xs">
<span className="font-label-mono text-scada-ink-35 text-[11px]">Rango normal: $1.22 — $1.35 /m³</span>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-2")} className="text-primary hover:text-scada-ink-78 font-semibold font-headline-sm flex items-center gap-1 hover:underline text-xs" data-action="action-2" disabled={Boolean(completed["action-2"]) && !"action-2".startsWith("filter-")}>{completed["action-2"] || <> 
<span className="">Ver desglose detallado por tren</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </>}</Button>
</div>
</div>

<div className="lg:col-span-6 bg-scada-ink-10 rounded-lg p-6 border-2 border-scada-ink-14 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div >
<div className="flex items-center justify-between pb-3 border-b border-scada-ink-31">
<div className="flex items-center gap-2 text-scada-ink-39">
<span className="material-symbols-outlined text-[22px] text-scada-ink-43">psychology</span>
<h2 className="font-headline-sm text-base font-bold text-scada-ink-33">Acción Prioritaria de Turno</h2>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-scada-ink-43 text-scada-ink-10 font-label-mono text-[10px] font-extrabold uppercase tracking-normal">
          Prioridad 1 (Turno B/C)
        </span>
</div>

<div className="my-4 p-4 rounded-lg bg-scada-ink-30 border border-scada-ink-26/80">
<div className="flex items-center justify-between text-xs font-label-mono mb-1.5">
<span className="text-scada-ink-35 font-semibold">Objetivo Operativo:</span>
<span className="font-bold text-scada-ink-51 bg-scada-ink-36 px-2 py-0.5 rounded border border-scada-ink-37">Ahorro: +$14,820 USD/mes</span>
</div>
<h3 className="font-headline-sm text-sm font-bold text-scada-ink-33">
          Reducir dosificación PAC en Reactor MBR (de 28 ppm a 19 ppm)
        </h3>
<p className="font-body-sm text-xs text-scada-ink-34 mt-1.5 leading-relaxed">
          El caudal horario cae 25% después de las 20:00 hrs. Disminuir la consigna de coagulante elimina el sobrecosto sin riesgo de elevar turbidez por encima del límite oficial de 4.0 NTU.
        </p>

<div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-scada-ink-26 text-center font-label-mono">
<div className="p-1.5 rounded-lg bg-scada-ink-52 border border-scada-ink-53">
<span className="text-[9px] text-scada-ink-69 uppercase block font-semibold">Consigna Actual</span>
<span className="text-sm font-bold text-scada-ink-67">28 ppm</span>
</div>
<div className="p-1.5 rounded-lg bg-scada-ink-36 border border-scada-ink-42">
<span className="text-[9px] text-scada-ink-39 uppercase block font-bold">Consigna IA</span>
<span className="text-sm font-bold text-scada-ink-51">19 ppm</span>
</div>
<div className="p-1.5 rounded-lg bg-scada-ink-31 border border-scada-ink-26">
<span className="text-[9px] text-scada-ink-34 uppercase block font-semibold">Turbidez Estimada</span>
<span className="text-sm font-bold text-scada-ink-33">1.8 NTU</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 pt-1">
<Button variant="ghost" size="sm" onClick={() => handleAction("action-3")} className="flex-1 py-3 px-4 bg-scada-ink-43 hover:bg-scada-ink-51 text-scada-ink-10 font-headline-sm font-bold text-xs rounded-lg shadow-md transition-all flex items-center justify-center gap-2 active:scale-95" data-action="action-3" disabled={Boolean(completed["action-3"]) && !"action-3".startsWith("filter-")}>{completed["action-3"] || <> 
<span className="material-symbols-outlined text-[18px]">electric_bolt</span>
<span className="">Aprobar Ajuste en SCADA (19 ppm)</span>
 </>}</Button>
</div>
</div>

<div className="mt-4 pt-3 border-t border-scada-ink-31 flex items-center justify-between text-[11px] font-label-mono text-scada-ink-35">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-scada-ink-43">history</span>
        Último ajuste: <strong >OD Soplantes a 2.0 ppm (Ayer)</strong>
</span>
<span className="text-scada-ink-51 font-bold">+3.2% Ahorro Verificado</span>
</div>
</div>
</section>

<section className="bg-scada-ink-10 rounded-lg p-5 border border-scada-ink-26 shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">linear_scale</span>
<h2 className="font-headline-sm text-sm font-bold text-scada-ink-33 uppercase tracking-normal">Estado en Vivo del Tren de Tratamiento</h2>
</div>
<span className="text-[11px] font-label-mono text-scada-ink-35">Flujo Continuo: 4 Etapas Supervisadas</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="p-3 rounded-lg bg-scada-ink-30 border border-scada-ink-26 flex items-center justify-between hover:border-scada-ink-3 transition-colors">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-scada-ink-54 text-scada-ink-39 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">filter_alt</span>
</div>
<div >
<div className="font-headline-sm text-xs font-bold text-scada-ink-33">1. Pretratamiento</div>
<div className="text-[10px] font-label-mono text-scada-ink-35">Cribado rotativo 0.5mm</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-54 text-scada-ink-39 font-label-mono text-[10px] font-bold border border-scada-ink-37 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-43"></span> OK
      </span>
</div>

<div className="p-3 rounded-lg bg-scada-ink-52/80 border-2 border-scada-ink-65 flex items-center justify-between shadow-xs">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-scada-ink-40 text-scada-ink-10 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">science</span>
</div>
<div >
<div className="font-headline-sm text-xs font-bold text-scada-ink-66">2. Reactor MBR</div>
<div className="text-[10px] font-label-mono text-scada-ink-67 font-semibold">Sobredosis PAC Turno C</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-40 text-scada-ink-10 font-label-mono text-[10px] font-bold flex items-center gap-1 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-10"></span> Atención
      </span>
</div>

<div className="p-3 rounded-lg bg-scada-ink-30 border border-scada-ink-26 flex items-center justify-between hover:border-scada-ink-3 transition-colors">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-scada-ink-54 text-scada-ink-39 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">recycling</span>
</div>
<div >
<div className="font-headline-sm text-xs font-bold text-scada-ink-33">3. Filtro Prensa</div>
<div className="text-[10px] font-label-mono text-scada-ink-35">Torta lodos: 28% TS</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-54 text-scada-ink-39 font-label-mono text-[10px] font-bold border border-scada-ink-37 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-43"></span> OK
      </span>
</div>

<div className="p-3 rounded-lg bg-scada-ink-30 border border-scada-ink-26 flex items-center justify-between hover:border-scada-ink-3 transition-colors">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-scada-ink-54 text-scada-ink-39 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">water_lux</span>
</div>
<div >
<div className="font-headline-sm text-xs font-bold text-scada-ink-33">4. Ósmosis RO</div>
<div className="text-[10px] font-label-mono text-scada-ink-35">Permeado 99.1% salud</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-54 text-scada-ink-39 font-label-mono text-[10px] font-bold border border-scada-ink-37 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-43"></span> OK
      </span>
</div>
</div>
</section></main></div>
 <Dialog open={detail !== null} onOpenChange={(open) => { if (!open) setDetail(null); }}><DialogContent><DialogHeader><DialogTitle>Resultado de demostración</DialogTitle><DialogDescription>{detail}</DialogDescription></DialogHeader></DialogContent></Dialog>
 </ScadaShell>;
}
