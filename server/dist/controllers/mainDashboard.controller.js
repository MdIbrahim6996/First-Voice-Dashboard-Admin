"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDailySales = exports.getProcessLeadCount = exports.getTopSellers = void 0;
var prismaClient_1 = require("../lib/prismaClient");
var getTopSellers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var currentDay, nextDay, seller, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentDay = new Date();
                currentDay.setUTCHours(0, 0, 0, 0);
                nextDay = new Date();
                nextDay.setUTCHours(0, 0, 0, 0);
                nextDay.setUTCDate(nextDay.getUTCDate() + 1);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prismaClient_1.prisma.leadCount.findMany({
                        where: {
                            updatedAt: { gte: currentDay, lte: nextDay },
                            userId: { not: null },
                            count: { gt: 0 },
                        },
                        orderBy: [{ count: "desc" }, { updatedAt: "asc" }],
                        include: { user: { select: { name: true, alias: true } } },
                    })];
            case 2:
                seller = _a.sent();
                res.send(seller);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTopSellers = getTopSellers;
function getTimeCategory(createdAt) {
    var date = new Date(createdAt);
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var totalMinutes = hours * 60 + minutes;
    // ranges in UTC
    var range1Start = 9 * 60; // 09:00
    var range1End = 12 * 60; // 12:00
    var range2Start = 12 * 60 + 30; // 12:30
    var range2End = 15 * 60; // 15:00
    var range3Start = 15 * 60 + 30; // 15:30
    var range3End = 18 * 60; // 18:00
    if (totalMinutes >= range1Start && totalMinutes <= range1End) {
        return "first"; //09:00 – 12:00;
    }
    else if (totalMinutes >= range2Start && totalMinutes <= range2End) {
        return "second"; //12:30 – 15:00;
    }
    else if (totalMinutes >= range3Start && totalMinutes <= range3End) {
        return "third"; //15:30 – 18:00;
    }
    else {
        return "Other";
    }
}
var getProcessLeadCount = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var date, date2, leadCount, leads, grouped, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = new Date();
                date.setUTCHours(0, 0, 0, 0);
                date2 = new Date();
                date2.setUTCDate(date.getDate() + 1);
                date2.setUTCHours(0, 0, 0, 0);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, prismaClient_1.prisma.process.findMany({
                        include: {
                            User: {
                                // orderBy: { LeadCount: { _count: "desc" } },
                                omit: {
                                    email: true,
                                    employeeId: true,
                                    phone: true,
                                    createdAt: true,
                                    isBlocked: true,
                                    password: true,
                                    updatedAt: true,
                                    processId: true,
                                },
                                include: {
                                    LeadCount: {
                                        select: { count: true },
                                        where: { createdAt: { gte: date, lte: date2 } },
                                    },
                                },
                            },
                        },
                    })];
            case 2:
                leadCount = _a.sent();
                return [4 /*yield*/, prismaClient_1.prisma.lead.findMany({
                        select: {
                            id: true,
                            createdAt: true,
                            leadBy: { select: { alias: true } },
                        },
                    })];
            case 3:
                leads = _a.sent();
                grouped = leads.reduce(function (acc, lead) {
                    var cat = getTimeCategory(new Date(lead.createdAt));
                    if (!acc[cat])
                        acc[cat] = [];
                    acc[cat].push(lead);
                    return acc;
                }, {});
                res.send(leadCount);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                next(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProcessLeadCount = getProcessLeadCount;
var getDailySales = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var date, date2, leads, grouped, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = new Date();
                date.setUTCHours(0, 0, 0, 0);
                date2 = new Date();
                date2.setUTCDate(date.getDate() + 1);
                date2.setUTCHours(0, 0, 0, 0);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prismaClient_1.prisma.lead.findMany({
                        select: {
                            id: true,
                            processId: true,
                            createdAt: true,
                            leadBy: { select: { alias: true, id: true } },
                        },
                        where: { processId: { not: null } },
                    })];
            case 2:
                leads = _a.sent();
                grouped = leads.reduce(function (acc, lead) {
                    var processId = lead.processId, createdAt = lead.createdAt, leadBy = lead.leadBy;
                    var id = leadBy === null || leadBy === void 0 ? void 0 : leadBy.id;
                    var date = new Date(createdAt);
                    var hours = date.getUTCHours();
                    var minutes = date.getUTCMinutes();
                    var totalMinutes = hours * 60 + minutes;
                    // ranges in UTC
                    var range1Start = 9 * 60; // 09:00
                    var range1End = 12 * 60; // 12:00
                    var range2Start = 12 * 60 + 30; // 12:30
                    var range2End = 15 * 60; // 15:00
                    var range3Start = 15 * 60 + 30; // 15:30
                    var range3End = 18 * 60; // 18:00
                    // determine half
                    var half;
                    if (totalMinutes >= range1Start && totalMinutes <= range1End) {
                        half = "firstHalf";
                    }
                    else if (totalMinutes >= range2Start &&
                        totalMinutes <= range2End) {
                        half = "secondHalf";
                    }
                    else if (totalMinutes >= range3Start &&
                        totalMinutes <= range3End) {
                        half = "thirdHalf";
                    }
                    else {
                        half = "other"; // optional, in case leads are outside these times
                    }
                    // @ts-ignore
                    if (!acc[processId])
                        acc[processId] = {};
                    // @ts-ignore
                    if (!acc[processId][half])
                        acc[processId][half] = [];
                    // find if lead already exists in the array
                    // @ts-ignore
                    var existing = acc[processId][half].find(function (l) { var _a; return ((_a = l === null || l === void 0 ? void 0 : l.leadBy) === null || _a === void 0 ? void 0 : _a.id) === id; });
                    if (existing) {
                        existing.count = (existing.count || 1) + 1;
                    }
                    else {
                        // @ts-ignore
                        acc[processId][half].push(__assign(__assign({}, lead), { count: 1 }));
                    }
                    // @ts-ignore
                    // acc[processId][half].push(lead);
                    return acc;
                }, {});
                res.send(grouped);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getDailySales = getDailySales;
