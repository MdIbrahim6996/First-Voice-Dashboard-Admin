"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pusher = void 0;
var pusher_1 = __importDefault(require("pusher"));
var appConstants_1 = require("../utils/appConstants");
exports.pusher = new pusher_1.default({
    appId: appConstants_1.PUHSER_APP_ID,
    key: appConstants_1.PUSHER_KEY,
    secret: appConstants_1.PUSHER_SECRET,
    cluster: appConstants_1.PUSHER_CLUSTER,
    useTLS: true,
});
