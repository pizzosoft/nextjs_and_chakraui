/* eslint-disable react/react-in-jsx-scope */
import { Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import SideBar from './SideBar'
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs'

interface props {
    children: JSX.Element
}

export default function Layout({ children }: props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("blue.100", "blue.700")
    return (
        <>
            <Flex align="flex-start" direction="row" h="100vh">
                <SideBar />
                <Flex flex="1" h="100vh" ml={8} p={4} bg={formBackground}>
                    <IconButton aria-label={""} icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsSun />} onClick={toggleColorMode} />
                    {children}
                </Flex>
            </Flex>
        </>
    )
}