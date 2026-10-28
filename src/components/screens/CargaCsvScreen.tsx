// @ts-nocheck
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function CargaCsvScreen() {
  useEffect(() => {

  (function initCSVUploadScreen() {
    const btnInject = document.getElementById('btnInject');
    const btnSimulate = document.getElementById('btnSimulate');
    const toast = document.getElementById('injectionToast');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    if (btnInject && toast) {
      btnInject.addEventListener('click', () => {
        toast.classList.remove('translate-y-24', 'opacity-0');
        setTimeout(() => {
          toast.classList.add('translate-y-24', 'opacity-0');
        }, 4000);
      });
    }

    if (btnSimulate) {
      btnSimulate.addEventListener('click', () => {
        btnSimulate.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Simulando comprobación...';
        setTimeout(() => {
          btnSimulate.innerHTML = '<span class="material-symbols-outlined text-[18px] text-tertiary-container">done</span> Simulación completada (demo)';
        }, 1200);
      });
    }

    if (dropZone && fileInput) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropZone.classList.add('bg-surface-container-high');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropZone.classList.remove('bg-surface-container-high');
        }, false);
      });

      dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length > 0) {
          console.log('Archivo capturado:', files[0].name);
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
{/* Navigation links: 'Carga de Datos CSV' iluminado y activo */}
<nav className="flex flex-col gap-1.5 px-3 py-3" data-active-classes="bg-gradient-to-r from-sky-500/25 to-cyan-500/10 text-cyan-200 border-l-4 border-cyan-400 font-semibold shadow-lg shadow-cyan-950/40">
{/* 1. Tablero de Costos y KPIs (Inactivo) */}
<Link to="/costos" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group" data-path="tablero-de-costos-y-kpis">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">monitoring</span>
<span >Tablero de Costos y KPIs</span>
</div>
</Link>
{/* 2. Desviaciones y Alertas (Inactivo) */}
<Link to="/alertas" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group" data-path="desviaciones-y-alertas">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-amber-400 transition-colors">warning</span>
<span >Desviaciones y Alertas</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-label-mono text-[11px] font-bold">3</span>
</Link>
{/* 3. Recomendaciones IA (Inactivo) */}
<Link to="/recomendaciones" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group" data-path="recomendaciones-ia">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">auto_mode</span>
<span >Recomendaciones IA</span>
</div>
</Link>
{/* 4. Bitácora y Validación (Inactivo) */}
<Link to="/bitacora" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-400 hover:bg-[#132742] hover:text-white transition-all text-[13px] group" data-path="bitacora-y-validacion">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-cyan-300 transition-colors">verified</span>
<span >Bitácora y Validación</span>
</div>
</Link>
{/* 5. Carga de Datos CSV (ACTIVO RESALTADO) */}
<Link to="/carga-csv" className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500/25 to-cyan-500/10 text-cyan-200 border-l-4 border-cyan-400 font-semibold shadow-lg shadow-cyan-950/40 transition-all text-[13px] group" data-path="carga-de-datos-csv">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-cyan-300" style={{"fontVariationSettings": "'FILL' 1"}}>upload_file</span>
<span className="text-white font-semibold">Carga de Datos CSV</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-cyan-400 text-slate-950 font-label-mono text-[10px] font-bold tracking-wider shadow-sm">ACTIVO</span>
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
{/* 3. Main Content Slot */}
<main className="w-full pt-28 pb-20 px-10 max-w-7xl mx-auto space-y-8"><div className="flex flex-col w-full">
{/* Operational Breadcrumb & Live Banner */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
<span className="flex items-center gap-1.5 font-semibold text-primary">
<span className="material-symbols-outlined text-[15px]">database</span>
        SCADA PIPELINE
      </span>
<span >/</span>
<span >INGESTA DE DEMO</span>
<span >/</span>
<span className="text-on-surface font-semibold">BATCH CSV V4.2</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-label-mono text-caption text-on-surface-variant font-semibold">DEMO · SIN CONEXIÓN A PLANTA</span>
</div>
<div className="px-2.5 py-1 bg-surface-container-high rounded-full font-label-mono text-caption text-primary font-bold">
        CHECKSUM DE EJEMPLO
      </div>
</div>
</div>
{/* Header Section */}
<section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm mb-6 relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
<div className="max-w-3xl space-y-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<div >
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Ingesta de Datos CSV y Telemetría Histórica
            </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
              Carga de reportes de laboratorio externo, calibraciones de sensores y registros batch para reentrenamiento del Gemelo Digital.
            </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
<button className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-headline-sm text-body-md font-semibold flex items-center gap-2 shadow-sm" id="btnDownloadTemplate">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
          Descargar Plantilla CSV Oficial
        </button>
<button className="px-5 py-2.5 rounded-lg bg-on-background text-on-primary hover:bg-inverse-surface transition-colors font-headline-sm text-body-md font-semibold flex items-center gap-2 shadow-sm" id="btnQuickUpload">
<span className="material-symbols-outlined text-[18px]">bolt</span>
          Nueva Ingesta Rápida
        </button>
</div>
</div>
</section>
{/* 3 Summary KPI Cards */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider block">
            SINCRONIZACIÓN DE EJEMPLO
          </span>
<div className="font-data-metric-lg text-data-metric-lg text-on-surface font-semibold tracking-tight">
            Ejemplo · 13:45 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">hrs</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">sync</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low px-3 py-2 rounded-lg flex items-center justify-between">
<span className="font-label-mono text-caption text-on-surface-variant font-medium">
          Turno B · 8,420 filas procesadas
        </span>
<span className="font-label-mono text-caption font-bold text-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
          Sin discrepancias
        </span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider block">
            INTEGRIDAD Y CALIDAD DE DATOS
          </span>
<div className="font-data-metric-lg text-data-metric-lg text-on-surface font-semibold tracking-tight">
            99.8<span className="font-headline-sm text-headline-sm text-tertiary-container ml-0.5">%</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-low text-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low px-3 py-2 rounded-lg flex items-center justify-between">
<span className="font-label-mono text-caption text-on-surface-variant font-medium">
          Rango Fisicoquímico
        </span>
<span className="font-label-mono text-caption font-bold text-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">format_image_left</span>
          0 anomalías críticas
        </span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider block">
            GEMELO DIGITAL ALIMENTADO
          </span>
<div className="font-data-metric-lg text-data-metric-lg text-on-surface font-semibold tracking-tight">
            Versión V4.2 <span className="font-label-mono text-caption text-tertiary-container uppercase">Online</span>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">memory</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low px-3 py-2 rounded-lg flex items-center justify-between">
<span className="font-label-mono text-caption text-on-surface-variant font-medium">
          Pesos neuronales
        </span>
<span className="font-label-mono text-caption font-bold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">update</span>
          Actualización en 2h
        </span>
</div>
</div>
</section>
{/* Main Split Layout (Balanced 2-Columns) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/* Left Column: Upload Area & Mapping Engine (7 cols) */}
<div className="lg:col-span-7 space-y-6">
{/* Drag & Drop Interactive Zone */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">upload_file</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Área de Carga de Archivos
            </h2>
</div>
<span className="font-label-mono text-caption text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
            Codificación UTF-8
          </span>
</div>
<div className="group relative rounded-xl bg-surface-container-low hover:bg-surface-container transition-all p-8 flex flex-col items-center justify-center text-center cursor-pointer" id="dropZone">
<input accept=".csv, .xlsx" className="hidden" id="fileInput" type="file"/>
<div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
<span className="material-symbols-outlined text-[32px]">cloud_upload</span>
</div>
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
            Arrastra aquí tu archivo .CSV o .XLSX
          </span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-4 max-w-sm">
            Compatible con telemetría SCADA multi-sensor, logs RTU y planillas validadas de laboratorio externo (Máx. 50 MB)
          </p>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-headline-sm text-body-sm font-medium shadow-sm flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">folder_open</span>
              Explorar Archivo
            </button>
<span className="font-label-mono text-caption text-on-surface-variant">o arrastra sobre el recuadro</span>
</div>
</div>
{/* File In-Review Card */}
<div className="mt-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">description</span>
</div>
<div >
<div className="flex items-center gap-2">
<span className="font-headline-sm text-body-md font-bold text-on-surface truncate max-w-xs">
                  LAB_FISICOQUIMICO_PLANTA_NORTE_SEMANA_14.csv
                </span>
<span className="px-2 py-0.5 rounded-full font-label-mono text-caption font-bold bg-surface-container text-primary">
                  2.4 MB
                </span>
</div>
<div className="flex items-center gap-3 font-label-mono text-caption text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">table_rows</span>
                  1,440 registros
                </span>
<span >•</span>
<span className="text-tertiary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                  Listo para mapeo
                </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Previsualizar Raw">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors" title="Descartar archivo">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
{/* Intelligent Variable Mapping Assistant */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
<div >
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Asistente de Mapeo Inteligente de Variables
              </h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Cotejo semántico automatizado mediante el modelo de inferencia SCADA IA
            </p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-caption bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-md font-semibold">
              5 de 5 Coincidencias
            </span>
</div>
</div>
{/* Mapping Table */}
<div className="overflow-x-auto rounded-lg shadow-sm">
<table className="w-full text-left font-body-md text-body-sm">
<thead className="bg-surface-container text-on-surface-variant font-label-mono text-label-mono uppercase tracking-wider">
<tr >
<th className="py-3 px-3.5">Columna CSV Detectada</th>
<th className="py-3 px-3.5">Variable SCADA / Parámetro IA</th>
<th className="py-3 px-3.5 text-right">Estado de Validación</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">
{/* Row 1 */}
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span className="font-label-mono text-data-metric-sm font-bold text-on-surface">turbidez_ntu_out</span>
</div>
</td>
<td className="py-3 px-3.5">
<div className="font-body-md text-body-sm font-medium text-on-surface">Turbidez Efluente NOM-001</div>
<div className="font-label-mono text-caption text-on-surface-variant">Rango normal: 0.8 - 4.5 NTU</div>
</td>
<td className="py-3 px-3.5 text-right">
<span className="inline-flex items-center gap-1 font-label-mono text-caption font-bold px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary shadow-xs">
<span className="material-symbols-outlined text-[13px]">check</span>
                    Mapeado 100%
                  </span>
</td>
</tr>
{/* Row 2 */}
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
<td className="py-3 px-3.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span className="font-label-mono text-data-metric-sm font-bold text-on-surface">dqo_mg_l</span>
</div>
</td>
<td className="py-3 px-3.5">
<div className="font-body-md text-body-sm font-medium text-on-surface">Demanda Química de Oxígeno</div>
<div className="font-label-mono text-caption text-on-surface-variant">Rango normal: 35 - 75 mg/L</div>
</td>
<td className="py-3 px-3.5 text-right">
<span className="inline-flex items-center gap-1 font-label-mono text-caption font-bold px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary shadow-xs">
<span className="material-symbols-outlined text-[13px]">check</span>
                    Mapeado 100%
                  </span>
</td>
</tr>
{/* Row 3 */}
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span className="font-label-mono text-data-metric-sm font-bold text-on-surface">dosis_pac_ppm</span>
</div>
</td>
<td className="py-3 px-3.5">
<div className="font-body-md text-body-sm font-medium text-on-surface">Consigna Coagulante PAC</div>
<div className="font-label-mono text-caption text-on-surface-variant">Rango normal: 12 - 35 ppm</div>
</td>
<td className="py-3 px-3.5 text-right">
<span className="inline-flex items-center gap-1 font-label-mono text-caption font-bold px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary shadow-xs">
<span className="material-symbols-outlined text-[13px]">check</span>
                    Mapeado 100%
                  </span>
</td>
</tr>
{/* Row 4 */}
<tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
<td className="py-3 px-3.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span className="font-label-mono text-data-metric-sm font-bold text-on-surface">flujo_m3h_afluente</span>
</div>
</td>
<td className="py-3 px-3.5">
<div className="font-body-md text-body-sm font-medium text-on-surface">Caudal Entrada</div>
<div className="font-label-mono text-caption text-on-surface-variant">Rango normal: 80 - 180 m³/h</div>
</td>
<td className="py-3 px-3.5 text-right">
<span className="inline-flex items-center gap-1 font-label-mono text-caption font-bold px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary shadow-xs">
<span className="material-symbols-outlined text-[13px]">check</span>
                    Mapeado 100%
                  </span>
</td>
</tr>
{/* Row 5 */}
<tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
<span className="font-label-mono text-data-metric-sm font-bold text-on-surface">od_biorreactor_mg</span>
</div>
</td>
<td className="py-3 px-3.5">
<div className="font-body-md text-body-sm font-medium text-on-surface">Oxígeno Disuelto MBR</div>
<div className="font-label-mono text-caption text-on-surface-variant">Rango normal: 1.5 - 2.8 mg/L</div>
</td>
<td className="py-3 px-3.5 text-right">
<span className="inline-flex items-center gap-1 font-label-mono text-caption font-bold px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary shadow-xs">
<span className="material-symbols-outlined text-[13px]">check</span>
                    Mapeado 100%
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Footer Actions */}
<div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-caption">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">done_all</span>
<span >Esquema validado contra Metadatos SCADA Norte</span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto justify-end">
<button className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-headline-sm text-body-md font-semibold flex items-center gap-2" id="btnSimulate">
<span className="material-symbols-outlined text-[18px]">science</span>
              Simular Consistencia
            </button>
<button className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors font-headline-sm text-body-md font-semibold flex items-center gap-2 shadow-md" id="btnInject">
<span className="material-symbols-outlined text-[18px]">database</span>
              Validar e Inyectar a Base Histórica
            </button>
</div>
</div>
</div>
</div>
{/* Right Column: Verification Rules & History (5 cols) */}
<div className="lg:col-span-5 space-y-6">
{/* Automated Validation Rules Card */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Reglas de Validación Automática
            </h2>
</div>
<span className="font-label-mono text-caption bg-surface-container text-tertiary-container font-bold px-2 py-0.5 rounded">
            PASS (4/4)
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Pipeline de auditoría de datos en memoria antes de persistencia en lago operacional.
        </p>
{/* 4 Verifications */}
<div className="space-y-3">
{/* Verification 1 */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-sm font-bold text-on-surface">Sin Valores Nulos</span>
<span className="font-label-mono text-caption text-tertiary-container font-semibold">0 NaN detectados</span>
</div>
<p className="font-body-sm text-caption text-on-surface-variant mt-0.5">
                Densidad de muestra íntegra en los 1,440 intervalos muestreados.
              </p>
</div>
</div>
{/* Verification 2 */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-sm font-bold text-on-surface">Timestamps Correlativos ISO-8601</span>
<span className="font-label-mono text-caption text-primary font-semibold">Paso: 5 min</span>
</div>
<p className="font-body-sm text-caption text-on-surface-variant mt-0.5">
                Secuencia temporal cronológica continua sin saltos de muestreo.
              </p>
</div>
</div>
{/* Verification 3 */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-sm font-bold text-on-surface">Rango NOM-001 Verificado</span>
<span className="font-label-mono text-caption text-tertiary-container font-semibold">100% Conforme</span>
</div>
<p className="font-body-sm text-caption text-on-surface-variant mt-0.5">
                Valores analíticos de descarga cumplen umbrales normativos ecológicos.
              </p>
</div>
</div>
{/* Verification 4 */}
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-body-sm font-bold text-on-surface">Detección de Duplicados</span>
<span className="font-label-mono text-caption text-on-surface-variant font-semibold">0 encontrados</span>
</div>
<p className="font-body-sm text-caption text-on-surface-variant mt-0.5">
                Hash de registros único; previene sobreescritura accidental.
              </p>
</div>
</div>
</div>
<div className="mt-4 p-3 rounded-lg bg-surface-container flex items-center justify-between font-label-mono text-caption">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">security</span>
            Sandbox de Validación IA:
          </span>
<span className="text-tertiary-container font-bold">STATUS: APROBADO</span>
</div>
</div>
{/* Recent Uploads History Card (Last 5 Ingestions) */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">history</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Historial de Ingestas Recientes
            </h2>
</div>
<button className="font-label-mono text-caption text-primary hover:text-primary-container font-semibold transition-colors">
            Ver todas (48)
          </button>
</div>
{/* History List */}
<div className="space-y-3">
{/* Ingestion 1 */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2.5 truncate">
<span className="material-symbols-outlined text-primary text-[18px]">table_chart</span>
<span className="font-headline-sm text-body-sm font-bold text-on-surface truncate">
                  BATCH_SENSOR_CALIB_P12.csv
                </span>
</div>
<span className="px-2 py-0.5 rounded font-label-mono text-caption font-bold bg-tertiary-container text-on-tertiary shrink-0">
                Registro de ejemplo
              </span>
</div>
<div className="mt-2 flex items-center justify-between font-label-mono text-caption text-on-surface-variant">
<span >Hoy, 11:20 · Ing. M. Romero</span>
<span className="font-semibold text-on-surface">4,200 reg.</span>
</div>
</div>
{/* Ingestion 2 */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2.5 truncate">
<span className="material-symbols-outlined text-primary text-[18px]">table_chart</span>
<span className="font-headline-sm text-body-sm font-bold text-on-surface truncate">
                  LAB_EXTERNO_AFLUENTE_SEM13.xlsx
                </span>
</div>
<span className="px-2 py-0.5 rounded font-label-mono text-caption font-bold bg-surface-container-high text-primary shrink-0">
                Completado
              </span>
</div>
<div className="mt-2 flex items-center justify-between font-label-mono text-caption text-on-surface-variant">
<span >Ayer, 18:40 · Operador Turno A</span>
<span className="font-semibold text-on-surface">720 reg.</span>
</div>
</div>
{/* Ingestion 3 */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2.5 truncate">
<span className="material-symbols-outlined text-primary text-[18px]">table_chart</span>
<span className="font-headline-sm text-body-sm font-bold text-on-surface truncate">
                  DOSIS_POLIMERO_TURBO_04.csv
                </span>
</div>
<span className="px-2 py-0.5 rounded font-label-mono text-caption font-bold bg-tertiary-container text-on-tertiary shrink-0">
                Registro de ejemplo
              </span>
</div>
<div className="mt-2 flex items-center justify-between font-label-mono text-caption text-on-surface-variant">
<span >Ayer, 09:15 · Ing. M. Romero</span>
<span className="font-semibold text-on-surface">2,880 reg.</span>
</div>
</div>
{/* Ingestion 4 */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2.5 truncate">
<span className="material-symbols-outlined text-primary text-[18px]">table_chart</span>
<span className="font-headline-sm text-body-sm font-bold text-on-surface truncate">
                  CLARIFICADOR_SEC_PERFIL_pH.csv
                </span>
</div>
<span className="px-2 py-0.5 rounded font-label-mono text-caption font-bold bg-surface-container-high text-primary shrink-0">
                Completado
              </span>
</div>
<div className="mt-2 flex items-center justify-between font-label-mono text-caption text-on-surface-variant">
<span >12 Abr, 16:30 · Sup. C. Méndez</span>
<span className="font-semibold text-on-surface">1,440 reg.</span>
</div>
</div>
{/* Ingestion 5 */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2.5 truncate">
<span className="material-symbols-outlined text-primary text-[18px]">table_chart</span>
<span className="font-headline-sm text-body-sm font-bold text-on-surface truncate">
                  EFLUENTE_NOM001_AUDITORIA_Q1.csv
                </span>
</div>
<span className="px-2 py-0.5 rounded font-label-mono text-caption font-bold bg-tertiary-container text-on-tertiary shrink-0">
                Registro de ejemplo
              </span>
</div>
<div className="mt-2 flex items-center justify-between font-label-mono text-caption text-on-surface-variant">
<span >10 Abr, 14:00 · Ing. M. Romero</span>
<span className="font-semibold text-on-surface">10,080 reg.</span>
</div>
</div>
</div>
{/* Audit Ledger Metadata Footnote */}
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-mono text-caption">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span>
            Registro Inmutable SHA-256
          </span>
<span className="text-primary font-semibold">Auditado NOM-127/001</span>
</div>
</div>
</div>
</div>
{/* Notification Toast for Micro-interaction */}
<div className="fixed bottom-6 right-8 bg-on-background text-on-primary px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-300 z-50" id="injectionToast">
<span className="material-symbols-outlined text-tertiary-fixed text-[24px]">verified</span>
<div >
<div className="font-headline-sm text-body-sm font-bold">1,440 Registros Inyectados con Éxito</div>
<div className="font-label-mono text-caption text-slate-300">Gemelo Digital V4.2 listo para reentrenamiento batch.</div>
</div>
<button className="ml-2 text-slate-400 hover:text-white">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</main>
</div>

    </div>
  );
}
