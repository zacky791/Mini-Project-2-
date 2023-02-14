import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Image, Flex, } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";

const Guardian = () => {

//.shape() = change any type into one type only
//.array() = validate array
//.of() = method. for specify schema for each items array ex: array().of(schema)
//.shape() = define structure of object in much details

//validation yup
const schema = yup.object().shape({
childs: yup.array().of(
  yup.object().shape({
    name: yup.string().required("You need to insert your name"),
    age: yup.number().positive().integer().typeError('Age must be a valid number.').required("you need to insert your age"),
    profilePicture: yup.mixed().test(
      "profilePicture",
      "Your need to upload picture and the file must be not exceed 5MB",
      (value)=>{ 
        return value && value[0] && !!value[0].size ? value[0].size <= 5000000 : true
  }
)})),
}).required();

//for insert the data from form to global state (object data)
const sendDataFormToZustand = useStore((state)=> state.setFormData)

//react hook form
const {register, handleSubmit, formState: {errors}, control} = useForm({
resolver: yupResolver(schema)
})

const onSubmit = data =>{
console.log(data); 
sendDataFormToZustand(data)
changeForwScreen()
}

//for dynamic form
const {fields, append, prepend, remove, swap, move, insert } = useFieldArray({
  control,
  name: "childs", //unique name for field array
})

//for changing screen
const changePrevScreen = useStore((state)=>{ return state.setScreen3to1})
const changeForwScreen = useStore((state)=> state.setScreen3to4)

//for display profile picture
const [profilePicture, setProfilePicture] = useState([])

//for display preview image
function handleChange(e) {
console.log(e.target.files);
setProfilePicture(URL.createObjectURL(e.target.files[0]));
}

//for subsribe newsletter
//FIXME - testing true or false
const [newsletter, setNewsletter] = useState("yes")

const handler = (e) => {
  setNewsletter(e),
  console.log('Zack',e)
}

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      
    <ul>
  {fields.map((item, index) => (
    console.log("inside item",item,index),
    <li key={item.id}>
      <FormControl isInvalid={errors.profilePicture} onChange={(e)=>{
        const presentProfilePicture = URL.createObjectURL(e.target.files[0])
        setProfilePicture((prevPicture)=> [...prevPicture, presentProfilePicture]
        )}} >
      <FormLabel>Insert your picture </FormLabel>
      <Input mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register(`childs.${index}.profilePicture`)} />
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src={profilePicture?.[index]}  />
      </Flex>  

      <FormControl isInvalid={errors.childs?.[index]?.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register(`childs.${index}.name`)}/>
      <FormErrorMessage>{errors.childs?.[index]?.name?.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.childs?.[index]?.age} >
      <FormLabel >Age</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'number'} bg={'white'} color={"black"} focusBorderColor='lime' {...register(`childs.${index}.age`)}/>
      <FormErrorMessage>{errors.childs?.[index]?.age?.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.gender} mb={"20px"}>
      <FormLabel >Gender</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register(`childs.${index}.gender`)}>
        <option>Male</option>
        <option>Female</option>
      </Select>
      <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage> 
      </FormControl>

      <FormControl >
      <FormLabel >Receive Newsletter</FormLabel>
      <RadioGroup onChange={handler} mb={"20px"}  focusBorderColor='lime' {...register(`childs.${index}.newsletter`)} >
        <Stack direction={"row"}>
          //FIXME - Try using booeleon 
          <Radio value={"yes"}>Yes</Radio>
          <Radio value={"no"}>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Button style={({backgroundColor:"red" , color:"white"})} mb={"15px"} onClick={() => remove(index)}>Delete</Button>
          </li>
        ))}
       <Button mb={'20px'} onClick={() => append()}>AddUser</Button>
    </ul>
    <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={changePrevScreen}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>
        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}  > Submit</Button>
      </Container> 
      
      </form>
  </>
  )
}

export default Guardian
