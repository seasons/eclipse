export const displayCurrency = (value: number): string =>
  (value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
