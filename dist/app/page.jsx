"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const Footer_1 = __importDefault(require("@/components/footer/Footer"));
const Navbar_1 = __importDefault(require("@/components/header/Navbar"));
const store_1 = __importDefault(require("./../redux/store"));
const react_redux_1 = require("react-redux");
const Main_1 = __importDefault(require("@/components/main/Main"));
function Home() {
    return (<react_redux_1.Provider store={store_1.default}>
      <div>
        <Navbar_1.default />
        <Main_1.default />
      <br />
      <br /><br />
        <Footer_1.default />
      </div>
    </react_redux_1.Provider>);
}
