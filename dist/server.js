"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require("dotenv").config();
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var cors_1 = __importDefault(require("cors"));
var main_routes_1 = require("./route/main.routes");
var user_routes_1 = require("./route/user.routes");
var app = (0, express_1.default)();
// 🔥 Setup live reload
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(["views", "public"]);
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// app.use(connectLivereload());
app.use(express_1.default.static(__dirname + '/public'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Templating engine
app.use(express_ejs_layouts_1.default);
app.set('layout', './layouts/main');
app.set("view engine", "ejs");
app.set('views', path_1.default.join(__dirname, 'views'));
app.use("/", main_routes_1.mainRouter);
app.use("/auth", user_routes_1.userRouter);
var PORT = 3001; //process.env.PORT 
app.listen(PORT, function () { return console.log("Server is running on port ".concat(PORT)); });
