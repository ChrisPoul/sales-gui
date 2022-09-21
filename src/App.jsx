import { useState, useEffect } from "react";
import * as API from "./services/products"
import { DisplayItems } from "./components/itemsDisplay";

export function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.getAllProducts().then(setProducts)
  }, []);

  return (
    DisplayItems(products, "Products")
  );
}
