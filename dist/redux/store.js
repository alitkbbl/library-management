"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const isMenuSlice_1 = __importDefault(require("./isMenuSlice")); // استفاده از پیش‌فرض اکسپورت ریدوسر
const redux_thunk_1 = require("redux-thunk");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        isMenu: isMenuSlice_1.default,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redux_thunk_1.thunk),
});
exports.default = store;
