import React from "react"
import { Box, MenuIcon } from "@chakra-ui/react"

export default function MenuToggle ({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}