"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const PORT = 7000;
const app = (0, express_1.default)();
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.json({ message: err.message });
});
app.listen(`connected to port ${PORT}`);
