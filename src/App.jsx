import { Routes, Route } from "react-router-dom"
import {
  HStack, StackDivider, Box
} from "@chakra-ui/react"
import { HomePage } from "./components/HomePage";
import { AddProduct } from "./components/AddProduct";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <>
      <NavBar />
      <HStack
        spacing={5}
        padding={3}
        align="stretch"
        divider={<StackDivider borderColor='gray.300' />}
      >
        <SideBar />
        <Box width="100%" paddingY={5} paddingX={20}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Routes>
        </Box>
        <Box width="20%">

        </Box>
      </HStack>
    </>
  );
}
