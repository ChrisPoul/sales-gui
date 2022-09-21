import { Box, Text, Flex, Spacer, Button, Icon, Heading } from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
import dayjs from "dayjs"
import "dayjs/locale/es"

export function DisplayItems(items, heading) {
    return (
        <>
            <Heading as="h1" size="lg" margin={4}>
                {heading}
            </Heading>
            <section>
                {items.map(item => (
                    DisplayItem(item)
                ))}
            </section>
        </>
    )
}

export function DisplayItem(item) {
    return (
        <Box key={item.id} bg="gray.100" padding={2} margin={4} borderRadius="lg">
            <Flex>
                <Flex align="center">
                    <Box>{item.name}</Box>
                    <Flex align="center">
                        <Icon as={HiCalendar} color="gray.500" marginX={1} />
                        <Text fontSize="sm" color="gray.500">
                            {dayjs(item.time_created).locale("es").format("D MMMM YYYY")}
                        </Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Box>
                    {item.price}
                </Box>
            </Flex>
            <Flex>
                <Text>
                    {item.description}
                </Text>
            </Flex>
            <Button marginTop={2} colorScheme="purple">
                More details
            </Button>
        </Box>
    )
}