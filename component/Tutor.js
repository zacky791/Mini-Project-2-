import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"

const Tutor = () => {

    //validation yup
const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8,"password too short"),
    // age: yup.number().positive().integer().required(),
  }).required();

   //for display preview image
   function handleChange(e) {
    console.log(e.target.files);
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
 }

      //for subsribe newsletter
  //FIXME - testing true or false
  const [newsletter, setNewsletter] = useState('0')

      //for display profile picture
  const [profilePicture, setProfilePicture] = useState()

    //react hook form
  const {register, handleSubmit, formState: {errors}, getValues } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data =>{
    console.log(data); 

  //this for action after pass the validation (it will change screen)
  screen === 0 ? setScreen(1) : setScreen(4)
  }

  return (
    <>
      <FormControl isInvalid={errors.experience}>
      <FormLabel >Years Of Teaching Experience</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register("experience", { 
          required: "Please insert your Experience"
      })}>
        <option>None</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5++</option>
      </Select>
      <FormErrorMessage>{errors.experience && errors.experience.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.aboutme}>
       <FormLabel >About Me</FormLabel>
       <Textarea borderRadius={"10px"} height={"90px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("aboutme", { 
          required: "Please insert about me",
          minLength: { value: 5 , message: 'Too short' },
          maxLength: { value: 70 , message: 'Too many words' }
      })} />
       <FormErrorMessage>{errors.aboutme && errors.aboutme.message}</FormErrorMessage> 
       </FormControl>

      <FormControl isInvalid={errors.profilepic} onChange={handleChange}>
      <FormLabel >Profile Picture</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register("profilepic", { 
        required: "Please insert your profile picture"
      })} />
       <Flex justifyContent={"center"} alignItems={"center"} mb={"15px"}>
      <Image src={profilePicture}  />
      </Flex>  
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.newsletter}>
      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsletter} value={newsletter} mb={"20px"} {...register("newsletter" )}>
        <Stack direction={"row"}>
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setScreen(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"} > Submit</Button>

      </Container>  </>
  )
}

export default Tutor
