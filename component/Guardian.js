import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
const Guardian = () => {
  return (
    <>
    <FormControl isInvalid={errors.profilepic} onChange={(e)=>{setProfilePicture(URL.createObjectURL(e.target.files[0]))}} >
    <FormLabel >Profile Picture</FormLabel>
      <Input mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register("profilepic", { 
        required: "Please insert your profile picture"
      })} />
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src={profilePicture}  />
      </Flex>  

      <FormControl isInvalid={errors.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("name", { 
          required: "Please insert your name"
      })} />
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.age} >
      <FormLabel >Age</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'number'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("age", { 
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
      <FormLabel >Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsletter} value={newsletter} mb={"20px"}>
        <Stack direction={"row"}>
          //FIXME - Try using booeleon 
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setScreen(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}  > Submit</Button>

      </Container> 

  </>
  )
}

export default Guardian
