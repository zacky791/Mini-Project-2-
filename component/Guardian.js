import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Image, Flex, VStack, Checkbox, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";
import AddPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';


const Guardian = () => {

//.shape() = change any type into one type only
//.array() = validate array
//.of() = method. for specify schema for each items array ex: array().of(schema)
//.shape() = define structure of object in much details

//validation yup
const schema = yup.object().shape({

guardianName: yup.string().required("Please insert your name"),

childs: yup.array().of(
  yup.object().shape({
    name: yup.string().required("Please insert child name"),
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

//reset the form
const resetFields = useStore((state) => state.resetFields)

//react hook form
const {register, handleSubmit, formState: {errors}, control,reset, setValue, getValues ,watch} = useForm({
resolver: yupResolver(schema)
})

const onSubmit = data => {
console.log(data); 
onOpen();
sendDataFormToZustand(data);
checkPictures()
}

//for dynamic form
const {fields, append, prepend, remove, swap, move, insert } = useFieldArray({
  control,
  name: "childs", //unique name for field array
})

//for changing screen
const changePrevScreen = useStore((state)=> state.setScreenTo1)
const changeForwScreen = useStore((state)=> state.setScreenTo4)

//for handling loop age
//array.from create a new, shallow-copied Array instance from an iterable or array-like object. so it can be loop (element,index)
const ageOptions = Array.from({ length: 12 }, (_, index) => index + 1);

//for reconfirm form before submit
const { isOpen, onOpen, onClose } = useDisclosure();

//get value for profile picture
const getValueProfilePic= (index) => getValues(`childs.${index}.profilePicture[0]`)

// changes can be detect and control
const pic = (index) =>{
  return(
   watch(`childs.${index}.profilePicture`),
   null //NOTE - put null so that not return error message for returning object
   )}

//handle error message for user does not upload dp picture
const [error,setError]=useState()

const checkPictures = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!getValueProfilePic(i)) {
      setError(false);
      return;
    }
  }
  setError(true);
}

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >

    <FormControl isInvalid={errors.guardianName} mb={"10px"} >
      <FormLabel > Name </FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='purple.600' {...register(`guardianName`)}/>
      <FormErrorMessage>{errors.guardianName?.message}</FormErrorMessage> 
    </FormControl>

  <Checkbox colorScheme='purple' defaultChecked {...register(`newsletter`)} mb={"15px"}>
    Receive Newsletter
  </Checkbox>
      
  
  {fields.map((item, index) => (
    console.log("inside item",item,index),
    <Box key={item.id} maxW={'600px'} w={'full'} 
    bg={"#FEF0D6"}
     padding={"15px"} boxShadow={'2xl'} rounded={'20px'} overflow={'hidden'} mb={"35px"}>
      <FormControl key={item.id} isInvalid={errors.profilePicture} mb={"15px"}  >

      <Button style={{ display: getValueProfilePic(index) ? "none" : ""}} onClick={pic(index)} as="label" htmlFor={`file-input ${index}`} cursor={"pointer"} color={"blue.500"} border={"2px"} borderColor={"blue.500"} width={"100%"} display={"flex"} alignItems={"center"}>
        <AddPhotoIcon style={{marginRight: "8px"}} fontSize="small"/> Upload Picture
      </Button>
      <Input mb={'4px'} id={`file-input ${index}`} type={'file'} focusBorderColor='purple.600' accept=".jpg,.jpeg,.png,.webp" {...register(`childs.${index}.profilePicture`)} style={{ display: "none" }}
      
      // onChange={(e)=>{
      //   // const presentProfilePicture = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null // the e.target.files[0] ? is use when the user upload the picture but cancel it
      //   // setProfilePicture((prevPicture)=> [...prevPicture, presentProfilePicture]
      //   setValue(`childs.${index}.profilePicture`, e.target.files[0])
      //   }}
        />
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"} mb={"16px"}>
      <Image
      src={getValueProfilePic(index) ? URL.createObjectURL(getValues(`childs.${index}.profilePicture[0]`)) : null }
      borderRadius={"10px"}  />
      </Flex>  

      <Button style={{ display: getValueProfilePic(index) ? "" : "none"}} as="label" onClick={()=>{
        setValue(`childs.${index}.profilePicture`, null)
      }} cursor={"pointer"} color={"red.500"} border={"2px"} borderColor={"red.500"} width={"100%"} display={"flex"} alignItems={"center"}>
        <NoPhotographyIcon style={{marginRight: "8px"}} fontSize="small"/> Remove profile picture
      </Button>

      <FormControl isInvalid={errors.childs?.[index]?.name} >
      <FormLabel >Name</FormLabel>
      <Input borderRadius={"10px"} mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='purple.600' {...register(`childs.${index}.name`)}/>
      <FormErrorMessage>{errors.childs?.[index]?.name?.message}</FormErrorMessage> 
      </FormControl>

      <Flex justifyContent={"space-between"}>
      <FormControl isInvalid={errors.childs?.[index]?.age} width={"190px"} >
      <FormLabel >Age</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} cursor={"pointer"} {...register(`childs.${index}.age`)} placeholder={"select"} focusBorderColor='purple.600'>
      {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{errors.childs?.[index]?.age?.message}</FormErrorMessage> 
      </FormControl>
      
      <FormControl isInvalid={errors.childs?.[index]?.gender} mb={"20px"} width={"190px"}>
      <FormLabel >Gender</FormLabel>
      <Select bg={"white"} borderRadius={"10px"} cursor={"pointer"} {...register(`childs.${index}.gender`)}placeholder={"select"} focusBorderColor='purple.600'>
        <option>Male</option>
        <option>Female</option>
      </Select>
      <FormErrorMessage>{errors.childs?.[index]?.gender?.message}</FormErrorMessage> 
      </FormControl>
      </Flex>

      <VStack>
      <Button style={({backgroundColor:"red" , color:"white"})} mb={"15px"} onClick={()=>{remove(index)}} mt={"15px"}> <PersonRemoveIcon style={{marginRight: "8px"}}/>  Remove Child</Button>
      </VStack>
      </Box>
        ))}

        <VStack>
       <Button mb={'20px'} onClick={() => append()} width={"100%"} color={"purple.500"} fontWeight={"extrabold"} border={"2px"} borderColor={"purple.500"} > <PersonAddIcon style={{marginRight: "8px"}} fontSize="small"/> Add Child  </Button>
       </VStack> 
    
    <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={changePrevScreen}>
        <Button width={'100%'}  colorScheme={`gray`} onClick={resetFields}>Back</Button>
      </motion.div>
        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}>Submit</Button>
    </Container> 
      </form>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt={"260px"}>
          <ModalHeader mt={"20px"}> { error ? "Confirmation information" : "Detected default photo" }</ModalHeader>
          <ModalBody>
            <Text>{ error ? "Are information inserted correct ? " : "Are you sure want default photo picture and the information inserted are correct ?" }</Text>
          </ModalBody>
          <ModalCloseButton />
    
          <ModalFooter>
            <Button bg='purple.500' color={"white"} mr={"7px"} onClick={changeForwScreen} _hover={{ bg: "purple.400" }} >
              Yes
            </Button>
            <Button onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

  </>
  )
}

export default Guardian
