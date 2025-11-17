import { useEffect, useState } from "react";
import { ORDER_IDS } from "../data/orderIds";
import { getMultipleOrders } from "../services/ordersService";
import { formatCurrency } from "../utils/formatCurrency";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await getMultipleOrders(ORDER_IDS);
      setOrders(result);
      setLoading(false);
    }
    load();
  }, []);

  if (loading)
    return <p className="text-center py-8">Cargando órdenes...</p>;

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <div
          key={order.orderId}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Order #{order.orderId}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {order.items.length} productos · Por{" "}
            {order.clientProfileData.firstName}{" "}
            {order.clientProfileData.lastName} ·{" "}
            {new Date(order.creationDate).toLocaleDateString()}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mt-6 text-sm">
            <div>
              <p className="text-gray-400">Estado</p>
              <p
                className={`font-medium ${
                  order.status === "invoiced"
                    ? "text-green-700"
                    : order.status === "handling"
                    ? "text-yellow-700"
                    : "text-red-700"
                }`}
              >
                {order.statusDescription}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Fecha</p>
              <p className="font-medium text-gray-800">
                {new Date(order.creationDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Dirección</p>
              <p className="font-medium text-gray-800">
                {order.shippingData.address.street},{" "}
                {order.shippingData.address.city},{" "}
                {order.shippingData.address.state}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Total</p>
              <p className="font-medium text-gray-800">
                {formatCurrency(order.value)}
              </p>
            </div>
          </div>
          <div className="mt-8 max-h-[250px] overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {order.items.map((item) => (
              <div
                key={item.uniqueId}
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:bg-gray-100 hover:shadow-md transition"
              >
                <div className="w-18 h-18 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 leading-tight line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Cant: {item.quantity}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
