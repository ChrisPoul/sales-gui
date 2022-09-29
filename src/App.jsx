import { Routes, Route } from "react-router-dom"
import {
  HStack, StackDivider, Box
} from "@chakra-ui/react"
import { HomePage } from "./components/HomePage";
import { AddProduct } from "./components/AddProduct";
import { ProductDetails } from "./components/ProductDetails";
import { ProductsList } from "./components/ProductsList";
import { SideMenu } from "./components/SideMenu";
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
        <SideMenu />
        <Box width="100%" padding={5}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Routes>
        </Box>
      </HStack>
    </>
  );
}
