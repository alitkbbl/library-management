"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginShop;
const react_1 = __importDefault(require("react"));
const ShopingBag_1 = __importDefault(require("./ShopingBag"));
const Login_1 = __importDefault(require("./Login"));
function LoginShop() {
    return (<div className='flex '>
      <div className='mx-2 bg-customPurple rounded-lg px-4 py-2 text-white hover:scale-105 transition duration-300 ease-in-out hover:bg-indigo-800'>
        <Login_1.default />
      </div>
      <div className='mx-2'>
        <ShopingBag_1.default />
      </div>
    </div>);
}
