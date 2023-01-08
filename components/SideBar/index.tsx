/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Link, Avatar, Divider, Flex, Heading, IconButton, Text, Icon, MenuButton, Menu } from "@chakra-ui/react";
import { useState } from "react";
import { FiAperture, FiArchive, FiFileText, FiHome, FiLogOut, FiMenu, FiPrinter, FiSliders, FiUploadCloud, FiUser } from 'react-icons/fi'
import { useRouter } from "next/router";
import { useMemo } from 'react'
import classNames from "classnames";

const menuItems = [
    { id: 1, label: "Tela Principal", icon: FiHome, link: "/" },
    { id: 2, label: "Atendimento", icon: FiHome, link: "/Atendimento" },
    { id: 3, label: "SAC", icon: FiAperture, link: "/" },
    { id: 4, label: "Retorno RG", icon: FiArchive, link: "/" },
    { id: 5, label: "Configurações", icon: FiSliders, link: "/" },
    { id: 6, label: "Orçamentos", icon: FiFileText, link: "/" },
    { id: 7, label: "Relatórios", icon: FiPrinter, link: "/" },
    { id: 8, label: "Cargas em lote", icon: FiUploadCloud, link: "/" },
    { id: 9, label: "Meu Cadastro", icon: FiUser, link: "/" },
    { id: 10, label: "Sair", icon: FiLogOut, link: "/" },
];

export default function SideBar() {
    const [navSize, changeNavSize] = useState("large")
    const router = useRouter();
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );

    const getAtivo = (menu: { id: number; label: string; link: string; }) => {
        return activeMenu?.id === menu.id

    }
    const getNavItemClasses = (menu: { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; } | { id: number; label: string; link: string; }) => {
        return classNames(
            `flex items-center cursor-pointer hover:${activeMenu?.id === menu.id ? "#AEC8CA" : "transparent"} rounded w-full overflow-hidden whitespace-nowrap`,
            {
                ["bg-light-lighter"]: activeMenu?.id === menu.id,
            }
        );
    };

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <Flex
            pos="sticky"
            left="5"
            justify="space-between"
            direction="column"
            w={navSize == "small" ? "75px" : "220px"}
            h="100%"
            mt="2.5vh"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            shadow="0 4px 12px 0 rgb(0,0,0,0.05)"
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <Flex
                as="nav"
                align={navSize == "small" ? "center" : "flex-start"}
                direction="column"
                p="5%">
                <IconButton
                    mt={5}
                    bg="none"
                    _hover={{
                        background: 'none'
                    }}
                    aria-label={""}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <Menu placement="right">
                    {menuItems.map(({ icon: IconExibir, ...menu }) => {
                        const ativo = getAtivo(menu);
                        return (
                            <Flex >
                                <Link key={menu.id}
                                    href={menu.link}
                                    w={navSize == "large" ? "200px" : "0px"}
                                    p={3}
                                    bg={ativo ? "#AEC8CA" : "transparent"}
                                    borderRadius={8}
                                    _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}>
                                    <MenuButton key={menu.id} w="100%">
                                        <Flex >
                                            <Icon as={IconExibir} fontSize="xl" />
                                            <Text display={navSize == "small" ? "none" : "flex"} ml={5}>{menu.label}</Text>
                                        </Flex>
                                    </MenuButton>
                                </Link>
                            </Flex>
                        );
                    })}
                </Menu>
            </Flex>

            <Flex
                align={navSize == "small" ? "center" : "flex-start"}
                direction="column"
                w="100%"
                mb={4}
                p="5%"
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex align="center" mt={4}>
                    <Avatar size="sm" />
                    <Flex direction="column" display={navSize == "small" ? "none" : "flex"} ml={4}>
                        <Heading as="h3" size="sm">Raphael Pizzo</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    )
}