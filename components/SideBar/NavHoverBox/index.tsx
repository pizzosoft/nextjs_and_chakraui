/* eslint-disable react/react-in-jsx-scope */
import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface props {
    title: string,
    icon: IconType,
    description: string
}

export default function NavHoverBox({ title, icon, description }: props) {
    return (
        <>
            <Flex
                pos="absolute"
                w={0}
                h={0}
                mt="calc(100px - 7.5px)"
                ml="-10px"
                borderTop="10px solid transparent"
                borderRight="10px solid #82AAAD"
                borderBottom="10px solid transparent"
            />
            <Flex
                align="center"
                justify="center"
                direction="column"
                w={200}
                h={200}
                color="#fff"
                textAlign="center"
                bg="#82AAAD"
                borderRadius="10px"
            >

                <Icon as={icon} mb={4} fontSize="3xl" />
                <Heading fontWeight="normal" size="md">{title}</Heading>
                <Text>{description}</Text>

            </Flex>

        </>
    )
}