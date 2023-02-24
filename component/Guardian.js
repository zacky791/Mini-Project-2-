import { Button, Input, FormLabel, FormControl, FormErrorMessage, Container, Select, RadioGroup, Stack, Radio, Image, Flex, VStack, Checkbox, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion"
import useStore from "../util/useStore";
import AddPhotoIcon from '@mui/icons-material/AddAPhoto';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';


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
const {register, handleSubmit, formState: {errors}, control,reset} = useForm({
resolver: yupResolver(schema)
})

const onSubmit = data => {
console.log(data); 
onOpen();
sendDataFormToZustand(data);
}

//for dynamic form
const {fields, append, prepend, remove, swap, move, insert } = useFieldArray({
  control,
  name: "childs", //unique name for field array
})

//for changing screen
const changePrevScreen = useStore((state)=> state.setScreenTo1)
const changeForwScreen = useStore((state)=> state.setScreenTo4)

//for display profile picture
const [profilePicture, setProfilePicture] = useState([])

//for handling loop age
//array.from create a new, shallow-copied Array instance from an iterable or array-like object. so it can be loop (element,index)
const ageOptions = Array.from({ length: 12 }, (_, index) => index + 1);

//for reconfirm form before submit
const { isOpen, onOpen, onClose } = useDisclosure();

//FIXME - debuging on how to remove picture when remove child
const removeChild = (index) => {
  remove(index);
  // setProfilePicture((prevPicture) => prevPicture.filter((_, i) => i !== index));
};

// setProfilePicture((prevPicture) => prevPicture.filter((_, i) => i !== index));


//FIXME - debuging on how to replace photo when uploaded again
const [storePic,useStorePic] = useState([])

const nama = () =>{
  console.log(profilePicture)
}

// useEffect(()=>{
//   if (profilePicture[index]) {
//     const url = URL.createObjectURL(profilePicture[index]);
//     setPreviewImage(url);
//   } else {
//     setPreviewImage(null);
//   }
// }, [profilePicture[index]]);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

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
    <Box key={item.id} maxW={'600px'} w={'full'} bg={"#FEF0D6"} padding={"15px"} boxShadow={'2xl'} rounded={'20px'} overflow={'hidden'} mb={"35px"}>
      <FormControl key={item.id} isInvalid={errors.profilePicture} onChange={(e)=>{
        const presentProfilePicture = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null // the e.target.files[0] ? is use when the user upload the picture but cancel it
        setProfilePicture((prevPicture)=> [...prevPicture, presentProfilePicture]
        )}} mb={"15px"} >

      <Button as="label" htmlFor={`file-input ${index}`} cursor={"pointer"} color={"blue.500"} border={"2px"} borderColor={"blue.500"} width={"100%"} display={"flex"} alignItems={"center"}>
        <AddPhotoIcon style={{marginRight: "8px"}} fontSize="small"/> Upload Picture
      </Button>
      <Input mb={'4px'} id={`file-input ${index}`} type={'file'} focusBorderColor='purple.600' accept=".jpg,.jpeg,.png,.webp" {...register(`childs.${index}.profilePicture`)} style={{ display: "none" }} />
       {/* <Input mb={'4px'} id="file-input" type={'file'}  color={"black"}  focusBorderColor='lime' {...register(`childs.${index}.profilePicture`)} /> */}
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      {/* //FIXME - when upload 2 times it does not replace picture */}
      <Image src={profilePicture?.[index]} borderRadius={"10px"}  />
      </Flex>  

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
      <Button style={({backgroundColor:"red" , color:"white"})} mb={"15px"} onClick={()=>{remove(item)}} mt={"15px"}> <PersonRemoveIcon style={{marginRight: "8px"}}/>  Remove Child</Button>
      </VStack>
      </Box>
        ))}

        <VStack>
       <Button mb={'20px'} onClick={() => append()} width={"100%"} color={"purple.500"} fontWeight={"extrabold"} border={"2px"} borderColor={"purple.500"} > <PersonAddIcon style={{marginRight: "8px"}} fontSize="small"/> Add Child  </Button>
       </VStack> 
    
    <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={changePrevScreen}>
        <Button width={'100%'} colorScheme={`gray`} onClick={resetFields}>Back</Button>
      </motion.div>
        <Button width={'40%'}  colorScheme={`purple`} type={"submit"} >Submit</Button>
    </Container> 
      </form>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt={"260px"}>
          {/* //FIXME - still not the best approach to display different kind of message when the user did not upload the picture */}
          <ModalHeader mt={"20px"}> { profilePicture[0] ? " Are sure the information correct ? " : "Are you sure want default photo picture and the information are correct ?" }</ModalHeader>
          <ModalCloseButton />
    
          <ModalFooter>
            <Button bg='purple.500' color={"white"} mr={"7px"} onClick={changeForwScreen}>
              Yes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Button onClick={()=>{console.log("zakaria kacakkkkk",profilePicture)}}>test</Button> */}
  </>
  )
}

export default Guardian
