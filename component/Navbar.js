import Logo from "../component/ui/Logo"
import React from "react"
import { Box } from "@chakra-ui/react"
import MenuToggle from "../component/ui/MenuToggle"

export default function Header () {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <>
    <Box>
    <Logo src="/assets/Leon.png" alt="Leon Logo" bg={"red.200"} />
    <MenuToggle toggle={toggle} isOpen={isOpen} />
    </Box>
    </>
  )
}