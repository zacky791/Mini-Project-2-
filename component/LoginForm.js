import { Box, Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { motion } from "framer-motion"
import ChakraNextLinkText from "./ui/TextLink";

export default function LoginForm() {
  const {register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = data => console.log(data); //display data

  //For showing password
  const [show, setShow] = useState(false)
  const [login, setLogin] = useState(false)
  const handleClick = () => setShow(!show)

  //for pop up
  const handleLogin = () => {
    setLogin(!show)
  }

  return (
    <>
    <Box bg={'#EBDDFB'} mb={"195px"} padding={'40px'} borderRadius={"10px"} borderWidth={'1px'} mt={'150px'} gap={2} maxW={'500px'} mx={"auto"} display={'flex'} flexDirection={'column'}  onSubmit={handleSubmit(onSubmit)  }>
      <VStack>
           <Text fontWeight={'bold'} fontSize={'30px'}>Login</Text>
      </VStack> 

      <form onSubmit={handleSubmit(onSubmit)}>
        
      <FormControl isInvalid={errors.email}>
      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor={'purple.600'} {...register("email", { 
          required: "Please insert your Email", 
          pattern: { value: /[A-Z]+[a-zA-Z0-9_.+]+[@][a-z]+[\.][a-zA-Z0-9-.]{2,3}/, message: 'Email required upper case and (@.)' }
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
        focusBorderColor={'purple.600'}
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

        <motion.div whileTap={{scale:1.05}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`purple`} mt={"10px"} onClick={handleLogin}> Submit</Button>
        </motion.div>
       </form>
       <VStack>
        <ChakraNextLinkText href={'/SignUp'} color={"purple.500"} mt={"20px"} _hover={{textDecoration:"underline"}} >Register for LEON Classroon</ChakraNextLinkText>
        </VStack>
        </Box>
    </>
  );
}