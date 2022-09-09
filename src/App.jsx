import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashSales from "./components/FlashSales";
import FlashSaleDetails from "./components/FlashSaleDetails";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import ProductTab from "./components/ProductTab";
import ProductDetail from "./components/ProductDetail";
import ProductExtraDetail from "./components/ProductExtraDetail";
// React-modal
import Modal from "react-modal";
import Success from "./pages/Success";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import { Fragment } from "react";
import { AuthProvider } from "./hooks/auth-context";

const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
//
function App() {
  return (
    <Fragment>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/FlashSale" element={<FlashSales />} />
            <Route path="/FlashSale/:id" element={<FlashSaleDetails />} />
            <Route path="/product" element={<ProductTab />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/productxtra" element={<ProductTab />} />
            <Route path="/productxtra/:id" element={<ProductExtraDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Fragment>
  );
}

export default App;
