import express from "express"
import path from "path"
require("dotenv").config()
import expressLayout from "express-ejs-layouts"
//import livereload from "livereload";
//import connectLivereload from "connect-livereload";

import { dbConnect } from "./db/connection.db"
import cors from "cors"

import { mainRouter } from "./route/main.routes"
import { userRouter } from "./route/user.routes";


const app = express()

// 🔥 Setup live reload
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(["views", "public"]);

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// app.use(connectLivereload());


app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(cors())



// Templating engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));


app.use("/", mainRouter)
app.use("/auth", userRouter)

const PORT = 3000  //process.env.PORT 


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))