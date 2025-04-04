"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
var home = function (req, res) {
    try {
        res.json({
            message: "Access granted"
        });
    }
    catch (error) {
    }
};
exports.home = home;
