"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Elements;
const react_1 = __importDefault(require("react"));
const ArrowLogo_1 = __importDefault(require("../logo/ArrowLogo"));
const Hook_1 = require("@/redux/hooks/Hook");
const isMenuSlice_1 = require("@/redux/isMenuSlice");
function Elements({ title, k }) {
    const dispatch = (0, Hook_1.useAppDispatch)();
    const handleMenu = () => {
        if (k == 0) {
            dispatch((0, isMenuSlice_1.change1)());
        }
        if (k != 0) {
            dispatch((0, isMenuSlice_1.change2)());
        }
    };
    return (<div onClick={handleMenu} className='flex justify-between rounded-lg  py-5 pl-10 p-4 border-white hover:bg-gray-200 hover:border-2'>
      <span>{title}</span>
      <div className='mr-2'>
      <ArrowLogo_1.default />
      </div>
    </div>);
}
