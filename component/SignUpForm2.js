import { Box, Container, Img, Text } from '@chakra-ui/react'
import React from 'react'

function SignUpForm2({setActive}) {
  return (
    <>
    <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"20px"} mt={"15px"}>
    <Box borderRadius={"10px"} borderWidth={"2px"} borderColor={"purple.500"} padding={"10px"} textAlign={"center"}>
    <Text>Tutor</Text>
      <Img src={"/assets/leonfighting.PNG"} borderRadius={"10px"} onClick={()=>{setActive(2)}} />
    </Box>
    <Box borderRadius={"10px"} borderWidth={"2px"} borderColor={"purple.500"} padding={"10px"} textAlign={"center"}>
    <Text>Guardian</Text>
      <Img src={"/assets/leongame.PNG"} borderRadius={"10px"} onClick={()=>{setActive(3)}}/>
    </Box>
    </Container>
    </>
  )
}

export default SignUpForm2
