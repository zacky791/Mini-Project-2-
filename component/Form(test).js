import { Box, Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import FormLabeling from "./ui/FormLabeling"


function FormTest() {
    const [input,setInput] = useState('')
    const isFalse = input === ''

  return (
    //formErrorMessage will appear only when isInvalid true
    <Box mt={"70px"} mb={'136px'}>
        <Center>    
        <Text fontWeight={'bold'} fontSize={'30px'} mt={'40px'} >Login To Your Account</Text>
        </Center>
    <FormControl isInvalid={isFalse} maxW='400px' mx={'auto'} mt={'40px'} >
      
       <FormLabeling type={"text"} label={"ID"} requirement={"number"}/>
       <FormLabeling type={"text"} label={"Password"} requirement={"capital letter"}/>

        <Button width={'100%'} type="submit"  colorScheme={`pink`} mt={'20px'}>Submit</Button> 
    </FormControl>
    </Box>
  )
}

export default Form
