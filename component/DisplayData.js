import React, { use, useState } from 'react'
import { Button, Container, Flex, Image, Text, Toast, useToast, Heading, Avatar, Box, Center, Stack, useColorModeValue, VStack, } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useStore from '../util/useStore';


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
  const changeScreenPrev = useStore((state)=> state.setScreenTo3)
  const changeScreenForw = useStore((state)=> state.setScreenTo5)

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
    popup(),
    changeScreenForw()
  }

  return (
    <>
    { getDataFormToZustand.childs ?
      <VStack>
    <Heading>{getDataFormToZustand.parentChildName} Family</Heading>
     </VStack> : null 
     }

    { getDataFormToZustand.childs ? getDataFormToZustand.childs.map((data, i) => (
      <>
      <Center py={6}>
      <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
        <Image h={'120px'} w={'full'} objectFit={'cover'} src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar size={'xl'} src={URL.createObjectURL(new Blob(data.profilePicture))} alt={'Author'} css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {data.name}
            </Heading>
            <Text color={'gray.500'}>Name</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{data.age}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Age
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{data.gender}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Gender
              </Text>
            </Stack>
          </Stack>

          <Button w={'full'} mt={8} bg={useColorModeValue('purple.500', 'gray.900')} color={'white'} rounded={'md'} _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Center>



        {/* <Text>{`Child ${i+1}`}</Text>
        <Text>{`Profile Picture :  `}</Text>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={URL.createObjectURL(new Blob(data.profilePicture))} borderRadius={"10px"} boxSize='250px'/>
        </Flex>  
        <Text>{`Name : ${data.name}`}</Text>
        <Text>{`Age : ${data.age}`}</Text>
        <Text>{`Gender : ${data.gender}`}</Text> */}
        
      </>
    )) : 
    <>
    <Center py={6}>
      <Box maxW={'270px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
        <Image h={'120px'} w={'full'} objectFit={'cover'} src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar size={'xl'} src={URL.createObjectURL(new Blob(getDataFormToZustand.profilePicture))} alt={'Author'} css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Text color={'gray.500'}>Name</Text>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {getDataFormToZustand.name}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6} mb={4}>
            <Stack spacing={0} align={'center'}>
              <Text fontSize={'sm'} color={'gray.500'}>
                Years of Experience
              </Text>
              <Text fontWeight={600}>{getDataFormToZustand.experience}</Text>
            </Stack>
          </Stack>

          <Stack spacing={0} align={'center'} mb={5}>
            <Text color={'gray.500'}>About Me</Text>
            <Text fontSize={"small"} fontWeight={500} fontFamily={'body'}>
              {getDataFormToZustand.aboutMe}
            </Text>
          </Stack>

          {/* <Button w={'full'} mt={8} bg={useColorModeValue('purple.500', 'gray.900')} color={'white'} rounded={'md'} _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Confirm
          </Button> */}
        </Box>
      </Box>
    </Center>

      {/* <Text>Your Form</Text>
      <Text>{`Profile Picture : `}</Text>
      <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={URL.createObjectURL(new Blob(getDataFormToZustand.profilePicture))}/>
      </Flex>  
      <Text>{`Teaching Experience : ${getDataFormToZustand.experience}`}</Text>
      <Text>{`About yourself : ${getDataFormToZustand.aboutMe}`}</Text>
      <Text>{`Newsletter : ${getDataFormToZustand.newsletter}`}</Text> */}

    </>
    }  
    
    <Container display={"flex"} justifyContent={"space-between"} mt={"20px"}>
    <motion.div whileTap={{scale:0.9}} onClick={changeScreenPrev}>
      <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
    </motion.div>
      <Button width={'40%'}  colorScheme={`purple`} onClick={ forwardScreenAndPopup } > Submit</Button>
    </Container>  
    </>
  )
};


export default DisplayData