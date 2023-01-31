import { Box, VStack, Text, useColorModeValue, Center } from "@chakra-ui/react"
import Footer from "../component/Footer"
import React from "react";
import Header from "../component/Navbar"
import SignUpForm from "../component/SignUpForm";
import RolesToPick from "../component/RolesToPick";
import Tutor from "../component/Tutor";
import Guardian from "../component/Guardian";
import DisplayData from "../component/DisplayData";
import useStore from "../util/useStore";
import ThankYouForm from "../component/thankYouForm";

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
  // 16. Hook must be called inside the componenet
  // 17. Everytime using arrow function and wrapped with function body {} its needed return statement

  //TODO - 
  // mistake not improve yet 6,11,14 !!! 
  // to display all the input using zustand as global state 
  // the dynamic platform that can add children from react hook form documentation 
  // send activation link to email
  // change image(roles to pick) to button

  const screen = useStore((state)=> state.screen)
  
  //for dark mode
  const formBackground = useColorModeValue('purple.100' , 'purple.500')

  //change background image
  const backgroundImage = ["/assets/dino.webp","/assets/bear.webp","/assets/animal3.webp","/assets/forest1.webp","/assets/congrat3.webp","/assets/congrat3.webp"]
  const changeBackgroundImage = () => {
  return backgroundImage[screen] }
  
  return(
    <>
    <Box bgImage={changeBackgroundImage} bgSize={'100%'} >  
    <Header/>
    <Box bg={formBackground} borderRadius={"10px"} mb={"195px"} padding={'40px'}  borderWidth={'1px'} mt={'100px'} maxW={'500px'} mx={"auto"} display={'flex'} flexDirection={'column'}   >
      <VStack>
           <Text fontWeight={'bold'} fontSize={'30px'} mb={"10px"}>Sign Up</Text>
      </VStack> 
      { screen === 0 && <SignUpForm/>}

      { screen === 1 &&  <RolesToPick/> }

      { screen === 2 && <Tutor/>}

      { screen === 3 &&  <Guardian/> }

      { screen === 4 && <DisplayData/>}

      { screen === 5 && <ThankYouForm/>}
        </Box>
    <Footer/>
    </Box>
    </>
  )
}
