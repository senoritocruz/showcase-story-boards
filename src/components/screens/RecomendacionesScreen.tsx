import { useState } from "react";
import { simulatePac, formatDemoMoney } from "@/lib/pac-simulation";
import { Button } from "@/components/ui/button";
import { ScadaShell } from "./ScadaShell";
import { toast } from "sonner";
import { demo, useDemo } from "@/lib/demo-store";
import { validateDose, SAFE_DOSE_MIN, SAFE_DOSE_MAX } from "@/lib/demo-logic";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export function RecomendacionesScreen() {
 const [ppm, setPpm] = useState(19);
 const [stress, setStress] = useState(false);
 const [completed, setCompleted] = useState<Record<string, string>>({});
 const [detail, setDetail] = useState<string | null>(null);
 const projection = simulatePac(ppm, stress);
 const approvedDose = useDemo((st) => st.approvedDose);
 const applied = approvedDose === ppm;
 const check = validateDose(ppm, projection.qualityWithinLimits);
 const [confirming, setConfirming] = useState(false);
 function confirmApply() {
  setConfirming(false);
  const undo = demo.approveDose(ppm, `Costo PAC estimado ${formatDemoMoney(projection.projectedCost, 3)}/m³ · ahorro estimado ${formatDemoMoney(projection.monthlySaving)}/mes. Sin envío a equipos reales.`);
  toast.success(`Consigna de ${ppm} ppm registrada (demo)`, { description: "Añadida a la Bitácora.", action: { label: "Deshacer", onClick: () => { undo(); toast("Consigna deshecha"); } }, duration: 8000 });
 }
 function handleAction(id: string) {
  if (id === "btn-stress-test") { setStress(!stress); setPpm(stress ? 19 : 23); return; }
  if (id === "btn-apply-pac") { if (check.ok) setConfirming(true); return; }
  setCompleted((current) => ({ ...current, [id]: "Registrado (demo)" }));
  demo.log("consigna", id === "action-2" ? "Ajuste de sopladores simulado" : "Ajuste de ósmosis simulado", "Registrado desde Recomendaciones IA (demo).");
  toast.success("Acción registrada en la Bitácora (demo)");
 }
 return <ScadaShell><div data-stress={stress ? "active" : "inactive"}><main className="w-full pt-28 pb-20 px-10 max-w-7xl mx-auto space-y-8">

<div className="rounded-lg bg-gradient-to-br from-scada-ink-10 via-scada-ink-30/70 to-scada-ink-85/40 border border-scada-ink-26/80 p-8 shadow-sm relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">

<div className="space-y-3 max-w-2xl">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-mono font-bold bg-primary/10 text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Simulación de ejemplo
            </span>
<span className="text-xs font-label-mono text-scada-ink-35">Referencia del diseño: <strong className="text-scada-ink-86">99.8%</strong></span>
</div>
<div >
<h1 className="text-2xl lg:text-3xl font-bold text-scada-ink-33 tracking-normal font-headline-lg">
              Recomendaciones de Optimización IA
            </h1>
<p className="text-sm text-scada-ink-34 mt-1 leading-relaxed">
              Estimaciones ilustrativas de costos y calidad; no constituyen validación técnica ni normativa.
            </p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-gradient-to-br from-scada-ink-17/10 via-scada-ink-17/5 to-transparent border border-scada-ink-37/80 rounded-lg p-5 shadow-xs shrink-0">
<div className="w-12 h-12 rounded-lg bg-scada-ink-43 text-scada-ink-10 flex items-center justify-center shrink-0 shadow-md shadow-scada-ink-43/20">
<span className="material-symbols-outlined text-[26px]">savings</span>
</div>
<div >
<span className="block text-xs font-label-mono uppercase tracking-normal text-scada-ink-39 font-bold">
              Ahorro Proyectado Total
            </span>
<div className="text-3xl font-extrabold text-scada-ink-51 font-data-metric-lg tracking-normal mt-0.5">
              {formatDemoMoney(projection.totalMonthlySaving)} <span className="text-base font-semibold text-scada-ink-43 font-sans">USD/mes</span>
</div>
<span className="text-xs text-scada-ink-35 font-body-sm mt-0.5 block">
              3 escenarios de demostración
            </span>
</div>
</div>
</div>
</div>

<div className="rounded-lg bg-scada-ink-10 border border-scada-ink-26 shadow-sm p-8 space-y-8">

<div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-scada-ink-31 gap-4">
<div className="space-y-1">
<div className="flex items-center gap-2.5">
<span className="px-2.5 py-1 rounded-md text-xs font-label-mono font-bold bg-scada-ink-44/15 text-scada-ink-82 border border-scada-ink-44/30 uppercase tracking-normal">
              Prioridad Alta
            </span>
<span className="text-xs font-label-mono text-scada-ink-35">Reactor Floculador #01 · Dosificación PAC</span>
</div>
<h2 className="text-xl font-bold text-scada-ink-33 font-headline-md tracking-normal">
            Optimización Dinámica de Coagulación (PAC) según Carga Orgánica
          </h2>
<p className="text-sm text-scada-ink-34 font-body-md">
            Escenario de ejemplo: comparar dosis de PAC con una referencia de 28 ppm.
          </p>
</div>

<div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-scada-ink-30 border border-scada-ink-26 shrink-0">
<span className="material-symbols-outlined text-scada-ink-43 text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
<div className="text-left">
<div className="text-[11px] font-label-mono text-scada-ink-35 uppercase leading-none">Norma Oficial</div>
<div className="text-xs font-bold text-scada-ink-32 mt-0.5">Límites de referencia</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="rounded-lg p-6 bg-scada-ink-30 border border-scada-ink-26 flex flex-col justify-between">
<div >
<div className="flex items-center justify-between text-xs font-label-mono text-scada-ink-35 uppercase font-semibold">
<span >Dosis de referencia</span>
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-extrabold text-scada-ink-86 font-data-metric-lg">28</span>
<span className="text-lg font-bold text-scada-ink-35">ppm</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-scada-ink-26 text-xs text-scada-ink-35">
            Costo PAC de referencia: <strong className="text-scada-ink-86 font-label-mono">$0.58 / m³</strong>
</div>
</div>

<div className="rounded-lg p-6 bg-scada-ink-70/70 border-2 border-scada-ink-87 flex flex-col justify-between relative shadow-sm">
<div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full bg-primary text-scada-ink-10 text-[10px] font-label-mono font-bold tracking-normal uppercase">
            Simulada
          </div>
<div >
<div className="flex items-center gap-1.5 text-xs font-label-mono text-primary uppercase font-bold">
<span className="material-symbols-outlined text-[18px]">auto_mode</span>
<span >Dosis simulada</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-extrabold text-primary font-data-metric-lg" id="target-ppm-display">{ppm}</span>
<span className="text-lg font-bold text-scada-ink-88">ppm</span>
<span className="ml-2 text-xs font-label-mono font-bold text-scada-ink-51 bg-scada-ink-54 px-2 py-0.5 rounded-md">
                {projection.doseReduction >= 0 ? "−" : "+"}{Math.abs(projection.doseReduction).toFixed(1)}% dosis
              </span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-scada-ink-71/80 text-xs text-scada-ink-34">
            Costo proyectado: <strong className="text-primary font-label-mono font-bold">{formatDemoMoney(projection.projectedCost, 3)} / m³</strong>
</div>
</div>

<div className="rounded-lg p-6 bg-scada-ink-36/70 border border-scada-ink-37 flex flex-col justify-between">
<div >
<div className="flex items-center justify-between text-xs font-label-mono text-scada-ink-39 uppercase font-bold">
<span >Ahorro Estimado Reactor</span>
<span className="material-symbols-outlined text-[20px] text-scada-ink-51">trending_down</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-extrabold text-scada-ink-51 font-data-metric-lg">{formatDemoMoney(projection.monthlySaving)}</span>
<span className="text-xs font-semibold text-scada-ink-39 font-sans">USD/mes</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-scada-ink-37/80 text-xs text-scada-ink-34">
            Ahorro unitario: <strong className="text-scada-ink-51 font-label-mono font-bold">{formatDemoMoney(projection.unitSaving, 3)} / m³</strong> tratado
          </div>
</div>
</div>

<div className="rounded-lg p-6 bg-scada-ink-30/80 border border-scada-ink-26/90 space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<label className="text-sm font-bold text-scada-ink-33" htmlFor="dosing-scrubber">
              Ajuste fino del punto de consigna (PAC)
            </label>
</div>
<div className="text-xs font-label-mono text-scada-ink-34">
            Simulando consigna: <span className="font-bold text-primary text-sm px-2 py-0.5 rounded bg-scada-ink-89 border border-scada-ink-71" id="scrubber-value">{ppm} ppm</span>
</div>
</div>

<input className="w-full h-2.5 bg-scada-ink-26 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none" id="dosing-scrubber" max="32" min="15" type="range" value={ppm} onChange={(event) => { setPpm(Number(event.target.value)); }} aria-label="Consigna PAC" />

<div className="flex items-center justify-between text-xs font-label-mono text-scada-ink-35 pt-1">
<span className="text-scada-ink-40 font-medium">15 ppm (Límite bajo)</span>
<span className="text-scada-ink-51 font-bold bg-scada-ink-54/70 px-2.5 py-0.5 rounded-full border border-scada-ink-37 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-17"></span>
            Rango de referencia: 18–22 ppm
          </span>
<span className="text-scada-ink-35">32 ppm (Histórico conservador)</span>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-label-mono uppercase tracking-normal text-scada-ink-35 font-bold">
          Calidad estimada · Modelo ilustrativo
        </h3>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

<div className="p-4 rounded-lg border border-scada-ink-26 bg-scada-ink-10 flex items-center justify-between">
<div className="space-y-1">
<span className="text-xs text-scada-ink-35 font-label-mono">Turbidez Proyectada</span>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-scada-ink-32 font-data-metric-md" id="val-turbidity">{projection.turbidity.toFixed(1)} NTU</span>
<span className="text-xs text-scada-ink-51 font-semibold font-label-mono">(Límite: &lt; 4.0 NTU)</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-scada-ink-36 border border-scada-ink-37 text-scada-ink-39 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span >{projection.turbidity < 4 ? "Bajo límite de referencia" : "Supera límite de referencia"}</span>
</div>
</div>

<div className="p-4 rounded-lg border border-scada-ink-26 bg-scada-ink-10 flex items-center justify-between">
<div className="space-y-1">
<span className="text-xs text-scada-ink-35 font-label-mono">DQO Efluente Proyectada</span>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-scada-ink-32 font-data-metric-md" id="val-dqo">{projection.dqo.toFixed(1)} mg/L</span>
<span className="text-xs text-scada-ink-51 font-semibold font-label-mono">(Límite: &lt; 60 mg/L)</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-scada-ink-36 border border-scada-ink-37 text-scada-ink-39 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span >{projection.dqo < 60 ? `Margen estimado ${projection.dqoMargin.toFixed(1)}%` : "Supera límite de referencia"}</span>
</div>
</div>
</div>
</div>

<p role={check.ok ? undefined : "alert"} className={`text-sm font-semibold ${check.ok ? "text-scada-ink-34" : "text-destructive"}`}>{check.ok ? `Rango seguro de aprobación: ${SAFE_DOSE_MIN}–${SAFE_DOSE_MAX} ppm. Se pedirá confirmación.` : `No se puede registrar: ${check.reason}`}</p>
<div className="pt-4 border-t border-scada-ink-31 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs font-label-mono text-scada-ink-35">
<span className="material-symbols-outlined text-scada-ink-43 text-[18px]">bolt</span>
<span >Sin conexión a planta · Registro de demostración</span>
</div>
<div className="flex items-center gap-3">
<Button variant="ghost" size="sm" onClick={() => handleAction("btn-stress-test")} className="px-5 py-2.5 rounded-lg border border-scada-ink-3 hover:bg-scada-ink-31 text-scada-ink-86 text-sm font-semibold transition-colors flex items-center gap-2 shadow-xs active:scale-95" id="btn-stress-test" data-action="btn-stress-test" disabled={Boolean(completed["btn-stress-test"]) && !"btn-stress-test".startsWith("filter-")}>{stress ? "Escenario Estrés Activo (+30% DQO)" : <> 
<span className="material-symbols-outlined text-[18px] text-scada-ink-34">science</span>
            Simular Escenario (+30% DQO)
           </>}</Button>
<Button variant="ghost" size="sm" onClick={() => handleAction("btn-apply-pac")} className="px-6 py-2.5 rounded-lg bg-primary hover:bg-scada-ink-90 text-scada-ink-10 text-sm font-bold transition-all flex items-center gap-2 shadow-md shadow-primary/20 hover:shadow-lg active:scale-95" id="btn-apply-pac" data-action="btn-apply-pac" disabled={applied || !check.ok}>{applied ? `Registrada: ${ppm} ppm (demo)` : <> 
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>send</span>
            Registrar consigna (demo)
           </>}</Button>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-bold text-scada-ink-33 font-headline-sm">
          Otras Recomendaciones Disponibles
        </h3>
<span className="text-xs font-label-mono text-scada-ink-35">2 escenarios complementarios</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="p-6 rounded-lg bg-scada-ink-10 border border-scada-ink-26 shadow-sm flex flex-col justify-between space-y-5 hover:border-scada-ink-3 transition-all">
<div className="space-y-3">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-label-mono uppercase font-semibold text-scada-ink-35">Biorreactor MBR · Tren 2</span>
<span className="px-2.5 py-0.5 rounded-full text-xs font-label-mono font-bold bg-scada-ink-54 text-scada-ink-39">
                +$3,120 USD/m
              </span>
</div>
<h4 className="text-base font-bold text-scada-ink-33 font-headline-sm">
              Modulación de Frecuencia Soplador BLW-02
            </h4>
<p className="text-xs text-scada-ink-34 font-body-sm leading-relaxed">
              Ajuste de velocidad a 42 Hz durante la ventana de baja carga nocturna manteniendo el oxígeno disuelto en 2.0 mg/L constante.
            </p>
<div className="p-3 rounded-lg bg-scada-ink-30 border border-scada-ink-31 flex items-center justify-between text-xs font-label-mono">
<span className="text-scada-ink-35">Consumo Específico: <strong className="text-scada-ink-32">1.84 → 1.72 kWh/m³</strong></span>
<span className="text-scada-ink-51 font-bold">-6.5% Energía</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="text-xs font-label-mono text-scada-ink-35">VFD: 48 Hz → <strong >42 Hz</strong></span>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-2")} className="px-4 py-2 rounded-lg bg-scada-ink-31 hover:bg-primary hover:text-scada-ink-10 text-primary text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs" data-action="action-2" disabled={Boolean(completed["action-2"]) && !"action-2".startsWith("filter-")}>{completed["action-2"] || <> 
<span >Simular consigna 42 Hz</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </>}</Button>
</div>
</div>

