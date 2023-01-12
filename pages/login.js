import { Box } from "@chakra-ui/react"
import Footer from "../component/Footer"
import Form from "../component/Form"
import Header from "../component/Navbar"

export default function page () {

  return(
    <Box bgImage={"/assets/animal2.jpg"} bgSize={'100%'}   >  
    <Header/>
    <Form/>
    <Footer/>
    </Box>
  )
}

// why no need public/assets.. ?