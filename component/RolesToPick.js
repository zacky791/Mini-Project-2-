import { Box, Text, Container, Img, Button } from "@chakra-ui/react"
import React from 'react'
import { motion } from "framer-motion"
import useStore from "../util/useStore"

const RolesToPick = () => {
    
//use to change screen
const changeScreenTo2 = useStore((state)=> state.setScreenTo2)
const changeScreenTo3 = useStore((state)=> state.setScreenTo3)

  return (
    <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Tutor</Text>
          <Text mb={"10px"}>Click picture below to register as a tutor </Text>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} style={{cursor:"pointer"}}>
            <Button height={"188px"} width={"200px"} onClick={changeScreenTo2} bg={'#EBDDFB'}>
            <Img src={"/assets/leonfighting.webp"}  borderRadius={"10px"} height={"188px"} width={"400px"}  />
            </Button>
          </motion.div>
          </Box>

          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Guardian</Text>
          <Text mb={"10px"}>Click picture below to enroll child </Text>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{cursor:"pointer"}}> 
          <Button height={"188px"} width={"200px"} onClick={changeScreenTo3} bg={'#EBDDFB'}>
            <Img src={"/assets/leongame.webp"}  borderRadius={"10px"} height={"188px"} width={"400px"}  />
            </Button>
          </motion.div>
          </Box>
    </Container> 
  )
}

export default RolesToPick
