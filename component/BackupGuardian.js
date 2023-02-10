import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Image, Flex, } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";

const Guardian = () => {

//validation yup
const schema = yup.object({
name: yup.string().required("You need to insert your name"),
age: yup.number().positive().integer().required("you need to insert your age"),
profilepic: yup.mixed().test(
  "profilepic",
  "Your need to upload picture and the file must be not exceed 5MB",
  (value)=>{ 
    return value[0] && !!value[0].size ? value[0].size <= 5000000 : true
  }
),
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
  name: "cart", //for initial value must be mathcing with default values
  profilePicture: ""
})

//for changing screen
const changePrevScreen = useStore((state)=>{ return state.setScreen3to1})
const changeForwScreen = useStore((state)=> state.setScreen3to4)

//for display profile picture
const [profilePicture, setProfilePicture] = useState()

//for display preview image
function handleChange(e) {
console.log(e.target.files);
setProfilePicture(URL.createObjectURL(e.target.files[0]));
}

const zack = [1,2,3]

//for subsribe newsletter
//FIXME - testing true or false
const [newsletter, setNewsletter] = useState('0')

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      
    <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`cart.${index}.firstName`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`cart.${index}.lastName`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))} <button
        type="button"
        onClick={() => append({ firstName: "Insert firstname", lastName: "Insert lastname" })}
      >
        AddUser
      </button>
      <input type="submit" />
    </ul>
    <FormControl isInvalid={errors.profilepic} onChange={(e)=>{setProfilePicture(URL.createObjectURL(e.target.files[0]))}} >
    <FormLabel >Profile Picture</FormLabel>
      <Input mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register("profilepic")} />
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src={profilePicture}  />
      </Flex>  

      <FormControl isInvalid={errors.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("name")}/>
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.age} >
      <FormLabel >Age</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'number'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("age")}/>
      <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.gender} mb={"20px"}>
      <FormLabel >Gender</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register("gender")}>
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
