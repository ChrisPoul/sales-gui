import {
    Box, Flex, Link, Icon
} from "@chakra-ui/react"
import { MdOutlineReceiptLong, MdProductionQuantityLimits } from "react-icons/md"
import { Link as ReachLink } from "react-router-dom"

export function Menu() {
    return (
        <Flex
            paddingX={50}
            paddingY={4}
            justifyContent="space-between"
        >
            {Section("Productos", "/products", MdProductionQuantityLimits)}
            {Section("Recibos", "#", MdOutlineReceiptLong)}
            {Section("Algo muy largo ", "#")}
        </Flex>
    )
}

function Section(title, url, sectionIcon) {
    return (
        <Link
            key={title}
            display="flex"
            textAlign="left"
            as={ReachLink}
            to={url}
            width="100%"
            whiteSpace="nowrap"
            alignItems="center"
            _hover={{
                textDecoration: "none"
            }}
        >
            <Icon as={sectionIcon} />
            <Box marginLeft={2} color="gray.800">{title}</Box>
        </Link>
    )
}
