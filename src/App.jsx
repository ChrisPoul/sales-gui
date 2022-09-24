import { Routes, Route, Link } from "react-router-dom"
import { HomePage } from "./components/HomePage";
import { AddProduct } from "./components/AddProduct";
import { ProductDetails } from "./components/ProductDetails";
import { ProductsList } from "./components/ProductsList";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="addProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}
