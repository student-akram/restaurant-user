import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";



const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">

      <Link to="/" className="logo">
        Cafe Mehak
      </Link>

      <nav className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/profile">
          {user?.displayName}
        </Link>

        <button onClick={logout}>
          Logout
        </button>

      </nav>

    </header>
  );
};

export default Header;