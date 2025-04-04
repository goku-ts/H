import express from "express"
import { DATA } from "../data"


const data = DATA[0]
const data_1 = DATA[1]


export const userRouter = express.Router()

const adminLayout = "../views/auth/layouts/auth.ejs"
userRouter.get("/admin", (req, res) => {
    res.render("auth/index", { layout: adminLayout })
})


userRouter.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple hardcoded check (replace with real auth)
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});