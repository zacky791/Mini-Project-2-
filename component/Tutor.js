import React, { useState } from 'react'
import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Img, Select, HStack, Container, Textarea, RadioGroup, Stack, Radio } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";


function Tutor({setActive}) {
    
  const {register, handleSubmit, formState: {errors} } = useForm()
  const [file, setFile] = useState()

  //for display data 
  const onSubmit = data =>{
    console.log(data); 
    setActive(2)
  } 

  //for display preview image
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //for newsletter
  const [newsLetter, setNewsLetter] = React.useState('0')

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

      <FormControl isInvalid={errors.profilepic}>
      <FormLabel >Profile Picture</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'file'}  color={"black"} onChange={handleChange} focusBorderColor='lime' {...register("profilepic", { 
        required: "Please insert your profile picture"
      })} />
      <Img src={file} />
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsLetter} value={newsLetter} mb={"20px"}>
        <Stack direction={"row"}>
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setActive(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"} > Submit</Button>

      </Container> 
  </>
  )
}

export default Tutor
