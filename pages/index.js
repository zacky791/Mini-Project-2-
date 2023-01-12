import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement, useColorMode, VStack, useColorModeValue,Text, HStack } from "@chakra-ui/react";
import React  from "react";
import Image from "next/image";
import ChakraNextLinkButton from "../component/ui/Button";


export default function SignUpForm() {
   
  //changing to dark mode 
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue('purple.300' , 'teal.800')
  const formBackgroundButton = useColorModeValue('gray.100' , 'gray.400')

  {/* <Center width={"100%"} height={"100vh"} > */}

  return (
    <>
    <video controls src={"/assets/leonvideo.mp4"} style={{ width: "100%", height:"100%" }} autoPlay loop muted />
    <Box
     padding={'20px'}  gap={2} position="absolute" alignItems={"center"} justifyContent={"center"} top={"260px"} left={"550px"} flexDirection='column'>
      <VStack>
        <HStack>  
          <Text fontWeight={'bold'} fontSize={30} mb={2}>Welcome To Homepage</Text>
          <Image src={'/assets/leon.png'} width={50} height={30} alt={'leon'}/>
        </HStack>
      {/* <Button onClick={toggleColorMode} fontWeight={'bold'} >Toggle Color Mode</Button> */}
      <ChakraNextLinkButton href={'/signup'} width={40} fontWeight={'bold'}>Sign Up</ChakraNextLinkButton>
      <ChakraNextLinkButton href={'/login'} width={40} fontWeight={'bold'}>Login</ChakraNextLinkButton> 
      </VStack>
    </Box>
    {/* </Center> */}
    </>
  );
}