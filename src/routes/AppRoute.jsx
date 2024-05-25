import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import ProductDetailPage from "../pages/productDetail/productDetailPage";
import LoginPage from "../pages/login/login";
import Shopping_Cart from "../pages/shoppingCart/shopping_cart";
import Check_out from "../pages/checkOut/check_out";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Shopping_Cart />} />
        <Route path="/check-out" element={<Check_out />} />
      </Route>
    )
  );