import { useEffect, useState } from "react";
import MerchantLayout from "../../../layouts/MerchantLayout";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

interface Order {
  id: string;
  name: string;
  user: string;
  quantity: number;
  postalAddress: string;
}

const Order = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("http/localhost:3000/order", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchOrder();
  }, [accessToken]);

  return (
    <MerchantLayout>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Order</h1>
        <p>Here is your order</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='overflow-x-auto'>
            <table className='min-w-full border-collapse'>
              <thead>
                <tr>
                  <th className='border border-gray-400 px-4 py-2'>Product</th>
                  <th className='border border-gray-400 px-4 py-2'>User</th>
                  <th className='border border-gray-400 px-4 py-2'>Quantity</th>
                  <th className='border border-gray-400 px-4 py-2'>
                    Postal Address
                  </th>
                  <th className='border border-gray-400 px-4 py-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id} className='border border-gray-400'>
                      <td className='border border-gray-400 px-4 py-2'>
                        {order.name}
                      </td>
                      <td className='border border-gray-400 px-4 py-2'>
                        {order.user}
                      </td>
                      <td className='border border-gray-400 px-4 py-2'>
                        {order.quantity}
                      </td>
                      <td className='border border-gray-400 px-4 py-2'>
                        {order.postalAddress}
                      </td>
                      <td className='border border-gray-400 px-4 py-2'>
                        Order Sent Out
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>Sorry you have no orders yet</p>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MerchantLayout>
  );
};

export default Order;
