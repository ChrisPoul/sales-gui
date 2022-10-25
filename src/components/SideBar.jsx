import {
    Box, VStack, Flex, Icon
} from "@chakra-ui/react"
import { MdOutlineReceiptLong, MdProductionQuantityLimits } from "react-icons/md"

export function SideBar() {
    return (
        <VStack>
            <h1>Productos</h1>
            <VStack
                paddingLeft={6}
                paddingTop={3}
                paddingRight={10}
                paddingBottom={4}
                width="max-content"
                alignContent="start"
            >
                {Section("Productos", "/products", MdProductionQuantityLimits)}
                {Section("Recibos", "#", MdOutlineReceiptLong)}
                {Section("Algo muy largo ", "#")}
            </VStack>
        </VStack>
    )
}

function Section(title, url, sectionIcon) {
    return (
        <Flex
            key={title}
            display="flex"
            textAlign="left"
            width="100%"
            whiteSpace="nowrap"
            alignItems="center"
            _hover={{
                textDecoration: "none"
            }}
        >
            <Icon as={sectionIcon} />
            <Box marginLeft={2} color="gray.800">{title}</Box>
        </Flex>
    )
}
