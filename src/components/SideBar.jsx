import {
    Box, VStack, Link, Icon
} from "@chakra-ui/react"
import { MdOutlineReceiptLong, MdProductionQuantityLimits } from "react-icons/md"
import { Link as ReachLink } from "react-router-dom"

export function SideBar() {
    return (
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
            {Section("Algo muy largo para ver que pex", "#")}
        </VStack>
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
