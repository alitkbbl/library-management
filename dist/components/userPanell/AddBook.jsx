"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = addBook;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
function addBook() {
    return (<div>
      <link_1.default href={'/addBook'}>
        <div className='ml-1 bg-red-500 p-2 rounded-full hover:bg-red-600 hover:shadow-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>

        </div>
      </link_1.default>
    </div>);
}
