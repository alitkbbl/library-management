"use strict";
'use client';
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCount = exports.isAdmin = exports.setReserveBook = exports.setName = exports.userLogin = exports.adminLogin = exports.change2 = exports.change1 = exports.toggleMenu = exports.isMenuSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: false,
    m1: false,
    userLogin: false,
    adminLogin: false,
    userId: null,
    userName: "ورود / ثبت نام ",
    reserveBook: null
};
exports.isMenuSlice = (0, toolkit_1.createSlice)({
    name: 'isMenu',
    initialState,
    reducers: {
        toggleMenu: (state) => { state.value = !state.value; },
        change1: (state) => { state.m1 = !state.m1; },
        change2: (state) => { state.m1 = false; },
        userLogin: (state, actions) => { state.userLogin = actions.payload; },
        isAdmin: (state, actions) => { state.adminLogin = actions.payload; },
        adminLogin: (state, actions) => { state.userId = actions.payload; },
        setName: (state, actions) => { state.userName = actions.payload; },
        setReserveBook: (state, actions) => { state.reserveBook = actions.payload; }
    }
});
_a = exports.isMenuSlice.actions, exports.toggleMenu = _a.toggleMenu, exports.change1 = _a.change1, exports.change2 = _a.change2, exports.adminLogin = _a.adminLogin, exports.userLogin = _a.userLogin, exports.setName = _a.setName, exports.setReserveBook = _a.setReserveBook, exports.isAdmin = _a.isAdmin;
const selectCount = (state) => state.isMenu.value;
exports.selectCount = selectCount;
exports.default = exports.isMenuSlice.reducer;
