import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Box, Text, Flex, Spacer, Button, Icon, Heading
} from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import dayjs from "dayjs"
import "dayjs/locale/es"
import * as API from "../services/products"

export function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.getAllProducts().then(setProducts)
    }, []);
    return (
        <>
            <Flex align="center">
                <Heading as="h1" size="lg" margin={4}>
                    Products
                </Heading>
                <Spacer />
                <Link to="/addProduct">
                    <Button>Añadir Producto</Button>
                </Link>
            </Flex>
            <Box bgColor="white" borderRadius="lg">
                {products.map(product => (
                    ProductListItem(product)
                ))}
            </Box>
        </>
    )
}

export function ProductListItem(product) {

    const handleDelete = event => {
        const productId = event.target.getAttribute('product_id')
        if (window.confirm("Estas seguro que deseas borrar")) {
            const response = API.deleteProduct(productId)
            response.then(() => {
                alert("Operación exitosa")
                document.getElementById(productId).remove()
            })
        }
    }

    return (
        <Box key={product.id} id={product.id} padding={6} shadow="base">
            <Flex>
                <Flex align="center">
                    <Box>{product.name}</Box>
                    <Flex align="center">
                        <Icon as={HiCalendar} color="gray.500" marginX={1} />
                        <Text fontSize="sm" color="gray.500">
                            {dayjs(product.time_created).locale("es").format("D MMMM YYYY")}
                        </Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Box>
                    {product.price}
                </Box>
            </Flex>
            <Flex>
                <Text>
                    {product.description}
                </Text>
            </Flex>
            <Link to={`/product/${product.id}`}>
                <Button marginTop={2} colorScheme="purple">
                    More details
                </Button>
            </Link>
            <Button product_id={product.id}
                colorScheme="red"
                marginLeft={2}
                onClick={handleDelete}
            >
                Delete
            </Button>
        </Box>
    )
}