import { createFileRoute } from "@tanstack/react-router";
import { AlertasScreen } from "@/components/screens/AlertasScreen";

export const Route = createFileRoute("/alertas")({
  head: () => ({ meta: [
    { title: "Desviaciones y Alertas | AquaSense AI" },
    { name: "description", content: "Diagnóstico de anomalías, sobrecostos y desviaciones operativas de planta." },
    { property: "og:title", content: "Desviaciones y Alertas | AquaSense AI" },
    { property: "og:description", content: "Diagnóstico de anomalías, sobrecostos y desviaciones operativas de planta." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AlertasScreen,
});
