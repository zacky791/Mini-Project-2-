import { Box, Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function FormLabeling ({label,type,requirement, ...props}) {

    const [input,setInput] = useState('')
    const handleInputChange = (event) => setInput(event.target.value)
    const isFalse = input === ''
    
    return(
        <>
        <FormLabel {...props}>{label}</FormLabel>
        <Input value={input} type={type} onChange={handleInputChange} />
        {!isFalse ? (
            <FormHelperText>
                {label} required {requirement}
            </FormHelperText>
        ):(<FormErrorMessage>
            {label} is required
        </FormErrorMessage>)}
        </>
    )
}