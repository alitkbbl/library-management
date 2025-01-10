"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Elements_1 = __importDefault(require("./Elements"));
const ElementsList = ({ items }) => {
    return (<ul>
      {items.map((text, index) => <Elements_1.default key={index} title={text.title} k={index}/>)}
    </ul>);
};
exports.default = ElementsList;
