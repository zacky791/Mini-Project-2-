import React from 'react'
import { Button, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useStore from '../util/useStore';

const DisplayData = () => {

  //for changing screen
  const changeScreenPrev = useStore((state)=> state.setScreen4to2)
  const changeScreenForw = useStore((state)=> state.setScreen4to5)
  
  //for display data from form to global state (object data)
  const getDataFormToZustand = useStore((state)=> { console.log(state.formData)
    return state.formData})

  return (
    <>
    {Object.entries(getDataFormToZustand).map(([key,value])=>
    <div>{`${key}: ${value}`}</div>
    )}

    <Container display={"flex"} justifyContent={"space-between"} mt={"20px"}>
    <motion.div whileTap={{scale:0.9}} onClick={changeScreenPrev}>
      <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
    </motion.div>
      <Button width={'40%'}  colorScheme={`purple`} onClick={changeScreenForw} > Submit</Button>
    </Container>  
    </>
  )
}

export default DisplayData
