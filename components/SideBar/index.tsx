/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Divider, Flex, Heading, IconButton, Text, Menu } from "@chakra-ui/react";
import { useState } from "react";
import { FiAperture, FiArchive, FiFileText, FiHome, FiLogOut, FiMenu, FiPrinter, FiSliders, FiUploadCloud, FiUser } from 'react-icons/fi'
import { useRouter } from "next/router";
import { useMemo } from 'react'
import NavItem from "./NavItem";

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
    const [isCollapsible, setIsCollapsible] = useState(false);

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );

    const getAtivo = (menu: { id: number; label: string; link: string; }) => {
        return activeMenu?.id === menu.id

    }

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
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
                            <NavItem title={menu.label} navSize={navSize} icon={IconExibir} active={ativo} url={menu.link} id={menu.id} />
                        );
                    })}
                </Menu>
            </Flex>

            <Flex
                key="flex-inferior"
                align={navSize == "small" ? "center" : "flex-start"}
                direction="column"
                w="100%"
                mb={4}
                p="1%"
            >
                <Divider key="ssss" display={navSize == "small" ? "none" : "flex"} />
                <Flex key="flex-inferior-out" align="center" mt={4}>
                    <Avatar key="avatar" size="sm" />
                    <Flex key="ultimoflex" direction="column" display={navSize == "small" ? "none" : "flex"} ml={4}>
                        <Heading key="heading" as="h3" size="sm">Raphael Pizzo</Heading>
                        <Text key="text" color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    )
}