import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";

interface Order {
  id: string;
  name: string;
  user: string;
  quantity: number;
  postalAddress: string;
}

const Order = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("http/localhost:3000/order");
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <MerchantLayout>
      <div>
        <h1>Order</h1>
        <p>Here is your order</p>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>User</th>
              <th>Quantity</th>
              <th>Postal Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.user}</td>
                <td>{order.quantity}</td>
                <td>{order.postalAddress}</td>
                <td>order sent out</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MerchantLayout>
  );
};

export default Order;
