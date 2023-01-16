import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue } from "@chakra-ui/react"
import Footer from "../component/Footer"
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Header from "../component/Navbar"
import { motion } from "framer-motion"

export default function page () {
  const {register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = data => console.log(data); //display data

  //For showing password
  const [show, setShow] = React.useState(false)
  const [login, setLogin] = useState(false)
  const handleClick = () => setShow(!show)

  //for dark mode
  const formBackgroundButton = useColorModeValue('purple.100' , 'purple.500')

  //for pop up
  const handleLogin = () => {
    setLogin(!show)
  }
  return(
    <Box bgImage={"/assets/bear.jpg"} bgSize={'100%'}   >  
    <Header/>
    <Box bg={formBackgroundButton} mb={"195px"} padding={'20px'}  borderWidth={'1px'} mt={'100px'} maxW={'500px'} mx={"auto"} display={'flex'} flexDirection={'column'}  onSubmit={handleSubmit(onSubmit)  }>
      <VStack>
           <Text fontWeight={'bold'} fontSize={'30px'}>Sign Up</Text>
      </VStack> 

      <form onSubmit={handleSubmit(onSubmit)}>
        
      <FormControl isInvalid={errors.email}>
      <FormLabel >Name</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("name", { 
          required: "Please insert your Name"
      })} />
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> 

      <FormLabel >Age</FormLabel>
      <Input mb={'4px'} type={'number'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("age", { 
          required: "Please insert your Age",
          min: { value: 3 , message: 'Age not in range' },
          max: { value: 70 , message: 'Age not in range' }
      })} />
      <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage> 

      <FormLabel >Date</FormLabel>
      <Input mb={'4px'} type={'date'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("age", { 
          required: "Please insert your Age",
          min: { value: 3 , message: 'Age not in range' },
          max: { value: 70 , message: 'Age not in range' }
      })} />
      <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage> 

      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'email'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("email", { 
          // required: "Please insert your Email", 
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
        <Button width={'100%'} type={"submit"}  colorScheme={`purple`} onClick={handleLogin}> Submit</Button>
        </motion.div>
        {/* <Text>
            {login && alert("Sucess Login")}
        </Text> */}
       </form>
        </Box>
    <Footer/>
    </Box>
  )
}

// why no need public/assets.. ?