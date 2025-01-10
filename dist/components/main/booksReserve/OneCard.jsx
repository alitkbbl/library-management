"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OneCard;
const react_1 = __importDefault(require("react"));
const BookCardBox_1 = __importDefault(require("@/components/Generic/BookCardBox"));
function OneCard() {
    return (<div className='flex gap-3'>
       
            <BookCardBox_1.default />
       
      </div>);
}
