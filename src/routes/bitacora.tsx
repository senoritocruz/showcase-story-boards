import { createFileRoute } from "@tanstack/react-router";
import { BitacoraScreen } from "@/components/screens/BitacoraScreen";

export const Route = createFileRoute("/bitacora")({
  head: () => ({
    meta: [
      { title: "Bitácora y Validación | AquaSense AI" },
      { name: "description", content: "Registro operativo de consignas IA y firma digital del turno." },
      { property: "og:title", content: "Bitácora y Validación | AquaSense AI" },
      { property: "og:description", content: "Registro operativo de consignas IA y firma digital del turno." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BitacoraScreen,
});
