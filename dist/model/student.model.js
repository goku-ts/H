"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.studentSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var courses_model_1 = require("./courses.model");
exports.studentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    courses: {
        type: [courses_model_1.courseSchema],
        default: []
    }
});
exports.Student = mongoose_1.default.model("Student", exports.studentSchema);
