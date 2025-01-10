"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeftMenu;
const react_1 = __importDefault(require("react"));
const EditIcon_1 = __importDefault(require("./icons/EditIcon"));
const Delete_1 = __importDefault(require("./icons/Delete"));
function LeftMenu({ number, id }) {
    return (<div className='mt-8 ml-1'>
        <div>
            <span className='flex-auto ml-3 mt-3 py-6 px-6 mb-2 rounded-full bg-red-500 shadow-lg text-white font-bold text-xl'>{number}</span>
        </div>
        <div className=' mt-24 mr-4 '>
            <div className='mb-2 '>
                <EditIcon_1.default />
            </div>
            <div>
                <Delete_1.default idd={id}/>
            </div>
        </div>

    </div>);
}
