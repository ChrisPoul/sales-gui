import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Box, Flex, Text, Icon, Spacer
} from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import dayjs from "dayjs"
import "dayjs/locale/es"
import * as API from "../services/products"

export function ProductDetails() {
    const [product, setProduct] = useState([]);
    let { productId } = useParams()
    useEffect(() => {
        API.getProduct(productId).then(setProduct)
    }, [productId]);

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
        </Box>
    )
}