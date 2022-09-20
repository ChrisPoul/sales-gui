import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react"
import * as API from "./services/products"
import { ProductsItem } from "./components/product";

export function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.getAllProducts().then(setProducts)
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" margin={4}>
        Productos
      </Heading>
      <section>
        {products.map(product => (
          ProductsItem(product)
        ))}
      </section>
    </>
  );
}
