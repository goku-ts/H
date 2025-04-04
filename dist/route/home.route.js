"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
var express_1 = __importDefault(require("express"));
var home_controllers_1 = require("../controllers/home.controllers");
exports.homeRouter = express_1.default.Router();
exports.homeRouter.get("/", home_controllers_1.home);
