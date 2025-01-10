"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShopingBag;
const Hook_1 = require("@/redux/hooks/Hook");
const isMenuSlice_1 = require("@/redux/isMenuSlice");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function ShopingBag() {
    const is = (0, Hook_1.useAppSelector)((state) => state.isMenu.userLogin);
    const dispatch = (0, Hook_1.useAppDispatch)();
    const handleClick = () => {
        dispatch((0, isMenuSlice_1.adminLogin)(false));
        dispatch((0, isMenuSlice_1.userLogin)(false));
        dispatch((0, isMenuSlice_1.setName)("ورود / ثبت نام "));
        dispatch((0, isMenuSlice_1.setReserveBook)(null));
    };
    return (<div>
    {is &&
            <div onClick={handleClick}>
      <link_1.default href={'/userPanel'}>

    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-circle mt-1 text-red-800" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
      </link_1.default>
    </div>}
    </div>);
}
