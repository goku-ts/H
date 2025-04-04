"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.courseSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var assessment_model_1 = require("./assessment.model");
exports.courseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    facilitator: {
        type: String,
        required: true
    },
    term: {
        type: Number,
        required: true
    },
    assessment: {
        type: [assessment_model_1.assessmentSchema],
    }
});
exports.Course = mongoose_1.default.model("Course", exports.courseSchema);
