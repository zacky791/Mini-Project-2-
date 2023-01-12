import Logo from "../component/ui/Logo"
import React from "react"
import { Flex, Stack } from "@chakra-ui/react"
import MenuToggle from "../component/ui/MenuToggle"
import MenuItem from "./ui/MenuItem"
import { motion } from "framer-motion"

export default function Header () {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <>
    <Flex alignItems={"center"} justify={"space-between"} bg={"#7e43c7"} h={"80px"} color={"white"} >
    <motion.a
     whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.8 }}
     style={{ x: 100 }}
    > <Logo src="/assets/leonimg.png" alt="Leon Logo" width={'200px'} p={'4px'} pl={{base:"20px" ,md:'50px'}} display={{base:"block",md:"block"}} /></motion.a>
   
    <Stack spacing={8} direction={['column','row','row','row']} pr={'100px'} display={{base:"none",md:"flex"}}>
    <MenuItem>Home</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Contact Us</MenuItem>
    <MenuItem>Footer</MenuItem>
    </Stack>
     <MenuToggle toggle={toggle} isOpen={isOpen}/>
    </Flex>
    </>
  )
}