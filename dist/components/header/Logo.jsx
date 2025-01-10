"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logo;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function Logo() {
    return (<link_1.default href={'/'}>
      <div className='mr-9 py-2 flex text-2xl bg-white px-12 rounded-3xl text-gray-800 shadow-lg'>
        <h2>مدیریت یک کتابخانه</h2>
    </div>
    </link_1.default>);
}
