import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <h1>My Cart</h1>

        <br />

        {cart.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  marginBottom: "15px",
                  padding: "15px",
                }}
              >
                <h3>{item.name}</h3>

                <p>₹ {item.price}</p>

                <p>Quantity : {item.quantity}</p>

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <h2>Total : ₹ {totalPrice}</h2>
            <br />

<Link to="/checkout">

    Proceed To Checkout

</Link>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;