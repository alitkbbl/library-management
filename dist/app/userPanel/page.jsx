"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserPanel;
const Navbar_1 = __importDefault(require("@/components/header/Navbar"));
const MainLoginPage_1 = __importDefault(require("@/components/userPanell/MainLoginPage"));
const store_1 = __importDefault(require("@/redux/store"));
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
function UserPanel() {
    return (<react_redux_1.Provider store={store_1.default}>
   
    <div className='bg-slate-100'>
        <Navbar_1.default />
        <br />
        <br />
        <br />
        <br />
    <MainLoginPage_1.default />
       
    </div>

    </react_redux_1.Provider>);
}
