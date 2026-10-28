// @ts-nocheck
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function BitacoraScreen() {
  useEffect(() => {

    (function initLogInteractions() {
      // 1. Filtrado dinámico de registros
      const filterChips = document.querySelectorAll('.filter-chip');
      const cards = document.querySelectorAll('.log-card');

      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const filter = chip.getAttribute('data-filter');

          // Reset chip styles
          filterChips.forEach(c => {
            c.className = 'filter-chip px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-label-mono text-caption font-medium transition-all';
          });
          chip.className = 'filter-chip px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-mono text-caption font-bold shadow-xs border border-primary transition-all';

          // Show/Hide cards
          cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // 2. Simulación de Firma Digital
      const btnSign = document.getElementById('btn-execute-sign');
      const btnSignTop = document.getElementById('btn-sign-shift-top');
      const signText = document.getElementById('sign-btn-text');
      const toast = document.getElementById('toast-notification');
      const toastTitle = document.getElementById('toast-title');
      const toastMsg = document.getElementById('toast-message');

      function triggerShiftSign() {
        if (!btnSign) return;
        btnSign.disabled = true;
        signText.textContent = "Simulando validación de firma...";

        setTimeout(() => {
          btnSign.className = "w-full sm:w-auto px-6 py-3 rounded-xl bg-tertiary text-on-tertiary font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2.5 shadow-md";
          signText.textContent = "Firma simulada · Turno B";
          
          if (toast) {
            toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
            setTimeout(() => {
              toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
            }, 4000);
          }
        }, 1200);
      }

      if (btnSign) btnSign.addEventListener('click', triggerShiftSign);
      if (btnSignTop) btnSignTop.addEventListener('click', triggerShiftSign);

      // 3. Export CSV Feedback
      const btnExport = document.getElementById('btn-export-log');
      if (btnExport) {
        btnExport.addEventListener('click', () => {
          if (toastTitle && toastMsg && toast) {
            toastTitle.textContent = "Reporte CSV Generado";
            toastMsg.textContent = "Descarga iniciada: bitacora_turno_b_20250514.csv";
            toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
            setTimeout(() => {
              toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
            }, 3000);
          }
        });
      }
    })();
  
  }, []);
  return (
    <div className="scada-root">


{/* 1. Technical SCADA Sidebar */}
<aside className="fixed left-0 top-0 h-full w-72 bg-[#0b192c] text-slate-300 z-50 flex flex-col justify-between border-r border-[#1a2e4a] shadow-2xl">
<div className="flex flex-col">
{/* Brand SCADA Header */}
<div className="h-20 px-5 flex items-center gap-3 bg-[#081220] border-b border-[#1b2b44]">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 shrink-0">
<span className="material-symbols-outlined text-[24px]">water_drop</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-md font-bold text-white tracking-tight text-[17px]">AquaSense</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono font-bold bg-cyan-400 text-slate-950 uppercase tracking-wider">AI</span>
</div>
<span className="font-label-mono text-[10px] text-cyan-300/80 tracking-widest uppercase">SCADA CORE v3.4</span>
</div>
</div>
{/* Active Industrial Telemetry Link HUD */}
<div className="px-4 pt-4 pb-2">
<div className="p-3 rounded-xl bg-[#11233d]/80 border border-cyan-500/30 flex items-center justify-between shadow-inner">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
<div >
<div className="font-label-mono text-[11px] text-white font-semibold leading-tight">Datos de ejemplo</div>
<div className="font-label-mono text-[9px] text-slate-400">Sin conexión a planta</div>
</div>
</div>
<span className="font-label-mono text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">DEMO</span>
</div>
</div>
{/* Navigation links: Item 'Bitácora y Validación' clearly highlighted and active */}
<nav className="flex flex-col gap-1.5 px-3 py-3">
{/* 1. Tablero de Costos y KPIs (Inactivo) */}
<Link to="/costos" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">monitoring</span>
<span className="">Tablero de Costos y KPIs</span>
</div>
</Link>
{/* 2. Desviaciones y Alertas (Inactivo) */}
<Link to="/alertas" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-amber-400 transition-colors">warning</span>
<span className="">Desviaciones y Alertas</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-label-mono text-[11px] font-bold">3</span>
</Link>
{/* 3. Recomendaciones IA (Inactivo) */}
<Link to="/recomendaciones" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">auto_mode</span>
<span className="">Recomendaciones IA</span>
</div>
</Link>
{/* 4. Bitácora y Validación (ACTIVO RESALTADO) */}
<Link to="/bitacora" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500/25 to-cyan-500/10 text-cyan-200 border-l-4 border-cyan-400 font-semibold shadow-lg shadow-cyan-950/40 transition-all text-[13px] group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-cyan-300" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
<span className="text-white font-semibold">Bitácora y Validación</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-cyan-400 text-slate-950 font-label-mono text-[10px] font-bold tracking-wider shadow-sm">ACTIVO</span>
</Link>
{/* 5. Carga de Datos CSV (Inactivo) */}
<Link to="/carga-csv" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">upload_file</span>
<span className="">Carga de Datos CSV</span>
</Link>
</nav>
</div>
{/* Sidebar Footer Card */}
<div className="p-3.5 m-3 rounded-2xl bg-[#081220]/90 border border-[#1d3353] flex flex-col gap-2.5 shadow-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-cyan-400 text-[18px]">precision_manufacturing</span>
<span className="font-label-mono text-[11px] text-slate-200 font-semibold uppercase">Auto Dosificación</span>
</div>
<span className="px-1.5 py-0.5 rounded font-label-mono text-[9px] bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold">AI CLOUD</span>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between font-label-mono text-[11px]">
<span className="text-slate-400">Caudal Reactor</span>
<span className="text-cyan-300 font-bold">142.8 m³/h</span>
</div>
<div className="w-full bg-[#162740] h-2 rounded-full overflow-hidden p-0.5 border border-[#233f66]">
<div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[72%] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
</div>
</div>
<div className="pt-2 border-t border-[#1a2d48] flex items-center justify-between text-[10px] font-label-mono text-slate-400">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-slate-400">memory</span>
        Gateway SCADA 3.4
      </span>
<span className="text-emerald-400 font-bold">● DATOS DE DEMO</span>
</div>
</div>
</aside>
{/* Main Wrapper */}
<div className="pl-72">
{/* 2. Superior Header */}
<header className="fixed top-0 left-72 right-0 min-h-[68px] py-3.5 px-8 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs z-40 flex items-center justify-between transition-all">
<div className="flex items-center gap-3">
{/* Unified Plant Selector */}
<div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors cursor-pointer shadow-xs group">
<span className="material-symbols-outlined text-primary text-[20px]">factory</span>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-sm font-bold text-slate-900">Planta Norte</span>
<span className="text-slate-400 text-xs font-normal">·</span>
<span className="text-xs font-body-md text-slate-600 font-medium">Efluente Industrial</span>
</div>
<span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 text-[18px] ml-1 transition-colors">expand_more</span>
</div>
{/* Shift Pill */}
<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-label-mono shadow-xs">
<span className="material-symbols-outlined text-slate-400 text-[16px]">schedule</span>
<span className="font-semibold text-slate-900">Turno B</span>
<span className="text-slate-500 font-normal">(14:00 - 22:00)</span>
</div>
</div>
{/* Right Actions */}
<div className="flex items-center gap-3.5">
{/* NOM Badge */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-xs">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-label-mono text-xs font-bold tracking-tight text-emerald-800">NOM-001: 99.4% (ejemplo)</span>
</div>
{/* Notifications */}
<div className="relative p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[20px] block">notifications</span>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full font-label-mono text-[9px] flex items-center justify-center font-bold shadow-xs">3</span>
</div>
{/* Operator Profile */}
<div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
<div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-600 text-white flex items-center justify-center font-bold font-label-mono text-xs shadow-sm">
          OP
        </div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold text-slate-900 leading-tight">Ing. M. Romero</span>
<span className="text-[10px] font-label-mono text-slate-500 leading-tight mt-0.5">Jefe de Operación</span>
</div>
</div>
</div>
</header>
{/* 3. Main Content: Rediseñado con Alto Contraste, Tarjetas Delimitadas y Jerarquía Nítida */}
<main className="w-full pt-28 pb-20 px-10 max-w-7xl mx-auto space-y-8"><div className="flex flex-col w-full space-y-8">
{/* 1. Cabecera Principal y KPIs de Turno */}
<section className="space-y-6">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-lowest border border-slate-200 rounded-2xl p-6 shadow-sm">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold border border-primary/20">
            SCADA Log &amp; Audit Trail
          </span>
<span className="font-label-mono text-caption text-outline bg-slate-100 px-2 py-0.5 rounded border border-slate-200">RFC-NOM-001-2021-V4</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold">
          Bitácora de Operaciones &amp; Validación de Turno
        </h1>
<p className="font-body-md text-body-md text-slate-600 max-w-3xl leading-relaxed">
          Trazabilidad completa de consignas SCADA, ajustes aprobados por operador y auditoría continua de cumplimiento normativo NOM-001.
        </p>
</div>
{/* Quick Action: Firmar Turno Modal Trigger */}
<div className="flex items-center gap-3 shrink-0">
<button className="px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-slate-50 text-slate-700 font-label-mono text-caption font-semibold flex items-center gap-2 border border-slate-300 shadow-sm transition-all" id="btn-export-log">
<span className="material-symbols-outlined text-[18px] text-slate-600">download</span>
<span className="">Exportar Audit CSV</span>
</button>
<button className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center gap-2 shadow-md transition-all font-semibold" id="btn-sign-shift-top">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>draw</span>
<span className="">Simular cierre de Turno B</span>
</button>
</div>
</div>
{/* KPI Metric Strip (Contraste alto, bordes definidos y tarjeta blanca) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
{/* KPI 1: Registros Validados */}
<div className="bg-surface-container-lowest p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<span className="font-label-mono text-label-mono text-slate-500 uppercase tracking-wider font-semibold">Validaciones Turno B</span>
<span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-caption font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-emerald-600">check_circle</span>
            100% Verificados
          </span>
</div>
<div className="my-4 flex items-baseline gap-2.5">
<span className="font-data-metric-lg text-display-lg text-slate-900 font-bold">6</span>
<span className="font-label-mono text-body-sm text-slate-500 font-medium">consignas registradas</span>
</div>
<div className="pt-3 bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-caption font-label-mono text-slate-600">
<span className="">0 discrepancias de PLC</span>
<span className="text-tertiary font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ACK &lt; 1.2s</span>
</div>
</div>
{/* KPI 2: Ahorro Económico Turno B */}
<div className="bg-surface-container-lowest p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<span className="font-label-mono text-label-mono text-slate-500 uppercase tracking-wider font-semibold">Ahorro Económico Acumulado</span>
<span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-caption font-bold">
            PAC + Sopladores
          </span>
</div>
<div className="my-4 flex items-baseline gap-2.5">
<span className="font-data-metric-lg text-display-lg text-emerald-800 font-bold">+$4,920</span>
<span className="font-label-mono text-body-sm text-slate-500 font-medium">USD generados</span>
</div>
<div className="pt-3 bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-caption font-label-mono text-slate-600">
<span className="">Target turno: $3,800 USD</span>
<span className="text-tertiary font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">+29.4% sobre meta</span>
</div>
</div>
{/* KPI 3: Firma Digital del Turno */}
<div className="bg-surface-container-lowest p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<span className="font-label-mono text-label-mono text-slate-500 uppercase tracking-wider font-semibold">Firma Digital &amp; Cierre</span>
<span className="px-2 py-0.5 rounded bg-amber-50 text-slate-800 border border-amber-500/40 font-label-mono text-caption font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            En Curso (14:00 - 22:00)
          </span>
</div>
<div className="my-4 flex items-baseline gap-2.5">
<span className="font-headline-md text-headline-md text-slate-900 font-bold">Pendiente de Cierre</span>
</div>
<div className="pt-3 bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-caption font-label-mono text-slate-600">
<span className="text-slate-500">Cierre formal: 22:00 hrs</span>
<span className="text-primary font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Jefe: M. Romero</span>
</div>
</div>
</div>
</section>
{/* 2. Barra de Segmentación y Filtros con Contenedor Marcado */}
<section className="space-y-4">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<h3 className="font-headline-sm text-slate-900 font-bold uppercase tracking-wider text-xs">Filtrar y Explorar Eventos de Bitácora</h3>
</div>
<span className="font-label-mono text-caption text-slate-500">Registros de ejemplo · sin auditoría real</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-lowest p-3.5 rounded-2xl border border-slate-200 shadow-sm">
{/* Selector de Turno (Pills Segmentadas) */}
<div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 overflow-x-auto">
<button className="px-3.5 py-1.5 rounded-lg text-caption font-label-mono text-slate-600 hover:text-slate-900 hover:bg-white transition-all whitespace-nowrap font-medium">
        Turno A <span className="text-slate-400">(06:00 - 14:00)</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm font-label-mono text-caption text-primary font-bold border border-slate-200 transition-all flex items-center gap-1.5 whitespace-nowrap">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="">Turno B - Activo</span>
<span className="text-primary/70">(14:00 - 22:00)</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg text-caption font-label-mono text-slate-600 hover:text-slate-900 hover:bg-white transition-all whitespace-nowrap font-medium">
        Turno C <span className="text-slate-400">(22:00 - 06:00)</span>
</button>
<button className="px-3.5 py-1.5 rounded-lg text-caption font-label-mono text-slate-600 hover:text-slate-900 hover:bg-white transition-all whitespace-nowrap font-medium">
        Histórico 7D
      </button>
</div>
{/* Filtros de Tipo de Registro */}
<div className="flex items-center gap-2 overflow-x-auto" id="filter-container">
<button className="filter-chip px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-mono text-caption font-bold shadow-xs border border-primary transition-all" data-filter="all">
        Todos (6)
      </button>
<button className="filter-chip px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-label-mono text-caption font-medium transition-all" data-filter="ai">
        Consignas IA (3)
      </button>
<button className="filter-chip px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-label-mono text-caption font-medium transition-all" data-filter="manual">
        Ajustes Manuales (2)
      </button>
<button className="filter-chip px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-label-mono text-caption font-medium transition-all" data-filter="nom">
        Incidentes NOM-001 (1)
      </button>
</div>
</div>
</section>
{/* 3. Lista de Registros de Bitácora Operativa (Tarjetas con Borde Definido, Banda Lateral y Fondo Blanco) */}
<section className="space-y-4" id="log-records-container">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">view_timeline</span>
<h3 className="font-headline-sm text-slate-900 font-bold uppercase tracking-wider text-xs">Eventos Registrados en Turno B</h3>
</div>
<span className="font-label-mono text-caption text-slate-500 font-medium">Orden cronológico inverso</span>
</div>
{/* REGISTRO 1: Consigna IA Dosificación PAC */}
<article className="log-card bg-surface-container-lowest rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between relative overflow-hidden group" data-category="ai">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
<div className="flex flex-col md:flex-row md:items-center gap-5 w-full md:w-3/5 pl-2">
{/* Timestamp + Machine Block */}
<div className="flex md:flex-col items-center md:items-start justify-between shrink-0 gap-1 min-w-[90px] pr-3 md:border-r border-slate-200">
<span className="font-data-metric-md text-data-metric-md text-slate-900 font-bold tracking-tight">18:42</span>
<span className="font-label-mono text-caption text-slate-500 font-medium">Turno B · Hoy</span>
</div>
{/* Detail Block */}
<div className="space-y-1.5 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-mono text-label-mono font-bold text-slate-900">
              Reactor Floculador #01 · Dosificación PAC
            </span>
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-primary border border-primary/20 font-label-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>auto_mode</span>
              Consigna IA Aprobada
            </span>
</div>
<p className="font-body-md text-body-md text-slate-600 leading-relaxed">
            Reducción de dosificación de <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">28 ppm</span> a <span className="font-data-metric-sm text-data-metric-sm font-bold text-primary bg-sky-50 px-1.5 py-0.5 rounded border border-primary/20">19 ppm</span> (-32%). Motivo: Turbidez en afluente baja y homogénea (1.8 NTU proyectada).
          </p>
<div className="flex items-center gap-2 font-label-mono text-caption text-slate-500">
<span className="font-medium">Operador: Ing. M. Romero</span>
<span className="">•</span>
<span className="text-tertiary font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Confirmación de ejemplo · 18:43:02</span>
</div>
</div>
</div>
{/* Impact and Audit Confirmation */}
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-2/5 pt-3 md:pt-0 bg-slate-50/60 md:bg-transparent -mx-5 md:mx-0 px-5 md:px-0 -mb-5 md:mb-0 pb-3 md:pb-0 border-t md:border-t-0 border-slate-100">
<div className="text-left md:text-right">
<div className="font-label-mono text-caption text-slate-500 font-semibold uppercase tracking-wider">Impacto Económico</div>
<div className="font-data-metric-md text-data-metric-md font-bold text-emerald-800">
            -$0.104/m³
          </div>
<div className="font-label-mono text-[10px] text-tertiary font-bold">
            +$14,820 USD/mes prorrateado
          </div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-caption font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-600">sync_saved_locally</span>
            Sincronizado SCADA
          </span>
<button className="text-primary hover:text-primary-container font-label-mono text-caption font-bold flex items-center gap-1 transition-colors">
<span className="">Ver Telemetría</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</article>
{/* REGISTRO 2: Consigna IA Biorreactor MBR */}
<article className="log-card bg-surface-container-lowest rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between relative overflow-hidden group" data-category="ai">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
<div className="flex flex-col md:flex-row md:items-center gap-5 w-full md:w-3/5 pl-2">
{/* Timestamp + Machine Block */}
<div className="flex md:flex-col items-center md:items-start justify-between shrink-0 gap-1 min-w-[90px] pr-3 md:border-r border-slate-200">
<span className="font-data-metric-md text-data-metric-md text-slate-900 font-bold tracking-tight">16:15</span>
<span className="font-label-mono text-caption text-slate-500 font-medium">Turno B · Hoy</span>
</div>
{/* Detail Block */}
<div className="space-y-1.5 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-mono text-label-mono font-bold text-slate-900">
              Biorreactor MBR · Tren 2 (Sopladores)
            </span>
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-primary border border-primary/20 font-label-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>speed</span>
              Modulación VFD
            </span>
</div>
<p className="font-body-md text-body-md text-slate-600 leading-relaxed">
            Ajuste de variador a <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">42 Hz</span>. Oxígeno Disuelto mantenido en <span className="font-data-metric-sm text-data-metric-sm font-bold text-primary bg-sky-50 px-1.5 py-0.5 rounded border border-primary/20">2.15 mg/L</span> dentro de consigna biológica aerobia.
          </p>
<div className="flex items-center gap-2 font-label-mono text-caption text-slate-500">
<span className="font-medium">Operador: Ing. M. Romero</span>
<span className="">•</span>
<span className="text-tertiary font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Sensor OD-02 Calibrado @ 14:00</span>
</div>
</div>
</div>
{/* Impact and Audit Confirmation */}
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-2/5 pt-3 md:pt-0 bg-slate-50/60 md:bg-transparent -mx-5 md:mx-0 px-5 md:px-0 -mb-5 md:mb-0 pb-3 md:pb-0 border-t md:border-t-0 border-slate-100">
<div className="text-left md:text-right">
<div className="font-label-mono text-caption text-slate-500 font-semibold uppercase tracking-wider">Ahorro Energético</div>
<div className="font-data-metric-md text-data-metric-md font-bold text-emerald-800">
            -110 kWh/día
          </div>
<div className="font-label-mono text-[10px] text-tertiary font-bold">
            +$3,120 USD/mes ahorro red
          </div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-caption font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
            Verificado en Campo
          </span>
<button className="text-primary hover:text-primary-container font-label-mono text-caption font-bold flex items-center gap-1 transition-colors">
<span className="">Curva OD / Hz</span>
<span className="material-symbols-outlined text-[14px]">show_chart</span>
</button>
</div>
</div>
</article>
{/* REGISTRO 3: Ajuste Manual de Supervisión (Buffer 02) */}
<article className="log-card bg-surface-container-lowest rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between relative overflow-hidden group" data-category="manual">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
<div className="flex flex-col md:flex-row md:items-center gap-5 w-full md:w-3/5 pl-2">
{/* Timestamp + Machine Block */}
<div className="flex md:flex-col items-center md:items-start justify-between shrink-0 gap-1 min-w-[90px] pr-3 md:border-r border-slate-200">
<span className="font-data-metric-md text-data-metric-md text-slate-900 font-bold tracking-tight">15:20</span>
<span className="font-label-mono text-caption text-slate-500 font-medium">Turno B · Hoy</span>
</div>
{/* Detail Block */}
<div className="space-y-1.5 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-mono text-label-mono font-bold text-slate-900">
              Neutralización Ácida · Tanque Buffer 02
            </span>
<span className="px-2 py-0.5 rounded-md bg-secondary-container/40 text-on-secondary-container border border-slate-300 font-label-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">tune</span>
              Dosificación Sosa Cáustica
            </span>
</div>
<p className="font-body-md text-body-md text-slate-600 leading-relaxed">
            Corrección de pH de efluente ajustado a <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">7.42</span> para preservar biomasa ante descarga ácida temporal en línea de laminación.
          </p>
<div className="flex items-center gap-2 font-label-mono text-caption text-slate-500">
<span className="font-medium">Supervisión Continua SCADA</span>
<span className="">•</span>
<span className="text-primary font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">PID Loop Loop-pH-204</span>
</div>
</div>
</div>
{/* Impact and Audit Confirmation */}
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-2/5 pt-3 md:pt-0 bg-slate-50/60 md:bg-transparent -mx-5 md:mx-0 px-5 md:px-0 -mb-5 md:mb-0 pb-3 md:pb-0 border-t md:border-t-0 border-slate-100">
<div className="text-left md:text-right">
<div className="font-label-mono text-caption text-slate-500 font-semibold uppercase tracking-wider">Optimización Químico</div>
<div className="font-data-metric-md text-data-metric-md font-bold text-primary">
            -12% NaOH
          </div>
<div className="font-label-mono text-[10px] text-slate-500 font-medium">
            Retención en neutralizador 18 min
          </div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<span className="px-2.5 py-1 rounded-lg bg-sky-50 text-primary border border-primary/20 font-label-mono text-caption font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px]">smart_toy</span>
            Automático SCADA
          </span>
<button className="text-primary hover:text-primary-container font-label-mono text-caption font-bold flex items-center gap-1 transition-colors">
<span className="">Registro Historiador</span>
<span className="material-symbols-outlined text-[14px]">history</span>
</button>
</div>
</div>
</article>
{/* REGISTRO 4: Mantenimiento Operativo y Retrolavado */}
<article className="log-card bg-surface-container-lowest rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between relative overflow-hidden group" data-category="manual">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-500"></div>
<div className="flex flex-col md:flex-row md:items-center gap-5 w-full md:w-3/5 pl-2">
{/* Timestamp + Machine Block */}
<div className="flex md:flex-col items-center md:items-start justify-between shrink-0 gap-1 min-w-[90px] pr-3 md:border-r border-slate-200">
<span className="font-data-metric-md text-data-metric-md text-slate-900 font-bold tracking-tight">14:40</span>
<span className="font-label-mono text-caption text-slate-500 font-medium">Turno B · Hoy</span>
</div>
{/* Detail Block */}
<div className="space-y-1.5 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-mono text-label-mono font-bold text-slate-900">
              Filtro Prensa #01
            </span>
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-300 font-label-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">build</span>
              Purga y Retrolavado Programado
            </span>
</div>
<p className="font-body-md text-body-md text-slate-600 leading-relaxed">
            Ejecución de lavado de telas filtrantes tras detección de presión diferencial de <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">4.8 bar</span>. Presión estabilizada a <span className="font-data-metric-sm text-data-metric-sm font-bold text-tertiary bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">3.4 bar</span>.
          </p>
<div className="flex items-center gap-2 font-label-mono text-caption text-slate-500">
<span className="font-medium">Técnico Operador: J. Delgado</span>
<span className="">•</span>
<span className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">OT #4912 Mantenimiento Preventivo</span>
</div>
</div>
</div>
{/* Impact and Audit Confirmation */}
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-2/5 pt-3 md:pt-0 bg-slate-50/60 md:bg-transparent -mx-5 md:mx-0 px-5 md:px-0 -mb-5 md:mb-0 pb-3 md:pb-0 border-t md:border-t-0 border-slate-100">
<div className="text-left md:text-right">
<div className="font-label-mono text-caption text-slate-500 font-semibold uppercase tracking-wider">Eficiencia Ciclo</div>
<div className="font-data-metric-md text-data-metric-md font-bold text-slate-900">
            -35 min/ciclo
          </div>
<div className="font-label-mono text-[10px] text-slate-500 font-medium">
            Torta seca &gt; 34% solidos
          </div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-label-mono text-caption font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px] text-slate-600">task_alt</span>
            Completado
          </span>
<button className="text-primary hover:text-primary-container font-label-mono text-caption font-bold flex items-center gap-1 transition-colors">
<span className="">Ver Bitácora OT</span>
<span className="material-symbols-outlined text-[14px]">receipt_long</span>
</button>
</div>
</div>
</article>
{/* REGISTRO 5: Verificación Cumplimiento NOM-001 */}
<article className="log-card bg-surface-container-lowest rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-5 items-start md:items-center justify-between relative overflow-hidden group" data-category="nom">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-tertiary"></div>
<div className="flex flex-col md:flex-row md:items-center gap-5 w-full md:w-3/5 pl-2">
<div className="flex md:flex-col items-center md:items-start justify-between shrink-0 gap-1 min-w-[90px] pr-3 md:border-r border-slate-200">
<span className="font-data-metric-md text-data-metric-md text-slate-900 font-bold tracking-tight">14:15</span>
<span className="font-label-mono text-caption text-slate-500 font-medium">Turno B · Inicio</span>
</div>
<div className="space-y-1.5 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-mono text-label-mono font-bold text-slate-900">
              Emisor Final Efluente · Monitoreo NOM-001
            </span>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-emerald-700">gavel</span>
              Validación de Apertura
            </span>
</div>
<p className="font-body-md text-body-md text-slate-600 leading-relaxed">
            Recepción y cotejo de muestra puntual de cambio de turno: Turbidez <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">1.7 NTU</span>, DQO <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">46 mg/L</span>, SST <span className="font-data-metric-sm text-data-metric-sm font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">11 mg/L</span>. Parámetros en 100% de tolerancia legal.
          </p>
<div className="flex items-center gap-2 font-label-mono text-caption text-slate-500">
<span className="font-medium">Inspector Químico: Dra. E. Solís</span>
<span className="">•</span>
<span className="text-tertiary font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Firma electrónica SAT validada</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-2/5 pt-3 md:pt-0 bg-slate-50/60 md:bg-transparent -mx-5 md:mx-0 px-5 md:px-0 -mb-5 md:mb-0 pb-3 md:pb-0 border-t md:border-t-0 border-slate-100">
<div className="text-left md:text-right">
<div className="font-label-mono text-caption text-slate-500 font-semibold uppercase tracking-wider">Índice Cumplimiento</div>
<div className="font-data-metric-md text-data-metric-md font-bold text-emerald-800">
            99.4% NOM-001
          </div>
<div className="font-label-mono text-[10px] text-tertiary font-bold">
            Riesgo sanción: 0.0%
          </div>
</div>
<div className="flex flex-col items-end gap-2 shrink-0">
<span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-caption font-bold flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-600">verified_user</span>
            Audit Aprobado
          </span>
<button className="text-primary hover:text-primary-container font-label-mono text-caption font-bold flex items-center gap-1 transition-colors">
<span className="">Cadena Custodia</span>
<span className="material-symbols-outlined text-[14px]">policy</span>
</button>
</div>
</div>
</article>
</section>
{/* 4. Panel Inferior de Auditoría y Formalización de Firma de Turno (Tarjeta Destacada Blanca con Borde y Sombras Claras) */}
<section className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-md space-y-6 relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
<div >
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[24px]" style={{"fontVariationSettings": "'FILL' 1"}}>assignment_turned_in</span>
<h2 className="font-headline-md text-headline-md text-slate-900 font-bold">
            Resumen Oficial de Entrega de Turno B
          </h2>
</div>
<p className="font-body-md text-body-md text-slate-600 mt-1">
          Parámetros integrados del historiador SCADA para relevo formal de turno conforme a NOM-001-SEMARNAT-2021.
        </p>
</div>
<div className="flex items-center gap-3">
<span className="font-label-mono text-caption text-slate-500 font-medium">Estado de Relevo:</span>
<span className="px-3 py-1.5 rounded-full bg-amber-50 text-slate-800 border border-amber-500/40 font-label-mono text-caption font-bold flex items-center gap-2 shadow-xs">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Listo para Firma (Turno C en Espera)
        </span>
</div>
</div>
{/* Telemetry Recap Grid (4 Main Environmental Indicators con bordes contrastados) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Metrica 1: Volumen */}
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2 hover:bg-slate-100/70 transition-colors shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-mono text-caption text-slate-500 uppercase tracking-wider font-semibold">Volumen Tratado</span>
<span className="material-symbols-outlined text-primary text-[18px]">water</span>
</div>
<div className="flex items-baseline gap-1.5">
<span className="font-data-metric-lg text-data-metric-lg text-slate-900 font-bold">1,142</span>
<span className="font-label-mono text-caption text-slate-500">m³</span>
</div>
<div className="font-label-mono text-[11px] text-slate-600 flex items-center justify-between pt-1 border-t border-slate-200">
<span className="">Flujo prom: 142.8 m³/h</span>
<span className="text-tertiary font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Estable</span>
</div>
</div>
{/* Metrica 2: Turbidez */}
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2 hover:bg-slate-100/70 transition-colors shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-mono text-caption text-slate-500 uppercase tracking-wider font-semibold">Turbidez Salida</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-[10px] font-bold">NOM Cumple</span>
</div>
<div className="flex items-baseline gap-1.5">
<span className="font-data-metric-lg text-data-metric-lg text-emerald-800 font-bold">1.6</span>
<span className="font-label-mono text-caption text-slate-500">NTU</span>
</div>
<div className="font-label-mono text-[11px] text-slate-600 flex items-center justify-between pt-1 border-t border-slate-200">
<span className="">Límite NOM: &lt; 4.0 NTU</span>
<span className="text-tertiary font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">60% bajo límite</span>
</div>
</div>
{/* Metrica 3: DQO */}
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2 hover:bg-slate-100/70 transition-colors shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-mono text-caption text-slate-500 uppercase tracking-wider font-semibold">DQO Promedio</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-[10px] font-bold">NOM Cumple</span>
</div>
<div className="flex items-baseline gap-1.5">
<span className="font-data-metric-lg text-data-metric-lg text-emerald-800 font-bold">44</span>
<span className="font-label-mono text-caption text-slate-500">mg/L</span>
</div>
<div className="font-label-mono text-[11px] text-slate-600 flex items-center justify-between pt-1 border-t border-slate-200">
<span className="">Límite NOM: &lt; 60 mg/L</span>
<span className="text-tertiary font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">-26.6% margen</span>
</div>
</div>
{/* Metrica 4: SST */}
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2 hover:bg-slate-100/70 transition-colors shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-mono text-caption text-slate-500 uppercase tracking-wider font-semibold">SST Salida</span>
<span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-label-mono text-[10px] font-bold">NOM Cumple</span>
</div>
<div className="flex items-baseline gap-1.5">
<span className="font-data-metric-lg text-data-metric-lg text-emerald-800 font-bold">12</span>
<span className="font-label-mono text-caption text-slate-500">mg/L</span>
</div>
<div className="font-label-mono text-[11px] text-slate-600 flex items-center justify-between pt-1 border-t border-slate-200">
<span className="">Límite NOM: &lt; 20 mg/L</span>
<span className="text-tertiary font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Óptimo</span>
</div>
</div>
</div>
{/* Protocol Check & Legal Acceptance */}
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<label className="flex items-start sm:items-center gap-3 cursor-pointer select-none">
<input defaultChecked className="mt-0.5 sm:mt-0 w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" id="compliance-checkbox" type="checkbox"/>
<div className="space-y-0.5">
<span className="font-headline-sm text-body-lg text-slate-900 font-bold block">
            Bitácora validada conforme a protocolo oficial NOM-001-SEMARNAT-2021
          </span>
<span className="font-label-mono text-caption text-slate-500 block font-medium">
            Certifico que las consignas y descargas registradas en el Turno B reflejan fielmente la telemetría del gateway SCADA industrial.
          </span>
</div>
</label>
<div className="flex items-center gap-2 shrink-0">
<span className="font-label-mono text-caption text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg font-bold shadow-xs">
          SHA-256: 7f89b...3c12
        </span>
</div>
</div>
{/* Final Operational Actions */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-slate-50 text-slate-700 font-label-mono text-caption font-semibold flex items-center justify-center gap-2 border border-slate-300 shadow-sm transition-all" id="btn-export-pdf">
<span className="material-symbols-outlined text-[18px] text-slate-600">picture_as_pdf</span>
<span className="">Generar Acta PDF</span>
</button>
<button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-slate-50 text-slate-700 font-label-mono text-caption font-semibold flex items-center justify-center gap-2 border border-slate-300 shadow-sm transition-all" id="btn-sync-cloud">
<span className="material-symbols-outlined text-[18px] text-slate-600">cloud_sync</span>
<span className="">Sincronizar ERP / SAP</span>
</button>
</div>
<div className="w-full sm:w-auto flex items-center gap-3">
<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all" id="btn-execute-sign">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
<span id="sign-btn-text" className="">Firma Digital &amp; Cerrar Turno B</span>
</button>
</div>
</div>
</section>
{/* Interactive Feedback Toast (Hidden by Default) */}
<div className="fixed bottom-8 right-8 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-2xl" id="toast-notification">
<span className="material-symbols-outlined text-tertiary-fixed text-[24px]">verified</span>
<div className="flex flex-col">
<span className="font-label-mono text-data-metric-sm font-bold" id="toast-title">Turno B Cerrado y Validado</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface/80" id="toast-message">Acta digital transmitida con éxito a SCADA y Auditoría Ambiental.</span>
</div>
</div>
{/* Inline Micro-interactions Script */}

</div></main>
</div>

    </div>
  );
}
