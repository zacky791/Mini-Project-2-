import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";


//validation yup
const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8,"password too short"),
  // age: yup.number().positive().integer().required(),
}).required();

// react hook form
const {register, handleSubmit, formState: {errors}, getValues } = useForm({
  resolver: yupResolver(schema)
})

const onSubmit = data =>{
  console.log(data); 
}

const SignUpForm = () => {
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl isInvalid={errors.username}>
        <FormLabel >Username</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("username")} />
      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.email}>
      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'email'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("email")} />
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
        focusBorderColor={'lime'}
        {...register("password")}
      />
        
      <InputRightElement width={'80px'}>
        <Button bg={"purple.100"} h={'27px'} size={'sm'} onClick={handleClick}>
          {showPassword ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
        <FormErrorMessage mb={'10px'}>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>

      <motion.div whileTap={{scale:0.9}}>
        <Button width={'100%'}  colorScheme={`purple`} type={"submit"}  > Next </Button>
        </motion.div>  
        </form>
      </>
  )
}

export default SignUpForm
