import React from "react"
import { Box, Image, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Image src={props.src} alt={props.alt} width={props.width} />
      </Text>
    </Box>
  )
}