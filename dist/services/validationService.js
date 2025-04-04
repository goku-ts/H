"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSigin = exports.validateSignup = void 0;
var joi_1 = __importDefault(require("joi"));
var validateSignup = function (body) {
    var validationschema = joi_1.default.object({
        name: joi_1.default.string().required().min(5).max(30),
        email: joi_1.default.string().email().required().min(5).max(30),
        password: joi_1.default.string().required().min(8).max(25).pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    });
    return validationschema.validate(body);
};
exports.validateSignup = validateSignup;
var validateSigin = function (body) {
    var validationschema = joi_1.default.object({
        email: joi_1.default.string().email().required().min(5).max(30),
        password: joi_1.default.string()
    });
    return validationschema.validate(body);
};
exports.validateSigin = validateSigin;
