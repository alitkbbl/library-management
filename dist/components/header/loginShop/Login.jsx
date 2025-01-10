"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
const Hook_1 = require("@/redux/hooks/Hook");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function Login() {
    const xa = (0, Hook_1.useAppSelector)((state) => state.isMenu.userName);
    return (<div>
      <link_1.default href={"/userPanel"}>

        <span className='px-2'>{xa}</span>
      </link_1.default>
      
    </div>);
}
