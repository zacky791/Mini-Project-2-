import { Box } from "@chakra-ui/react"
import Footer from "../component/Footer"
import Form from "../component/LoginForm"
import Header from "../component/Navbar"

export default function Login () {

  return(
    <Box  bgColor={"#f4f7fe"} >  
    <Header/>
    <Form/>
    <Footer/>
    </Box>
  )
}

// why no need public/assets.. ?