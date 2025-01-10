"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BoxReserve;
const react_1 = __importDefault(require("react"));
const Resers_1 = __importDefault(require("./Resers"));
const AddRequest_1 = __importDefault(require("./AddRequest"));
function BoxReserve() {
    return (<div className='bg-slate-200 m-10 mt-1 rounded-3xl'>
      <div className=' flex justify-between '>
          <span className='mr-7 font-semibold mt-4 mb-2 text-3xl'>کتاب های در حال مطالعه </span>
          <div className='ml-8 mt-4 '>
            <AddRequest_1.default />
          </div>
      </div>
      <div className=' mx-3 my-2 rounded-md '>
        <Resers_1.default />
      </div>

    </div>);
}
