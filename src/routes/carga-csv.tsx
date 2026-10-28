import { createFileRoute } from "@tanstack/react-router";
import { CargaCsvScreen } from "@/components/screens/CargaCsvScreen";

export const Route = createFileRoute("/carga-csv")({
  head: () => ({
    meta: [
      { title: "Carga de Datos CSV | AquaSense AI" },
      { name: "description", content: "Carga y mapeo inteligente de datos de planta en CSV." },
      { property: "og:title", content: "Carga de Datos CSV | AquaSense AI" },
      { property: "og:description", content: "Carga y mapeo inteligente de datos de planta en CSV." },
    ],
  }),
  component: CargaCsvScreen,
});
