import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import "@fontsource/open-sans"
import "@fontsource/poppins"
import "@fontsource/cairo"
import "@fontsource/quicksand"

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      heading: `'quicksand'`,
      body: `'poppins'`,
    },
  })
  return(
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
