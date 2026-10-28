import { createFileRoute, redirect } from "@tanstack/react-router";

// Design for this screen was not accessible; send users to the bitácora for now.
export const Route = createFileRoute("/costos")({
  beforeLoad: () => { throw redirect({ to: "/bitacora" }); },
});
