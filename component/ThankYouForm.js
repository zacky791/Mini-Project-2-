import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import ChakraNextLinkButton from './ui/Button'
import { motion } from "framer-motion"

const ThankYouForm = () => {

  return (
    <>
    <Text textAlign={"center"} fontWeight={"bold"} mb={"15px"}>Thank you for register under the CIC company 💕💖<br/>An activation link has been sent to their email 📧 </Text>
    <Center>
    <motion.div whileTap={{scale:0.9}} >
        <ChakraNextLinkButton href={"/"}  colorScheme={"purple"}>Welcome</ChakraNextLinkButton>
    </motion.div>
    </Center>
    </>
  )
}

export default ThankYouForm
