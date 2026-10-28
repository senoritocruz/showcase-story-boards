// @ts-nocheck
import { ScadaShell } from "./ScadaShell";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { CsvReview } from "./CsvReview";

export function CargaCsvScreen() {
  useEffect(() => {

  (function initCSVUploadScreen() {
    const btnInject = document.getElementById('btnInject');
    const btnSimulate = document.getElementById('btnSimulate');
    const toast = document.getElementById('injectionToast');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    if (btnSimulate) {
      btnSimulate.addEventListener('click', () => {
        btnSimulate.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span> Simulando comprobación...';
        setTimeout(() => {
          btnSimulate.innerHTML = '<span class="material-symbols-outlined text-[18px] text-tertiary-container">done</span> Simulación completada (demo)';
        }, 1200);
      });
    }

  })();

  }, []);
  return (
    <ScadaShell><div className="scada-root">

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
<CsvReview />
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

    </div></ScadaShell>
  );
}
