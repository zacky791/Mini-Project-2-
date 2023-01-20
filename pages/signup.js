import { Box,Button, Input, InputGroup, InputRightElement, VStack, Text, FormLabel, FormControl, FormErrorMessage, useColorModeValue, Container, Img, Select, RadioGroup, Stack, Radio, Textarea, Image, Flex, Center } from "@chakra-ui/react"
import Footer from "../component/Footer"
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Header from "../component/Navbar"
import { motion } from "framer-motion"
import ChakraNextLinkButton from "../component/ui/Button";

export default function page () {

  //for dark mode
  const formBackgroundButton = useColorModeValue('purple.100' , 'purple.500')

  //use to display
  const [active,setActive] = useState(0)

  //change background image
  const changeBackgroundImage = () => {
  if (active === 0){
    return ("/assets/dino.jpg")
  } else if (active === 1) {
    return ("/assets/bear.jpg")
  } else if (active ===2 ) {
    return ("/assets/animal3.jpg")
  } else if (active ===3 ) {
    return ("/assets/forest1.jpg")
  } else if (active ===4 ) {
    return ("/assets/congrat3.jpg")
  } else if (active ===5 ) {
    return ("/assets/congrat3.jpg")
  } }

  const {register, handleSubmit, formState: {errors}, getValues } = useForm()

  const values = getValues();

  //display data 
  const methods = useForm();
  const onSubmit = data =>{
    console.log(data); 
    
    if(active === 0){
      setActive(1)
    } else if (active === 2,3){
      setActive(4)
    }
  }
  
  //for display picture
  const [file, setFile] = useState()

  //for subsribe newsletter
  const [newsLetter, setNewsLetter] = React.useState('0')


  //for showing password
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  //for display preview image
  function handleChange(e) {
     console.log(e.target.files);
     setFile(URL.createObjectURL(e.target.files[0]));
  }
  

  return(
    <>
    <Box bgImage={changeBackgroundImage} bgSize={'100%'} >  
    <Header/>
    <Box bg={formBackgroundButton} borderRadius={"10px"} mb={"195px"} padding={'20px'}  borderWidth={'1px'} mt={'100px'} maxW={'500px'} mx={"auto"} display={'flex'} flexDirection={'column'}   >
      <VStack>
           <Text as='u' fontWeight={'bold'} fontSize={'30px'} mb={"10px"}>Sign Up</Text>
      </VStack> 


   <form onSubmit={handleSubmit(onSubmit)}>

      {/* //signup homepage */}

      { active === 0 && <>

    <FormControl isInvalid={errors.username}>
        <FormLabel >Username</FormLabel>
      <Input mb={'4px'} type={'text'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("username", { 
          required: "Please insert your Username"
      })} />
      <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.email}>
      <FormLabel >Email</FormLabel>
      <Input mb={'4px'} type={'email'} bg={'white'} color={"black"} focusBorderColor='lime' {...register("email", { 
        required: "Please insert your Email", 
        // pattern: { value: /[A-Z]+[a-zA-Z0-9_.+]+[@][a-z]+[\.][a-zA-Z0-9-.]{2,3}/, 
        // message: 'Email required upper case and (@.)' }
        
      })} />
      <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage> 
      </FormControl>
      

      <FormControl isInvalid={errors.password} mb={'10px'}>
      <FormLabel >Password</FormLabel>
      <InputGroup size={'md'} mb={'5px'}>
      <Input 
        bg={'white'} 
        color={"black"}
        pr={"10px"}
        type={show ? 'text' : 'password'}
        focusBorderColor={'lime'}
        {...register("password", { required: "Please insert your password", 
        minLength: { value: 4 , message: 'Password too short !' },
        maxLength: { value: 15 , message: 'Password too long !' }
      })}
      />
        
      <InputRightElement width={'80px'}>
        <Button bg={"purple.100"} h={'27px'} size={'sm'} onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
        <FormErrorMessage mb={'10px'}>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>

      <motion.div whileTap={{scale:0.9}}>
        <Button width={'100%'}  colorScheme={`purple`} type={"submit"}  > Next </Button>
        </motion.div>  
      </>
      }

      {/* Roles to pick */}

      { active === 1 && 
          <Container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
          <Box padding={"10px"} textAlign={"center"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"} fontStyle={"italic"}>Tutor</Text>
          <Text mb={"10px"}>This section is for a person who want to register as a teacher </Text>
            <Img src={"/assets/leonfighting.PNG"}  borderRadius={"10px"} height={"188px"} width={"400px"} onClick={()=>{setActive(2)}} />
          </Box>
          <Box  padding={"10px"} textAlign={"center"}>
          <Text mb={"5px"} fontSize={"16px"} fontWeight={"bold"} fontStyle={"italic"}>Guardian</Text>
          <Text mb={"10px"}>This section is for a parent who want to register their son </Text>
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 100 }}> 
            <Img src={"/assets/leongame.PNG"} borderRadius={"10px"} height={"188px"} width={"400px"} onClick={()=>{setActive(3)}}/>
          </motion.a>
          </Box>
          </Container> 
      }

        {/* Tutor */}

      { active === 2 && <>
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
      <Image src={file}  />
      </Flex>  
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <FormControl isInvalid={errors.newsLetter}>
      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsLetter} value={newsLetter} mb={"20px"} {...register("newsletter" )}>
        <Stack direction={"row"}>
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setActive(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"} > Submit</Button>

      </Container>  </>
      }

      {/* Guardian */}

      { active === 3 &&  <>
    <FormControl isInvalid={errors.profilepic} onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]))}} >
    <FormLabel >Profile Picture</FormLabel>
      <Input mb={'4px'} type={'file'}  color={"black"}  focusBorderColor='lime' {...register("profilepic", { 
        required: "Please insert your profile picture"
      })} />
      <FormErrorMessage>{errors.profilepic && errors.profilepic.message}</FormErrorMessage> 
      </FormControl>

      <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src={file}  />
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
      <FormLabel >Do You Want To Receive Newsletter</FormLabel>
      <RadioGroup onChange={setNewsLetter} value={newsLetter} mb={"20px"}>
        <Stack direction={"row"}>
          <Radio value='0'>Yes</Radio>
          <Radio value='1'>No</Radio>
        </Stack>
      </RadioGroup>
      </FormControl>

      <Container display={"flex"} justifyContent={"space-between"} alignItems={""}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setActive(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} type={"submit"}  > Submit</Button>

      </Container> 

  </> }

    {/* information area */}

    { active === 4 && 
      <>
      {Object.entries(values).map(([key,value])=>
      <div>{`${key}: ${value}`}</div>
      )}
      {/* <ChakraNextLinkButton href={"/"}>Go back</ChakraNextLinkButton>
      <Button >Submit</Button> */}

      <Container display={"flex"} justifyContent={"space-between"} mt={"20px"}>
      <motion.div whileTap={{scale:0.9}} onClick={()=>{setActive(1)}}>
        <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
      </motion.div>

        <Button width={'40%'}  colorScheme={`purple`} onClick={()=>{setActive(5)}} > Submit</Button>

      </Container>  
      </>
    }

    { active === 5 && 
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
