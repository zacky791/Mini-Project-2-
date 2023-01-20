import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement, useColorMode, VStack, useColorModeValue,Text, HStack, Container } from "@chakra-ui/react";
import React  from "react";
import Image from "next/image";
import ChakraNextLinkButton from "../component/ui/Button";
import Header from "../component/Navbar";
import Footer from "../component/Footer";


export default function SignUpForm() {
   
  //changing to dark mode 
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue('purple.300' , 'teal.800')
  const formBackgroundButton = useColorModeValue('gray.100' , 'gray.400')

  {/* <Center width={"100%"} height={"100vh"} > */}

  return (
    <>
    {/* <video controls src={"/assets/leonvideo.mp4"} style={{ width: "100%", height:"100%" }} autoPlay loop muted /> */}
    <Box bgImage={"/assets/forest5.jpg"} width={"100%"} height={"100vh"}>
      <Header/>
    <Box  borderRadius={"10px"} bg={"purple.200"}
     padding={'20px'} width={"500px"} mx={"auto"} mt={"210px"} display={"flex"} alignItems={"center"} justifyContent={"center"}  flexDirection='column'>
      <VStack>
        <HStack>  
          <Text fontWeight={'bold'} fontSize={"30px"} mb={"6px"}>Welcome To Homepage</Text>
          <Image src={'/assets/leon.png'} width={50} height={30} alt={'leon'}/>
        </HStack>
      {/* <Button onClick={toggleColorMode} fontWeight={'bold'} >Toggle Color Mode</Button> */}
      <ChakraNextLinkButton href={'/signup'} width={"160px"} fontWeight={'bold'}>Sign Up</ChakraNextLinkButton>
      <ChakraNextLinkButton href={'/login'} width={"160px"} fontWeight={'bold'}>Login</ChakraNextLinkButton> 
      </VStack>
    </Box>
    </Box>
    <Footer/>
    </>
  );
}