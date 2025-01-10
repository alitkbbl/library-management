"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = getProduct;
const axios_1 = __importDefault(require("axios"));
const client = axios_1.default.create({
    baseURL: "http://localhost:8001",
});
async function getProduct() {
    const { data } = await client("/books");
    return data;
}
