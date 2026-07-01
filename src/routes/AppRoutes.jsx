import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import CategoryRecipes from "../pages/CategoryRecipes/CategoryRecipes";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import MyOrders from "../pages/MyOrders/MyOrders";
const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
  path="/category/:categoryId"
  element={
    <PrivateRoute>
      <CategoryRecipes />
    </PrivateRoute>
  }
/>

<Route
  path="/recipe/:recipeId"
  element={
    <PrivateRoute>
      <RecipeDetails />
    </PrivateRoute>
  }
/>
<Route
  path="/cart"
  element={
    <PrivateRoute>
      <Cart />
    </PrivateRoute>
  }
/>
<Route
  path="/checkout"
  element={
    <PrivateRoute>
      <Checkout/>
    </PrivateRoute>
  }
/>
<Route
  path="/orders"
  element={
    <PrivateRoute>
      <MyOrders />
    </PrivateRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;