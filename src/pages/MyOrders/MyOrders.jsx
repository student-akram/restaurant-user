import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useAuth } from "../../context/AuthContext";
import { getMyOrders } from "../../services/orderService";

const MyOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getMyOrders(user.email);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <h1>My Orders</h1>

        <br />

        {orders.length === 0 ? (
          <h2>No Orders Yet</h2>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h3>Status : {order.status}</h3>

              <p>Address : {order.address}</p>

              <h3>Total : ₹ {order.totalPrice}</h3>

              <br />

              <h4>Items</h4>

              {order.items.map((item, index) => (
                <div key={index}>
                  {item.recipeName} × {item.quantity}
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;