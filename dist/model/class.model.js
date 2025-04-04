"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = exports.classSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var courses_model_1 = require("./courses.model");
var student_model_1 = require("./student.model");
exports.classSchema = new mongoose_1.default.Schema({
    grade: {
        type: Number,
        required: true
    },
    numerOnRoll: {
        type: Number,
    },
    courses: {
        type: [courses_model_1.courseSchema],
        default: []
    },
    students: {
        type: [student_model_1.studentSchema],
        default: []
    }
});
exports.Class = mongoose_1.default.model("Class", exports.classSchema);
