/* eslint-disable react/react-in-jsx-scope */
import { PhoneIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text } from "@chakra-ui/react";
export default function InputChakra() {
    return (
        <>
            <Input placeholder="Type here" size="xs" variant="outline" />
            <Input placeholder="Type here" size="xs" variant="filled" />
            <Input placeholder="Type here" size="xs" variant="flushed" />
            <Input placeholder="Type here" size="xs" variant="unstyled" />

            <InputGroup>
                <Input placeContent="phone number" />
                <InputLeftElement>
                    <PhoneIcon color="teal.700" />
                </InputLeftElement>
            </InputGroup>

            <InputGroup>
                <Input placeContent="phone number" />
                <InputRightElement>
                    <PhoneIcon color="teal.700" />
                </InputRightElement>
            </InputGroup>

            <InputGroup>
                <Input placeContent="email" />
                <InputLeftAddon>
                    <Text>+55</Text>
                </InputLeftAddon>
            </InputGroup>

            <InputGroup>
                <Input placeContent="phone number" />
                <InputRightAddon>
                    <Text>+55</Text>
                </InputRightAddon>
            </InputGroup>
        </>
    )
}