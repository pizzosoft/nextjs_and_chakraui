/* eslint-disable react/react-in-jsx-scope */
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</RecoilRoot>
	)
}
