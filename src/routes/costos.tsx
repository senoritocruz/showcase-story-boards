import { createFileRoute } from "@tanstack/react-router";
import { CostosScreen } from "@/components/screens/CostosScreen";

export const Route = createFileRoute("/costos")({
  head: () => ({ meta: [
    { title: "Tablero de Costos y KPIs | AquaSense AI" },
    { name: "description", content: "Centro de mando de costos operativos y KPIs del tratamiento de agua." },
    { property: "og:title", content: "Tablero de Costos y KPIs | AquaSense AI" },
    { property: "og:description", content: "Centro de mando de costos operativos y KPIs del tratamiento de agua." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CostosScreen,
});
