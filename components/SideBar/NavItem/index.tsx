/* eslint-disable react/react-in-jsx-scope */
import { Flex, Link, Menu, MenuButton, Icon, Text, MenuList } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import NavHoverBox from "../NavHoverBox";
import { useState } from "react";
interface props {
    navSize: string,
    title: string,
    icon: IconType,
    description: string
}

export default function NavItem({ navSize, title, icon, description }: props) {
    const [active] = useState(false)


    return (
        <Flex
            align={navSize == "small" ? "center" : "flex-start"}
            direction="column"
            w="100%"
            mt={30}
        >
            <Menu placement="right">
                <Link
                    w={navSize == "large" ? "200px" : "0px"}
                    p={3}
                    bg={active ? "#AEC8CA" : "transparent"}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} color={active ? "#82AAAD" : "gray.500"} fontSize="xl" />
                            <Text display={navSize == "small" ? "none" : "flex"} ml={5}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    w={200}
                    h={200}
                    ml={5}
                    py={0}
                    border="none"
                >
                    <NavHoverBox description={description} icon={icon} title={title} />
                </MenuList>
            </Menu>

        </Flex>
    )
}