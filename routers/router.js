import {Router} from "express"
import {createPatient} from '../controllers/patient.js'

export const patientRouter = Router()
patientRouter.post("", createPatient),get("",(req,res)=>res.send(req.body))