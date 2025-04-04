"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = exports.assessmentSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.assessmentSchema = new mongoose_1.default.Schema({
    type: {
        type: Array,
        required: true
    },
    total_marks: {
        type: Number,
        enum: [5, 10, 15, 20],
        required: true
    },
    score: {
        type: Array,
        default: []
    }
});
exports.Assessment = mongoose_1.default.model("Assessment", exports.assessmentSchema);
