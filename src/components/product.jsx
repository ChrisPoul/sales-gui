import { Box, Text, Flex, Spacer, Button, Icon } from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import dayjs from "dayjs"
import "dayjs/locale/es"

export function ProductsItem(product) {
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
            <Button marginTop={2} colorScheme="purple">
                More details
            </Button>
        </Box>
    )
}