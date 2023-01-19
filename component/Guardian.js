import React, { useState } from 'react'
import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Image, Container, RadioGroup, Stack, Radio, Select } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useForm, useFormContext } from "react-hook-form";


function Guardian({setActive}) {
    
  const [file, setFile] = useState()
  const { register , formState: {errors} } = useFormContext();

  //for display data 
  const onSubmit = data =>{
    console.log(data); 
    // setActive(1)
  } 

  //for display preview image
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //for newsletter
  const [newsLetter, setNewsLetter] = React.useState('0')

  //for formprovider 
  // function NestedInput() {
  //   const { register } = useFormContext(); // retrieve all hook methods
  //   return <input {...register("test")} />;
  // }


  return (
  <>
    <FormControl isInvalid={errors.profilepic} >
    <FormLabel >Profile Picture</FormLabel>
      <Input mb={'4px'} type={'file'}  color={"black"} onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]))}} focusBorderColor='lime' {...register("profilepic", { 
        required: "Please insert your profile picture"
      })} />
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("name", { 
          required: "Please insert your name"
      })} />
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.age} >
      <FormLabel >Age</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("age", { 
          required: "Please insert your age"
      })} />
      <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.gender} mb={"20px"}>
      <FormLabel >Gender</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register("gender", { 
          required: "Please insert your Experience"
      })}>
        <option>Male</option>
        <option>Female</option>
      </Select>
      <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage> 
      </FormControl>

      <FormControl >
      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsLetter} value={newsLetter} mb={"20px"}>
        <Stack direction={"row"}>
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setActive(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}  > Submit</Button>

      </Container> 

      <Box boxSize={"sm"}>
      <Image src={file} />
      </Box>
     
  </>
  )
}

export default Guardian
