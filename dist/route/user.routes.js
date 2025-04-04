"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var data_2 = require("../data");
var data = data_2.DATA[0];
var data_1 = data_2.DATA[1];
exports.userRouter = express_1.default.Router();
var adminLayout = "../views/auth/layouts/auth.ejs";
exports.userRouter.get("/admin", function (req, res) {
    res.render("auth/index", { layout: adminLayout });
});
exports.userRouter.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    // Simple hardcoded check (replace with real auth)
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({ message: 'Login successful' });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
