import { Flex, Heading, Icon, Input } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc"
import { BiSearchAlt, BiLogOut, BiNotepad } from "react-icons/bi"

export function NavBar() {
    return (
        <Flex justifyContent="space-between" paddingX={10} paddingY={2}>
            <Flex>
                <Icon as={FcSalesPerformance} boxSize={10} margin={1} />
                <Heading>Sales GUI</Heading>
            </Flex>
            <Flex
                align="center"
                marginX={10}
                shadow="lg"
                borderRadius={10}
                border="1px solid gray"
                width="50%"
            >
                <Icon as={BiSearchAlt} boxSize={6} margin={1} />
                <Input
                    border="none"
                    focusBorderColor="none"
                    paddingLeft={0}
                    placeholder="Buscar"
                />
            </Flex>
            <Flex align="center">
                <Icon as={BiNotepad} boxSize={8} />
                <Icon as={BiLogOut} boxSize={8} />
            </Flex>
        </Flex>
    )
}