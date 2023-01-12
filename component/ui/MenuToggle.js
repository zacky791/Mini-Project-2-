import React from "react"
import { Box } from "@chakra-ui/react"
import {IoMenu} from 'react-icons/io5'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function MenuToggle ({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} mr={"30px"}  >
      {isOpen ? <AiOutlineCloseCircle size={"30px"}/> : <IoMenu size={"30px"}/>} 
    </Box>
  )
}