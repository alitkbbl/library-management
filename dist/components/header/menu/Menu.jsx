"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Menu;
const react_1 = __importDefault(require("react"));
const LogoTrue_1 = __importDefault(require("./logo/LogoTrue"));
const LogoFalse_1 = __importDefault(require("./logo/LogoFalse"));
const Hook_1 = require("./../../../redux/hooks/Hook");
const isMenuSlice_1 = require("@/redux/isMenuSlice");
function Menu() {
    const isMyMenu = (0, Hook_1.useAppSelector)((state) => state.isMenu.value);
    const dispatch = (0, Hook_1.useAppDispatch)();
    // تابعی برای مدیریت تغییر حالت
    const handleMenuToggle = () => {
        dispatch((0, isMenuSlice_1.toggleMenu)());
    };
    return (<div onClick={handleMenuToggle} className='rounded-full bg-white p-2 hover:scale-110 transition duration-300 ease-in-out'>
            {isMyMenu ? <LogoTrue_1.default /> : <LogoFalse_1.default />}
            
        </div>);
}
