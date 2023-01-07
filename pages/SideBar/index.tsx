/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiAperture, FiArchive, FiFileText, FiHome, FiLogOut, FiMenu, FiPrinter, FiSliders, FiUploadCloud, FiUser } from 'react-icons/fi'
import NavItem from "./NavItem";

export default function SideBar() {
    const [navSize, changeNavSize] = useState("large")
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
                <NavItem navSize={navSize} icon={FiHome} title="Tela Principal" description="Retorna para a tela principal do Sigat, onde podem ser visualizadas as suas notificações e funções administrativas" />
                <NavItem navSize={navSize} icon={FiHome} title="Atendimento" description="" />
                <NavItem navSize={navSize} icon={FiAperture} title="SAC" description="" />
                <NavItem navSize={navSize} icon={FiArchive} title="Retorno RG" description="" />
                <NavItem navSize={navSize} icon={FiSliders} title="Configurações" description="" />
                <NavItem navSize={navSize} icon={FiFileText} title="Orçamentos" description="" />
                <NavItem navSize={navSize} icon={FiPrinter} title="Relatórios" description="" />
                <NavItem navSize={navSize} icon={FiUploadCloud} title="Cargas em lote" description="" />
                <NavItem navSize={navSize} icon={FiUser} title="Meu Cadastro" description="" />
                <NavItem navSize={navSize} icon={FiLogOut} title="Sair" description="" />
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