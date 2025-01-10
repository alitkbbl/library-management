"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// مسیر فایل JSON
const filePath = path_1.default.join(__dirname, '../data.json');
// مسیر برای جایگزینی داده‌های جدید
app.post('/api/data', (req, res) => {
    const newData = req.body;
    fs_1.default.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'File successfully written' });
    });
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
