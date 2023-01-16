import { useState } from "react"
import { Button } from "@chakra-ui/react"

export default function handler () {
    const [showData,setShowData] = useState([])
    
    const fetchData = async() =>{
        const response = await fetch("/api/employee")
        const data = await response.json()
        setShowData(data)
    }

    return(
        <>
        <Button onClick={fetchData}>Show Employee Data</Button>
        {showData.map((data)=>{
            return(
                <div id={data.id}>
                    {data.name}{data.age}
                </div>
            )
        })}
        </>
    )
}
