import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
export function ScadaShell({ children }: { children: ReactNode }) { return <div className="scada-import"><aside className="fixed left-0 top-0 h-full w-72 bg-scada-ink-1 text-scada-ink-3 z-50 flex flex-col justify-between border-r border-scada-ink-2 shadow-2xl">
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
<div className="font-label-mono text-[11px] text-scada-ink-10 font-semibold leading-tight">TELEMETRÍA LINK</div>
<div className="font-label-mono text-[9px] text-scada-ink-15">Modbus/TCP • 42ms</div>
</div>
</div>
<span className="font-label-mono text-[11px] font-bold text-scada-ink-14 bg-scada-ink-16/60 border border-scada-ink-17/40 px-2 py-0.5 rounded">ONLINE</span>
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
<span className="px-2 py-0.5 rounded-full bg-scada-ink-23/20 text-scada-ink-24 border border-scada-ink-23/40 font-label-mono text-[11px] font-bold">3</span>
</Link>
<Link to="/recomendaciones" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="recommendations">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">auto_mode</span>
<span className="">Recomendaciones IA</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-scada-ink-9/20 text-scada-ink-12 border border-scada-ink-9/30 font-label-mono text-[10px] font-bold">ACTIVO</span>
</Link>
<Link to="/bitacora" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="tracking">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">verified</span>
<span className="">Bitácora y Validación</span>
</Link>
<Link to="/carga-csv" activeProps={{ className: "scada-nav-active", "aria-current": "page" }} className="scada-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px]" data-path="import">
<span className="material-symbols-outlined text-[20px] text-scada-ink-15 group-hover:text-scada-ink-6 transition-colors">upload_file</span>
<span className="">Carga de Datos CSV</span>
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
<span className="text-scada-ink-14 font-bold">● SYNC 100%</span>
</div>
</div>
</aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 min-h-[68px] py-3.5 px-8 bg-scada-ink-10/95 backdrop-blur-md border-b border-scada-ink-26 shadow-xs z-40 flex items-center justify-between transition-all">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-scada-ink-30 bg-scada-ink-31 border border-scada-ink-26 text-scada-ink-32 transition-colors  shadow-xs group">
<span className="material-symbols-outlined text-primary text-[20px]">factory</span>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-sm font-bold text-scada-ink-33">Planta Norte</span>
<span className="text-scada-ink-15 text-xs font-normal">·</span>
<span className="text-xs font-body-md text-scada-ink-34 font-medium">Efluente Industrial</span>
</div>
<span className="material-symbols-outlined text-scada-ink-15 group-hover:text-scada-ink-34 text-[18px] ml-1 transition-colors">expand_more</span>
</div>

<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-scada-ink-30 border border-scada-ink-26 text-scada-ink-34 text-xs font-label-mono shadow-xs">
<span className="material-symbols-outlined text-scada-ink-15 text-[16px]">schedule</span>
<span className="font-semibold text-scada-ink-33">Turno B</span>
<span className="text-scada-ink-35 font-normal">(14:00 - 22:00)</span>
</div>
</div>

<div className="flex items-center gap-3.5">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-scada-ink-36 border border-scada-ink-37 text-scada-ink-38 shadow-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scada-ink-14 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-scada-ink-17"></span>
</span>
<span className="font-label-mono text-xs font-bold tracking-normal text-scada-ink-39">NOM-001: 99.4% Cumple</span>
</div>

<div className="relative p-2 rounded-lg bg-scada-ink-30 bg-scada-ink-31 border border-scada-ink-26 text-scada-ink-34  transition-colors">
<span className="material-symbols-outlined text-[20px] block">notifications</span>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-scada-ink-40 text-scada-ink-10 rounded-full font-label-mono text-[9px] flex items-center justify-center font-bold shadow-xs">3</span>
</div>

<div className="flex items-center gap-2.5 pl-3 border-l border-scada-ink-26">
<div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-scada-ink-41 to-scada-ink-18 text-scada-ink-10 flex items-center justify-center font-bold font-label-mono text-xs shadow-sm">
        OP
      </div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold text-scada-ink-33 leading-tight">Ing. M. Romero</span>
<span className="text-[10px] font-label-mono text-scada-ink-35 leading-tight mt-0.5">Jefe de Operación</span>
</div>
</div>
</div>
</header>{children}</div></div>; }
