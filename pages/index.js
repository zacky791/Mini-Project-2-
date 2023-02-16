import { Box, VStack,Text, HStack} from "@chakra-ui/react";
import React  from "react";
import ChakraNextLinkButton from "../component/ui/Button";
import Header from "../component/Navbar";
import Footer from "../component/Footer";
import useStore from "../util/useStore";


export default function SignUpForm() {

  {/* <Center width={"100%"} height={"100vh"} > */}

  //for changing active screen
  const changeHomeScreen = useStore((state)=> state.setScreenTo0)

  return (
    <>
    <Box bgImage={"/assets/forest5.webp"} width={"100%"} height={"100vh"}>
      <Header/>
    <Box  borderRadius={"10px"} bg={"purple.200"}
     paddingX={'20px'} paddingY={"60px"} width={"500px"} mx={"auto"} mt={"180px"} display={"flex"} alignItems={"center"} justifyContent={"center"}  flexDirection='column'>
      <VStack gap={"5px"}>
        <HStack>  
          <Text fontWeight={'bold'} fontSize={"30px"} mb={"6px"}>Welcome To Homepage</Text>
        </HStack>
      <ChakraNextLinkButton href={'/signup'} onClick={changeHomeScreen} width={"355px"} fontWeight={'bold'}>Sign Up</ChakraNextLinkButton>
      <ChakraNextLinkButton href={'/login'} width={"355px"} fontWeight={'bold'}>Login</ChakraNextLinkButton> 
      </VStack>
    </Box>
    </Box>
    <Footer/>
    </>
  );
}