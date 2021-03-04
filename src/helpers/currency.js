export const displayCurrency = (value) => (value || "").toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
});
