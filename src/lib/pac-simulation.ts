/** Illustrative model calibrated to the supplied example, not an engineering model. */
export function simulatePac(ppm: number, stress = false) {
  const dose = Math.min(32, Math.max(15, ppm));
  const unitSaving = (28 - dose) * (0.104 / 9);
  const loadFactor = stress ? 1.3 : 1;
  const turbidity = Math.max(0.9, 1.8 + (19 - dose) * 0.12) * loadFactor;
  const dqo = Math.max(40, 48 + (19 - dose) * 0.9) * loadFactor;
  return {
    dose,
    doseReduction: (28 - dose) / 28 * 100,
    projectedCost: 0.58 - unitSaving,
    unitSaving,
    monthlySaving: (28 - dose) * (14820 / 9),
    totalMonthlySaving: (28 - dose) * (14820 / 9) + 3120 + 1400,
    turbidity,
    dqo,
    dqoMargin: (60 - dqo) / 60 * 100,
    qualityWithinLimits: turbidity < 4 && dqo < 60,
  };
}

export function formatDemoMoney(value: number, digits = 0) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}