export const formatCurrency = (value) =>
  (value / 100).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });