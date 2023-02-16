import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";

const Tutor = () => {

//validation yup
const schema = yup.object({
aboutMe: yup.string().required("You need to write about yourself").min(15,"description too short , min character 15").max(40,"description too long , max character 40"),
profilePicture: yup.mixed().test(
  "profilePicture",
  "Your need to upload picture and the file must be not exceed 5MB",
  (value)=>{ 
    return value[0] && !!value[0].size ? value[0].size <= 5000000 : false
   }
),
})

//for display preview image
function handleChange(e) {
setProfilePicture(URL.createObjectURL(e.target.files[0]));
 }

//for changing screen
const changePrevScreen = useStore((state)=>state.setScreenTo1)
const changeForwardScreen = useStore((state)=> {return state.setScreenTo4})

//for subsribe newsletter
//FIXME - testing true or false
const [newsletter, setNewsletter] = useState("0")

//for display profile picture
const [profilePicture, setProfilePicture] = useState()

//for insert the data from form to global state (object data)
const sendDataFormToZustand = useStore((state)=> state.setFormData)

//react hook form
const {register, handleSubmit, formState: {errors}} = useForm({
resolver: yupResolver(schema)
})
const onSubmit = data =>{
console.log(data); 
sendDataFormToZustand(data)
changeForwardScreen()
}

   return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.experience}>
      <FormLabel >Years Of Teaching Experience</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register("experience")}>
        <option>None</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5++</option>
      </Select>
      <FormErrorMessage>{errors.experience && errors.experience.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.aboutMe}>
       <FormLabel >About Me</FormLabel>
       <Textarea borderRadius={"10px"} height={"90px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("aboutMe")} />
       <FormErrorMessage>{errors.aboutMe?.message}</FormErrorMessage> 
       </FormControl>

      <FormControl isInvalid={errors.profilePicture} onChange={handleChange}>
      <FormLabel >Profile Picture</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register("profilePicture")} />
       <Flex justifyContent={"center"} alignItems={"center"} mb={"15px"}>
      <Image src={profilePicture}  />
      </Flex>  
      <FormErrorMessage>{errors.profilePicture && errors.profilePicture.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.newsletter}> 
      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsletter} value={newsletter} mb={"20px"} {...register("newsletter" )}>
        <Stack direction={"row"}>
          <Radio value= "0" >Yes</Radio>
          <Radio value= "1" >No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"}>
      <motion.div whileTap={{scale:0.9}} onClick={changePrevScreen}>
        <Button width={'100%'} colorScheme={`gray`} > Back</Button>
      </motion.div>
        <Button width={'40%'}  colorScheme={`purple`} type={"submit"} > Submit</Button>
      </Container>  
      </form>
      </>
  )
}

export default Tutor
