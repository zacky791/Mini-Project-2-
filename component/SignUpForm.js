import React from 'react'
import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";


function SignUpForm({setActive}) {
    
  const {register, handleSubmit, formState: {errors} } = useForm()

  //display data 
  const onSubmit = data =>{
    console.log(data); 
    setActive(1)
}
  
  //For showing password
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
  <>
   <form onSubmit={handleSubmit(onSubmit)}>

    <FormControl isInvalid={errors.username}>
        <FormLabel >Username</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("username", { 
          required: "Please insert your Username"
      })} />
      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.email}>
      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'email'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("email", { 
          required: "Please insert your Email", 
          // pattern: { value: /[A-Z]+[a-zA-Z0-9_.+]+[@][a-z]+[\.][a-zA-Z0-9-.]{2,3}/, 
          // message: 'Email required upper case and (@.)' }

      })} />
      <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage> 
      </FormControl>
      

      <FormControl isInvalid={errors.password} mb={'10px'}>
      <FormLabel >Password</FormLabel>
      <InputGroup size={'md'} mb={'5px'}>
      <Input 
        bg={'white'} 
        color={"black"}
        pr={"10px"}
        type={show ? 'text' : 'password'}
        focusBorderColor={'lime'}
        {...register("password", { required: "Please insert your password", 
        minLength: { value: 4 , message: 'Password too short !' },
        maxLength: { value: 15 , message: 'Password too long !' }
      })}
        />
        
      <InputRightElement width={'80px'}>
        <Button bg={"purple.100"} h={'27px'} size={'sm'} onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
        <FormErrorMessage mb={'10px'}>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>

      <motion.div whileTap={{scale:0.9}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`purple`}  > Submit</Button>
        </motion.div> 

      

      </form>

  </>
  )
}

export default SignUpForm
