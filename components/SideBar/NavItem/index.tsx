/* eslint-disable react/react-in-jsx-scope */
import { Flex, Link, MenuButton, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
interface props {
    navSize: string,
    title: string,
    icon: IconType,
    active: boolean,
    url: string,
    id: number
}

export default function NavItem({ navSize, title, icon, active, url, id }: props) {
    const idPrimeiroFlex = `primeiroFlex${id}`
    const idSegundoFlex = `idSegundoFlex${id}`
    const idLink = `link${id}`
    const idMenu = `menu${id}`
    const idIcon = `idIcon${id}`
    const idText = `idText${id}`
    return (
        <Flex
            key={idPrimeiroFlex.toString()}
            align={navSize == "small" ? "center" : "flex-start"}
            direction="column"
            w="100%"
            mt={0}
        >
            <Link
                key={idLink.toString()}
                w={navSize == "large" ? "200px" : "100%"}
                p={3}
                bg={active ? "#AEC8CA" : "transparent"}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
                href={url}
            >
                <MenuButton key={idMenu.toString()} w="100%">
                    <Flex key={idSegundoFlex.toString()}>
                        <Icon key={idIcon.toString()} as={icon} color={active ? "#82AAAD" : "gray.500"} fontSize="xl" />
                        <Text key={idText.toString()} display={navSize == "small" ? "none" : "flex"} ml={5}>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>


        </Flex>
    )
}
