"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var compression_1 = __importDefault(require("compression"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var errorMiddleware_1 = require("./middlewares/errorMiddleware");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://first-voice-dashboard-admin.onrender.com",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, compression_1.default)());
app.use("/api/v1", routes_1.default);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(path_1.default.resolve(), "../client", "dist")));
    app.get("/{*any}", function (req, res) {
        res.sendFile(path_1.default.resolve(path_1.default.resolve(), "../client", "dist", "index.html"));
    });
}
//ERROR HANDLER
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
var PORT = 4000;
app.listen(PORT, function () { return console.log("Server Listening at PORT ".concat(PORT)); });
var sal = ["Mr.", "Miss", "Mrs.", "fsdf."];
var newsal = sal === null || sal === void 0 ? void 0 : sal.map(function (item) { return item === null || item === void 0 ? void 0 : item.split(".").join(""); });
console.log(newsal);
