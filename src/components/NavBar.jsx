import { Flex, Heading, Icon, Input, Box } from "@chakra-ui/react";
import { FcSalesPerformance } from "react-icons/fc"
import { BiSearchAlt, BiLogOut, BiNotepad } from "react-icons/bi"
import { Menu } from "./Menu"

export function NavBar() {
    return (
        <Box bgColor="blue.300">
            <Flex
                justifyContent="space-between"
                paddingX={10}
                paddingY={2}
            >
                <Flex>
                    <Icon as={FcSalesPerformance} boxSize={10} margin={1} />
                    <Heading>Sales GUI</Heading>
                </Flex>
                <Flex
                    align="center"
                    marginX={10}
                    shadow="lg"
                    borderRadius={10}
                    border="1px"
                    borderStyle="solid"
                    borderColor="gray.300"
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
            <Menu />
        </Box>
    )
}