import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import React, { useState } from 'react'
import { motion } from "framer-motion"

const RolesToPick = () => {
    const [screen,setScreen] = useState(1)
  return (
    <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Tutor</Text>
          <Text mb={"10px"}>Click this picture for a person who want to register as a teacher </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leonfighting.webp"}  borderRadius={"10px"} height={"188px"} width={"400px"} onClick={()=>{setScreen(2)}} />
          </motion.div>
          </Box>

          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Guardian</Text>
          <Text mb={"10px"}>Click this picture for a parent who want to register their son </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leongame.webp"} borderRadius={"10px"} height={"188px"} width={"470px"} onClick={()=>{setScreen(3)}}/>
          </motion.div>
          </Box>
    </Container> 
  )
}

export default RolesToPick
