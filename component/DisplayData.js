import React, { use, useState } from 'react'
import { Button, Container, Flex, Image, Text, Toast, useToast } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useStore from '../util/useStore';
import ForDataDisplay from './ui/ForDisplayData';

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
    {/* <ForDataDisplay key={index} value={value[index]} /> */}

    { getDataFormToZustand.childs ? getDataFormToZustand.childs.map((data, i) => (
      <>
        <Text>{`Child ${i+1}`}</Text>
        <Text>{`Profile Picture :  `}</Text>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={URL.createObjectURL(new Blob(data.profilePicture))}/>
        </Flex>  
        <Text>{`Name : ${data.name}`}</Text>
        <Text>{`Age : ${data.age}`}</Text>
        <Text>{`Gender : ${data.gender}`}</Text>
        <Text>{`Newsletter : ${data.newsletter}`}</Text>

      </>
    )) : 
    <>
      <Text>Your Form</Text>
      <Text>{`Profile Picture : `}</Text>
      <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={URL.createObjectURL(new Blob(getDataFormToZustand.profilePicture))}/>
      </Flex>  
      <Text>{`Teaching Experience : ${getDataFormToZustand.experience}`}</Text>
      <Text>{`About yourself : ${getDataFormToZustand.aboutMe}`}</Text>
      <Text>{`Newsletter : ${getDataFormToZustand.newsletter}`}</Text>

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