<div className="p-6 rounded-lg bg-scada-ink-10 border border-scada-ink-26 shadow-sm flex flex-col justify-between space-y-5 hover:border-scada-ink-3 transition-all">
<div className="space-y-3">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-label-mono uppercase font-semibold text-scada-ink-35">Ósmosis Inversa RO-03</span>
<span className="px-2.5 py-0.5 rounded-full text-xs font-label-mono font-bold bg-scada-ink-54 text-scada-ink-39">
                +$1,400 USD/m
              </span>
</div>
<h4 className="text-base font-bold text-scada-ink-33 font-headline-sm">
              Ajuste de Anti-incrustante Químico
            </h4>
<p className="text-xs text-scada-ink-34 font-body-sm leading-relaxed">
              Índice LSI indica sobredosificación innecesaria. Reducción a 2.4 ppm protege la membrana y prolonga su vida útil 3 meses más.
            </p>
<div className="p-3 rounded-lg bg-scada-ink-30 border border-scada-ink-31 flex items-center justify-between text-xs font-label-mono">
<span className="text-scada-ink-35">Presión Transmembrana: <strong className="text-scada-ink-32">2.1 bar (Estable)</strong></span>
<span className="text-scada-ink-51 font-bold">+3 meses vida útil</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="text-xs font-label-mono text-scada-ink-35">Dosis: 3.6 → <strong >2.4 ppm</strong></span>
<Button variant="ghost" size="sm" onClick={() => handleAction("action-3")} className="px-4 py-2 rounded-lg bg-scada-ink-31 hover:bg-primary hover:text-scada-ink-10 text-primary text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs" data-action="action-3" disabled={Boolean(completed["action-3"]) && !"action-3".startsWith("filter-")}>{completed["action-3"] || <> 
<span >Simular ajuste de ósmosis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
 </>}</Button>
</div>
</div>
</div>
</div>


</main></div>
 <Dialog open={detail !== null} onOpenChange={(open) => { if (!open) setDetail(null); }}><DialogContent><DialogHeader><DialogTitle>Resultado de demostración</DialogTitle><DialogDescription>{detail}</DialogDescription></DialogHeader></DialogContent></Dialog>
 <AlertDialog open={confirming} onOpenChange={setConfirming}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>¿Registrar consigna de {ppm} ppm?</AlertDialogTitle><AlertDialogDescription>Turbidez estimada {projection.turbidity.toFixed(1)} NTU · DQO estimada {projection.dqo.toFixed(0)} mg/L · Ahorro estimado {formatDemoMoney(projection.monthlySaving)}/mes. Es una demostración: no se envía ninguna orden a la planta. Podrás deshacerla.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={confirmApply}>Confirmar registro</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
 </ScadaShell>;
}
