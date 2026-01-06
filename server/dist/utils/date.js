"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthStartAndEnd = exports.timeArr = void 0;
exports.timeArr = [];
for (var i = 0; i < 12; i++) {
    var startYear = new Date();
    startYear.setMonth(i);
    startYear.setDate(1);
    startYear.setUTCHours(0, 0, 0, 0);
    var endYear = new Date();
    endYear.setFullYear(endYear.getFullYear());
    endYear.setMonth(i + 1);
    endYear.setDate(1);
    endYear.setUTCHours(0, 0, 0, 0);
    var obj = {
        id: i,
        startDate: startYear,
        endDate: endYear,
    };
    exports.timeArr.push(obj);
}
var getMonthStartAndEnd = function (month, year) {
    year = Number(year);
    month = Number(month) + 1;
    var startOfMonth = new Date(year, month - 1, 2);
    var startOfNextMonth = new Date(year, month, 2);
    return {
        start: new Date(startOfMonth.setUTCHours(0, 0, 0, 0)),
        nextStart: new Date(startOfNextMonth.setUTCHours(0, 0, 0, 0)),
    };
};
exports.getMonthStartAndEnd = getMonthStartAndEnd;
