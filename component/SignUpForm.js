import { Button, Input, InputGroup, InputRightElement, FormLabel, FormControl, FormErrorMessage, VStack } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import  useStore  from "../util/useStore";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChakraNextLinkButton from "./ui/Button";
import ChakraNextLinkText from "./ui/TextLink";

//REVIEW - 
// need to make logic pass the validation scehama first then can change page
// solution is make sure it button set to type submit and we change page through onsubmit function
// changing number can convert to another page


const SignUpForm = () => {

//validation yup
const schema = yup.object({
  username: yup.string().required("Please insert your username"),
  email: yup.string().email().required("Please insert your email"),
  password: yup.string().required("Please insert your password").min(8,"password too short"),
}).required();

//for insert the data from form to global state (object data)
const sendDataFormToZustand = useStore((state)=> state.setFormData)

const onSubmit = data =>{
  console.log(data); 
  sendDataFormToZustand(data)
  changeScreen()
}

  // react hook form
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  
  //for changing screen
  const changeScreen = useStore((state)=> {return state.setScreenTo1})

  //for showing password
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl isInvalid={errors.username}>
        <FormLabel >Username</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor={'purple.600'} {...register("username")} />
      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.email}>
      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'email'} bg={'white'} color={"black"} focusBorderColor={'purple.600'} {...register("email")} />
      <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.password} mb={'10px'}>
      <FormLabel >Password</FormLabel>
      <InputGroup size={'md'} mb={'5px'}>
      <Input 
        bg={'white'} 
        color={"black"}
        pr={"10px"}
        type={showPassword ? 'text' : 'password'}
        focusBorderColor={'purple.600'}
        {...register("password")}
        mb={"10px"}
      />
        
      <InputRightElement width={'80px'}>
        <Button bg={"purple.100"} h={'27px'} size={'md'}  onClick={handleClick}>
        {showPassword ? <RemoveRedEyeIcon color="disabled"/>: <VisibilityOffIcon/> }  
        {/* {showPassword ? 'Hide' : 'Show'} */}
        </Button>
      </InputRightElement>
      </InputGroup>
        <FormErrorMessage mb={'10px'}> {errors.password && errors.password.message} </FormErrorMessage>
      </FormControl>
          <motion.div whileTap={{scale:0.9}}>
        <Button width={'100%'}  colorScheme={`purple`} type={"submit"}  > Next </Button>
        </motion.div>  
        </form>

        <VStack>
        <ChakraNextLinkText href={'/Login'} color={"purple.500"} mt={"20px"} _hover={{textDecoration:"underline"}} >Already registered ? Sign in here</ChakraNextLinkText>
        </VStack>

      </>
  )
}

export default SignUpForm
