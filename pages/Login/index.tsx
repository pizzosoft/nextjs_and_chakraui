/* eslint-disable react/react-in-jsx-scope */
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Login() {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <Flex align="center" justify="center" h="100vh">
            <Flex direction="column" p={12} bg={formBackground} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <Input mb={3} placeholder="lordpizzo@gmail.com" type="email" variant="filled" />
                <Input mb={3} placeholder="*********" type="password" variant="filled" />
                <Button mb={6} colorScheme="teal">Log in</Button>
                <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
            </Flex>
        </Flex>
    )
}
