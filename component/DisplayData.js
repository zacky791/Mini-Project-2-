import React from 'react'

const DisplayData = () => {
  return (
    <>
    {Object.entries(values).map(([key,value])=>
    <div>{`${key}: ${value}`}</div>
    )}
    {/* <ChakraNextLinkButton href={"/"}>Go back</ChakraNextLinkButton>
    <Button >Submit</Button> */}

    <Container display={"flex"} justifyContent={"space-between"} mt={"20px"}>
    <motion.div whileTap={{scale:0.9}} onClick={()=>{setScreen(1)}}>
      <Button width={'100%'} type={"submit"}  colorScheme={`gray`} > Back</Button>
    </motion.div>

      <Button width={'40%'}  colorScheme={`purple`} onClick={()=>{setScreen(5)}} > Submit</Button>

    </Container>  
    </>
  )
}

export default DisplayData
