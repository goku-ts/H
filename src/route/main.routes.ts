import express from "express"


export const mainRouter = express.Router()

import { DATA } from "../data"

const data = DATA[1]


mainRouter.get("/", (req, res) => {
    const homeData = {
        doctors: data.doctors.length,
        patients: data.patients.length,
        appointments: data.appointments.length,
    }
    res.render("index", { homeData })
})


mainRouter.get("/doctors", (req, res) => {
    const doctors = data.doctors
    res.render("doctors", { doctors })
})

mainRouter.get("/doctor/:id", (req, res) => {
    const { id } = req.params
    const doctor = data.doctors.find((doctor) => doctor.id === Number(id))
    res.render("doctor-details", { doctor })
})

mainRouter.get("/patients", (req, res) => {
    const patients = data.patients
    res.render("patients", { patients })
})

mainRouter.get("/patient/:id", (req, res) => {
    const { id } = req.params
    const patient = data.patients.find((patient) => patient.id === Number(id))
    res.render("patient-details", { patient })
})

mainRouter.get("/appointments", (req, res) => {
    const appointments = data.appointments

    res.render("appointments", { appointments })
})

mainRouter.get("/appointment/:id", (req, res) => {
    const { id } = req.params
    const appointment = data.appointments.find((appointment) => appointment.id === Number(id))
    res.render("appointment-details", { appointment })
})


