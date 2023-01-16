import { employeeData } from "../../../data/employeeData"

export default function handler(req,res) {
    res.status(200).json(employeeData)
}