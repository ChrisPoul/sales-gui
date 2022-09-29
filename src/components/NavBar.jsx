import { Flex, Heading, Icon, Input } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc"
import { BiSearchAlt, BiLogOut, BiNotepad } from "react-icons/bi"

export function NavBar() {
    return (
        <Flex border="2px solid" justifyContent="space-between" paddingX={10}>
            <Flex>
                <Icon as={FcSalesPerformance} boxSize={10} margin={1} />
                <Heading>Sales GUI</Heading>
            </Flex>
            <Flex
                align="center"
                marginX={10}
                shadow="md"
                borderRadius={5}
                border="2px solid"
                width="50%"
            >
                <Icon as={BiSearchAlt} boxSize={6} />
                <Input border="none" focusBorderColor="none" paddingLeft={0} />
            </Flex>
            <Flex align="center">
                <Icon as={BiNotepad} boxSize={8} />
                <Icon as={BiLogOut} boxSize={8} />
            </Flex>
        </Flex>
    )
}