import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Box, Text, Flex, Spacer, Button, Icon, Heading
} from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import dayjs from "dayjs"
import "dayjs/locale/es"
import * as API from "../services/products"

export function ProductsList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.getAllProducts().then(setProducts)
    }, []);
    return (
        <>
            <Heading as="h1" size="lg" margin={4}>
                Products
            </Heading>
            <section>
                {products.map(product => (
                    ProductsListItem(product)
                ))}
            </section>
        </>
    )
}

export function ProductsListItem(product) {
    return (
        <Box key={product.id} bg="gray.100" padding={2} margin={4} borderRadius="lg">
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
        </Box>
    )
}