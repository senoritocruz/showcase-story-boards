import { describe, it, expect, beforeEach } from "vitest";
import { validateDose, parseCsv, CSV_TEMPLATE } from "@/lib/demo-logic";
import { demo, openAlertCount } from "@/lib/demo-store";

describe("dose safeguard (18–22 ppm)", () => {
  it("accepts 18 and 22", () => { expect(validateDose(18).ok).toBe(true); expect(validateDose(22).ok).toBe(true); });
  it("rejects 17 and 23", () => { expect(validateDose(17).ok).toBe(false); expect(validateDose(23).ok).toBe(false); });
  it("rejects when quality exceeds limits", () => { expect(validateDose(20, false).ok).toBe(false); });
});

describe("CSV validation", () => {
  it("accepts the template", () => { const r = parseCsv(CSV_TEMPLATE); expect(r.errors).toEqual([]); expect(r.validRows).toBe(3); });
  it("reports missing columns", () => { expect(parseCsv("a,b\n1,2").errors[0].message).toMatch(/Faltan columnas/); });
  it("flags out-of-range and non-numeric values", () => {
    const r = parseCsv("timestamp,sensor_id,parametro,valor,unidad\n2026-01-01,X,ph,15,u\n2026-01-01,X,dqo,abc,u");
    expect(r.errors.map((e) => e.row)).toEqual([2, 3]);
    expect(r.validRows).toBe(0);
  });
});

describe("shared demo state", () => {
  beforeEach(() => demo.reset());
  it("resolving an alert lowers the open count and logs it", () => {
    expect(openAlertCount(demo.get())).toBe(3);
    demo.setAlert("filtro", "resuelta", "x");
    expect(openAlertCount(demo.get())).toBe(2);
    expect(demo.get().log[0].kind).toBe("alerta");
  });
  it("approving a dose closes the PAC alert and undo restores it", () => {
    const undo = demo.approveDose(19, "x");
    expect(demo.get().alerts.find((a) => a.id === "pac")?.status).toBe("resuelta");
    undo();
    expect(demo.get().alerts.find((a) => a.id === "pac")?.status).toBe("abierta");
    expect(demo.get().approvedDose).toBeNull();
    expect(demo.get().log).toEqual([]);
  });
});
