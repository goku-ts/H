"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
var express_1 = __importDefault(require("express"));
exports.mainRouter = express_1.default.Router();
var data_1 = require("../data");
var data = data_1.DATA[1];
exports.mainRouter.get("/", function (req, res) {
    var homeData = {
        doctors: data.doctors.length,
        patients: data.patients.length,
        appointments: data.appointments.length,
    };
    res.render("index", { homeData: homeData });
});
exports.mainRouter.get("/doctors", function (req, res) {
    var doctors = data.doctors;
    res.render("doctors", { doctors: doctors });
});
exports.mainRouter.get("/doctor/:id", function (req, res) {
    var id = req.params.id;
    var doctor = data.doctors.find(function (doctor) { return doctor.id === Number(id); });
    res.render("doctor-details", { doctor: doctor });
});
exports.mainRouter.get("/patients", function (req, res) {
    var patients = data.patients;
    res.render("patients", { patients: patients });
});
exports.mainRouter.get("/patient/:id", function (req, res) {
    var id = req.params.id;
    var patient = data.patients.find(function (patient) { return patient.id === Number(id); });
    res.render("patient-details", { patient: patient });
});
exports.mainRouter.get("/appointments", function (req, res) {
    var appointments = data.appointments;
    res.render("appointments", { appointments: appointments });
});
exports.mainRouter.get("/appointment/:id", function (req, res) {
    var id = req.params.id;
    var appointment = data.appointments.find(function (appointment) { return appointment.id === Number(id); });
    res.render("appointment-details", { appointment: appointment });
});
