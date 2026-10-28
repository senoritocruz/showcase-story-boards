import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { openAlertCount, useDemo } from "@/lib/demo-store";
export function ScadaShell({ children }: { children: ReactNode }) { const open = useDemo(openAlertCount); return <div className="scada-import"><aside className="fixed left-0 top-0 h-full w-72 bg-scada-ink-1 text-scada-ink-3 z-50 flex flex-col justify-between border-r border-scada-ink-2 shadow-2xl">
<div className="flex flex-col">

<div className="h-20 px-5 flex items-center gap-3 bg-scada-ink-4 border-b border-scada-ink-5">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-scada-ink-6 via-scada-ink-7 to-scada-ink-8 flex items-center justify-center text-scada-ink-10 shadow-lg shadow-scada-ink-9/20 shrink-0">
<span className="material-symbols-outlined text-[24px]">water_drop</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-md font-bold text-scada-ink-10 tracking-normal text-[17px]">AquaSense</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono font-bold bg-scada-ink-6 text-scada-ink-11 uppercase tracking-normal">AI</span>
</div>
<span className="font-label-mono text-[10px] text-scada-ink-12/80 tracking-normal uppercase">SCADA CORE v3.4</span>
</div>
</div>

<div className="px-4 pt-4 pb-2">
<div className="p-3 rounded-lg bg-scada-ink-13/80 border border-scada-ink-9/30 flex items-center justify-between shadow-inner">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scada-ink-14 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-scada-ink-14"></span>
</span>
<div >
<div className="font-label-mono text-[11px] text-scada-ink-10 font-semibold leading-tight">Datos de ejemplo</div>
<div className="font-label-mono text-[9px] text-scada-ink-15">Sin conexión a planta</div>
</div>
</div>
<span className="font-label-mono text-[11px] font-bold text-scada-ink-14 bg-scada-ink-16/60 border border-scada-ink-17/40 px-2 py-0.5 rounded">DEMO</span>
</div>
</div>

<nav className="flex flex-col gap-1.5 px-3 py-3">
<Link to="/costos" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="dashboard">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-20">monitoring</span>
<span className="">Tablero de Costos y KPIs</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-scada-ink-12"></span>
</Link>
<Link to="/alertas" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="anomalies">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-22 transition-colors">warning</span>
<span className="">Desviaciones y Alertas</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-23/20 text-scada-ink-24 border border-scada-ink-23/40 font-label-mono text-[11px] font-bold">{open}</span>
</Link>
<Link to="/recomendaciones" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="recommendations">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">auto_mode</span>
<span className="">Recomendaciones IA</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-9/20 text-scada-ink-12 border border-scada-ink-9/30 font-label-mono text-[10px] font-bold">ACTIVO</span>
</Link>
<Link to="/bitacora" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="tracking">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">verified</span>
<span className="">Bitácora y Validación</span>
</div>
</Link>
<Link to="/carga-csv" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="import">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">upload_file</span>
<span className="">Carga de Datos CSV</span>
</div>
</Link>
</nav>
</div>

<div className="p-3 m-3 rounded-lg bg-scada-ink-4/90 border border-scada-ink-25 flex flex-col gap-2.5 shadow-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-scada-ink-6 text-[18px]">precision_manufacturing</span>
<span className="font-label-mono text-[11px] text-scada-ink-26 font-semibold uppercase">Auto Dosificación</span>
</div>
<span className="px-1.5 py-0.5 rounded font-label-mono text-[9px] bg-scada-ink-9/20 text-scada-ink-12 border border-scada-ink-6/30 font-bold">AI CLOUD</span>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between font-label-mono text-[11px]">
<span className="text-scada-ink-15">Caudal Reactor</span>
<span className="text-scada-ink-12 font-bold">142.8 m³/h</span>
</div>
<div className="w-full bg-scada-ink-27 h-2 rounded-full overflow-hidden p-0.5 border border-scada-ink-28">
<div className="bg-gradient-to-r from-scada-ink-6 to-scada-ink-7 h-full w-[72%] rounded-full shadow-sm"></div>
</div>
</div>
<div className="pt-2 border-t border-scada-ink-29 flex items-center justify-between text-[10px] font-label-mono text-scada-ink-15">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-scada-ink-15">memory</span>
        Gateway SCADA 3.4
      </span>
<span className="text-scada-ink-14 font-bold">● DEMO</span>
</div>
</div>
</aside><div className="pl-72"><TopBar />{children}</div></div>; }
