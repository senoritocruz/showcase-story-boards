import { createFileRoute } from "@tanstack/react-router";
import { RecomendacionesScreen } from "@/components/screens/RecomendacionesScreen";

export const Route = createFileRoute("/recomendaciones")({
  head: () => ({ meta: [
    { title: "Recomendaciones de Optimización IA | AquaSense AI" },
    { name: "description", content: "Simulación de consignas y recomendaciones para optimización química y energética." },
    { property: "og:title", content: "Recomendaciones de Optimización IA | AquaSense AI" },
    { property: "og:description", content: "Simulación de consignas y recomendaciones para optimización química y energética." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RecomendacionesScreen,
});
