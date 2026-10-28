import { describe, expect, it } from "vitest";
import { simulatePac } from "@/lib/pac-simulation";

describe("PAC demonstration", () => {
  it("keeps the supplied 19 ppm baseline consistent", () => {
    const result = simulatePac(19);
    expect(result.monthlySaving).toBe(14820);
    expect(result.totalMonthlySaving).toBe(19340);
    expect(result.projectedCost).toBeCloseTo(0.476);
    expect(result.unitSaving).toBeCloseTo(0.104);
    expect(result.turbidity).toBe(1.8);
    expect(result.dqo).toBe(48);
  });
  it("returns zero PAC savings at the original 28 ppm dose", () => {
    const result = simulatePac(28);
    expect(result.monthlySaving).toBe(0);
    expect(result.projectedCost).toBe(0.58);
    expect(result.doseReduction).toBe(0);
  });
  it("recalculates all dependent values at 22 ppm", () => {
    const result = simulatePac(22);
    expect(result.monthlySaving).toBe(9880);
    expect(result.doseReduction).toBeCloseTo(21.42857);
    expect(result.projectedCost).toBeCloseTo(0.51066667);
    expect(result.turbidity).toBeCloseTo(1.44);
    expect(result.dqo).toBeCloseTo(45.3);
  });
  it("increases organic load by 30% during stress simulation", () => {
    expect(simulatePac(19, true).dqo).toBeCloseTo(62.4);
    expect(simulatePac(19, true).qualityWithinLimits).toBe(false);
    expect(simulatePac(23, true).dqo).toBeCloseTo(57.72);
    expect(simulatePac(23, true).qualityWithinLimits).toBe(true);
  });
});