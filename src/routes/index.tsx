import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "AquaSense AI - Industrial Water SCADA" }, { name: "description", content: "Monitoreo SCADA con IA para plantas de tratamiento de agua." }, { property: "og:title", content: "AquaSense AI" }, { property: "og:description", content: "Monitoreo SCADA con IA para plantas de tratamiento de agua." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/bitacora" }); },
});
