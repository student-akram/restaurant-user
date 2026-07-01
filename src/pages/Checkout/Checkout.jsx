import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import { placeOrder } from "../../services/orderService";

const Checkout = () => {

  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();

  const { user } = useAuth();

  const [address, setAddress] = useState("");

  const handleOrder = async () => {

    if (!address) {

      alert("Enter delivery address");

      return;

    }

    try {

      await placeOrder({

        customerName: user.displayName,

        email: user.email,

        address,

        items: cart.map((item) => ({
          recipeName: item.name,
          quantity: item.quantity,
          price: item.price,
        })),

        totalPrice,

        status: "Pending",
      });

      clearCart();

      alert("Order Placed Successfully");

      navigate("/orders");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      <Header/>

      <div style={{padding:"30px"}}>

        <h1>Checkout</h1>

        <br/>

        <textarea
          rows="5"
          placeholder="Delivery Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />

        <br/><br/>

        <h2>

          Total : ₹ {totalPrice}

        </h2>

        <br/>

        <h3>

          Payment Method

        </h3>

        <p>

          Cash On Delivery

        </p>

        <br/>

        <button onClick={handleOrder}>

          Place Order

        </button>

      </div>

      <Footer/>

    </>

  );

};

export default Checkout;