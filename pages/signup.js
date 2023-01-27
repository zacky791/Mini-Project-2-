import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import Footer from "../component/Footer"
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Header from "../component/Navbar"
import { motion } from "framer-motion"
import ChakraNextLinkButton from "../component/ui/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import SignUpForm from "../component/SignUpForm";
import RolesToPick from "../component/RolesToPick";
import Tutor from "../component/Tutor";
import Guardian from "../component/Guardian";
import DisplayData from "../component/DisplayData";

export default function page () {

  //Mistake for this project for improvement
  // 1. Needed to compress the pic and vid (10mb) to svg or .webp since it fall under 
  // public folder so its bad for user to download large folder and optimization 
  // 2. detail the name of variable so that other developer understand
  // 3. dont forget to delete unnecessary code (use anchor to avoid this mistake)
  // 4. it was better to minimize the code by using data structure
  // 5. changing the html element itself was a bad approach unless it was a last resort
  // 6. accesibility very crucial so need to chnage pic into button so that person can use tab
  // 7. call for action - for example description of "Click here to go this section"
  // 8. code splitting lead to code readbility, code optimization , easy to maintain 
  // 9. The correct approach is make sure code it self work first ! then can proceed for optimization
  // 10. please be consistent using camel case 
  // 11. error indeed must be very specific for ex : description too short , min character 5
  // 12. do not center paragraph , let it be left side 
  // 13. avoid doing to much stylish 
  // 14. follow the visual refference company pdf
  // 15. be specific towards the handler for ex this handler handle what ?

  // mistake not improve yet 6,8,11,14,15 !!! 
  // nak guna variable global must split the useform into 3 part then combine it 
  // schema must also divided into 3 part 
  // the dynamic platform from react hook form documentation 

  //use to changing main screen
  const [screen,setScreen] = useState(1)
  
  //for dark mode
  const formBackground = useColorModeValue('purple.100' , 'purple.500')

  //change background image
  const backgroundImage = ["/assets/dino.webp","/assets/bear.webp","/assets/animal3.webp","/assets/forest1.webp","/assets/congrat3.webp","/assets/congrat3.webp"]
  const changeBackgroundImage = () => {
  return backgroundImage[screen] }

    //validation yup
const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8,"password too short"),
  // age: yup.number().positive().integer().required(),
}).required();

  //react hook form
  const {register, handleSubmit, formState: {errors}, getValues } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data =>{
    console.log(data); 

  //this for action after pass the validation (it will change screen)
  screen === 0 ? setScreen(1) : setScreen(4)
  }
  
  //use to display all the value that has been insert on page information area 
  const values = getValues();
  
  //for subsribe newsletter
  //FIXME - testing true or false
  const [newsletter, setNewsletter] = useState('0')
  
  //for showing password
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)
  
  //for display profile picture
  const [profilePicture, setProfilePicture] = useState()

  //for display preview image
  function handleChange(e) {
     console.log(e.target.files);
     setProfilePicture(URL.createObjectURL(e.target.files[0]));
  }

  return(
    <>
    <Box bgImage={changeBackgroundImage} bgSize={'100%'} >  
    <Header/>
    <Box bg={formBackground} borderRadius={"10px"} mb={"195px"} padding={'40px'}  borderWidth={'1px'} mt={'100px'} maxW={'500px'} mx={"auto"} display={'flex'} flexDirection={'column'}   >
      <VStack>
           <Text fontWeight={'bold'} fontSize={'30px'} mb={"10px"}>Sign Up</Text>
      </VStack> 


   <form onSubmit={handleSubmit(onSubmit)}>

      { screen === 0 && <SignUpForm/>}

      { screen === 1 &&     <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Tutor</Text>
          <Text mb={"10px"}>Click this picture for a person who want to register as a teacher </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leonfighting.webp"}  borderRadius={"10px"} height={"188px"} width={"400px"} onClick={()=>{setScreen(2)}} />
          </motion.div>
          </Box>

          <Box width={"500px"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"}>Guardian</Text>
          <Text mb={"10px"}>Click this picture for a parent who want to register their son </Text>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{cursor:"pointer"}}> 
            <Img src={"/assets/leongame.webp"} borderRadius={"10px"} height={"188px"} width={"470px"} onClick={()=>{setScreen(3)}}/>
          </motion.div>
          </Box>
    </Container> }

      { screen === 2 && <Tutor/>}

      { screen === 3 &&  <Guardian/> }

    { screen === 4 && <DisplayData/>}

    { screen === 5 && 
    <>
    <Text textAlign={"center"} fontWeight={"bold"} mb={"15px"}>Thank you for register under the CIC company 💕💖<br/>An activation link has been sent to their email 📧 </Text>
    <Center>
    <motion.div whileTap={{scale:0.9}} >
        <ChakraNextLinkButton href={"/"} colorScheme={"purple"}>Welcome</ChakraNextLinkButton>
    </motion.div>
    </Center>
    </>}
      </form>

        </Box>
    <Footer/>
    </Box>
    </>
  )
}
