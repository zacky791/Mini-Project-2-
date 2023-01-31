import { Box, Text, Container, Img } from "@chakra-ui/react"
import React from 'react'
import { motion } from "framer-motion"
import useStore from "../util/useStore"

const RolesToPick = () => {
    
//use to change screen
const changeScreen1to2 = useStore((state)=> state.setScreen1to2)
const changeScreen1to3 = useStore((state)=> state.setScreen1to3)

  return (
    <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Tutor</Text>
          <Text mb={"10px"}>Click this picture for a person who want to register as a teacher </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leonfighting.webp"}  borderRadius={"10px"} height={"188px"} width={"400px"} onClick={changeScreen1to2} />
          </motion.div>
          </Box>

          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Guardian</Text>
          <Text mb={"10px"}>Click this picture for a parent who want to register their son </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leongame.webp"} borderRadius={"10px"} height={"188px"} width={"470px"} onClick={changeScreen1to3}/>
          </motion.div>
          </Box>
    </Container> 
  )
}

export default RolesToPick
