const BASE_URL = "https://orders-template.onrender.com/api/order/";

export async function getOrder(id) {
  try {
    const res = await fetch(`${BASE_URL}${id}`);
    return await res.json();
  } catch (error) {
    console.error("Error obteniendo orden:", id, error);
    return null;
  }
}

export async function getMultipleOrders(orderIds) {
  const responses = await Promise.all(orderIds.map(getOrder));
  return responses.filter(Boolean);
}
