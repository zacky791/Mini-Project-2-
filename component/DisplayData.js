import React, { use, useState } from 'react'
import { Button, Container, Flex, Image, Text, Toast, useToast, Heading, Avatar, Box, Center, Stack, useColorModeValue, VStack, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useStore from '../util/useStore';
import { useForm } from 'react-hook-form';


//FIXME - error on preview picture , too many re render !!!

//My first approach for display profile picture
  // const profilePic = getDataFormToZustand.childs[0].profilePicture
  // const changeToBlob = new Blob(profilePic)
  // const ProfilePicBlob = URL.createObjectURL(changeToBlob)
  // const [test, setTest] = useState()

  //The approach itself was correct but it was not dynamically and useState
  // in the return body causing it to rerender so much 

  //First approach for static data
  // Object.entries(getDataFormToZustand).map(([key,value])=>
  // <div>{`${getDataFormToZustand.aboutme}: ${value}`}</div>)


const DisplayData = () => {

  //for changing screen
  const changeScreenToGuardian = useStore((state)=> state.setScreenTo2)
  const changeScreenToTutor = useStore((state)=> state.setScreenTo3)
  const changeScreenForw = useStore((state)=> state.setScreenTo5)

  //reset the form
  const resetFields = useStore((state) => state.resetFields)

  //for display data from form to global state (object data)
  const getDataFormToZustand = useStore((state)=> { 
  console.log(state.formData)
  return state.formData
})

  //for popup
  const toast = useToast()
  
  const popup = () =>{
    toast({
      title:"Form submitted ",
      description: "We has been send you activation email",
      status:"success",
      duration: 2500,
      isClosable: true,
      position: "top",
    })
  }

  //for combine two function so that both triggered when button was click
  const forwardScreenAndPopup = () => {
    popup();
    changeScreenForw();
    resetFields()
  }

  return (
    <>
    { getDataFormToZustand.childs ?
      <VStack>
    <Heading fontSize={"20px"}>{getDataFormToZustand.guardianName} Family 👨‍👩‍👧‍👦 </Heading>
     </VStack> : null 
     }

    { getDataFormToZustand.childs ? getDataFormToZustand.childs.map((data, i) => (
      <>
      {console.log("data from display" , data)}
      <Center py={"20px"}>
      <Box key={data.id} maxW={'270px'} w={'full'} bg={ data.gender !== "Male" ? "yellow.100":"purple.200"} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
        <Image h={'120px'} w={'full'} objectFit={'cover'} src={
            'https://img.freepik.com/premium-vector/cute-lion-tiger-couple-with-love-heart-tail-cartoon-vector-icon-illustration-animal-nature-icon_138676-5003.jpg?w=740'}
        />
        <Flex justify={'center'} mt={"-50px"}>
          <Avatar size={'xl'} src={ data.profilePicture ? URL.createObjectURL(new Blob(data.profilePicture)) : null } alt={'Author'} css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={"26px"}>
          <Stack spacing={0} align={'center'} mb={"20px"}>
            <Text color={'gray.500'} >Name</Text>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {data.name}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={"46px"}>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Age
              </Text>
              <Text fontWeight={600}>{data.age}</Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Gender
              </Text>
              <Text fontWeight={600}>{data.gender}</Text>
            </Stack>
          </Stack>

        </Box>
      </Box>
    </Center>
        
      </>
    )) : 
    <>
    <Center py={"20px"}>
      <Box maxW={'270px'} w={'full'} bg={'white'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
        <Image h={'120px'} w={'full'} objectFit={'cover'} src={
            'https://img.freepik.com/free-vector/cute-crocodile-holding-book-school-cartoon-vector-icon-illustration-animal-education-icon-isolated_138676-4902.jpg?w=740&t=st=1676966366~exp=1676966966~hmac=e4b06a047e7aa46a36de44a3340eeda67da6a12176b1088f4c6725983c39b542'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar size={'xl'} src={URL.createObjectURL(new Blob(getDataFormToZustand.profilePicture))} alt={'Author'} css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={"20px"}>
          <Stack spacing={0} align={'center'} mb={"25px"}>
            <Text color={'gray.500'}>Name</Text>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {getDataFormToZustand.name}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={"16px"} mb={"15px"}>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Years of Experience
              </Text>
              <Text fontWeight={600}>{getDataFormToZustand.experience}</Text>
            </Stack>
          </Stack>

          <Stack spacing={0} align={'center'} mb={"20px"}>
            <Text color={'gray.500'}>About Me</Text>
            <Box>
            <Text fontSize={"small"} fontWeight={500} fontFamily={'body'} wordBreak="break-word">
              {getDataFormToZustand.aboutMe}
            </Text>
            </Box>
          </Stack>

        </Box>
      </Box>
    </Center>
    </>
    }  
    
    <Container display={"flex"} justifyContent={"space-between"} mt={"20px"}>
    <motion.div whileTap={{scale:0.9}} onClick={ getDataFormToZustand.childs ? changeScreenToTutor : changeScreenToGuardian }>
      <Button width={'100%'}  colorScheme={`gray`} > Back</Button>
    </motion.div>
      <Button width={'40%'}  colorScheme={`purple`} onClick={ forwardScreenAndPopup } type={"submit"} > Submit</Button>
    </Container>  
    </>
  )
};


export default DisplayData