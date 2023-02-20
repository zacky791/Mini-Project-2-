import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Image, Flex, VStack, Checkbox, Box, } from "@chakra-ui/react"
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";

const Guardian = () => {

//.shape() = change any type into one type only
//.array() = validate array
//.of() = method. for specify schema for each items array ex: array().of(schema)
//.shape() = define structure of object in much details

//validation yup
const schema = yup.object().shape({

parentChildName: yup.string().required("You need to insert parent child name"),

childs: yup.array().of(
  yup.object().shape({
    name: yup.string().required("You need to insert your child name"),
    age: yup.string().required("Age is required"),
    gender: yup.string().required("Gender is required"),
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
const changePrevScreen = useStore((state)=>{ return state.setScreenTo1})
const changeForwScreen = useStore((state)=> state.setScreenTo4)

//for display profile picture
const [profilePicture, setProfilePicture] = useState([])

//for handling loop age
//array.from create a new, shallow-copied Array instance from an iterable or array-like object. so it can be loop (element,index)
const ageOptions = Array.from({ length: 12 }, (_, index) => index + 1);

//test
const [storePic,useStorePic] = useState([])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

    <FormControl isInvalid={errors.parentChildName} mb={"10px"} >
      <FormLabel > Parent Child Name </FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='purple.600' {...register(`parentChildName`)}/>
      <FormErrorMessage>{errors.parentChildName?.message}</FormErrorMessage> 
    </FormControl>

  <Checkbox colorScheme='purple' defaultChecked {...register(`newsletter`)} mb={"15px"}>
    Receive Newsletter
  </Checkbox>
      
    <ul style={{listStyle:"none"}} >
  {fields.map((item, index) => (
    console.log("inside item",item,index),
    <li key={item.id}>
      <FormControl isInvalid={errors.profilePicture} onChange={(e)=>{
        const presentProfilePicture = URL.createObjectURL(e.target.files[0])
        setProfilePicture((prevPicture)=> [...prevPicture, presentProfilePicture]
        )}} >
  
      {/* <Button as="label" htmlFor="file-input" color={"purple.500"} border={"2px"} borderColor={"purple.500"} width={"100%"}>Upload Picture</Button> */}
      {/* <Input mb={'4px'} id="file-input" type={'file'} focusBorderColor='purple.600' accept=".jpg,.jpeg,.png" {...register(`childs.${index}.profilePicture`)} style={{ display: "none" }} 
      onChange={(e)=>{ 
        const file = e.target.value
        useStorePic((pastData)=> [...pastData,file])
        console.log("dalam event", e , "dalam newdata" , storePic , "dalam file",file)
      }}
      /> */}
       <Input mb={'4px'} id="file-input" type={'file'}  color={"black"}  focusBorderColor='lime' {...register(`childs.${index}.profilePicture`)} />
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src={profilePicture?.[index]} borderRadius={"10px"} />
      </Flex>  

      <FormControl isInvalid={errors.childs?.[index]?.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='purple.600' {...register(`childs.${index}.name`)}/>
      <FormErrorMessage>{errors.childs?.[index]?.name?.message}</FormErrorMessage> 
      </FormControl>

      <Flex justifyContent={"space-between"}>
      <FormControl isInvalid={errors.childs?.[index]?.age} width={"190px"} >
      <FormLabel >Age</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register(`childs.${index}.age`)} placeholder={"select"} focusBorderColor='purple.600'>
      {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{errors.childs?.[index]?.age?.message}</FormErrorMessage> 
      </FormControl>
      
      <FormControl isInvalid={errors.childs?.[index]?.gender} mb={"20px"} width={"190px"}>
      <FormLabel >Monkey</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} {...register(`childs.${index}.gender`)}placeholder={"select"} focusBorderColor='purple.600'>
        <option>Male</option>
        <option>Female</option>
      </Select>
      <FormErrorMessage>{errors.childs?.[index]?.gender?.message}</FormErrorMessage> 
      </FormControl>
      </Flex>

      <Button style={({backgroundColor:"red" , color:"white"})} mb={"15px"} onClick={() => remove(index)}>Delete</Button>
          </li>
        ))}
        <VStack>
       <Button mb={'20px'} onClick={() => append()} width={"100%"} color={"purple.500"} fontWeight={"extrabold"} border={"2px"} borderColor={"purple.500"} >Add Child</Button>
       </VStack> 
    </ul>
    
    <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={changePrevScreen}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`}>Back</Button>
      </motion.div>
        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}>Submit</Button>
    </Container> 
      
      </form>
  </>
  )
}

export default Guardian
