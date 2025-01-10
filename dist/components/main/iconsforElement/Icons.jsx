"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Icons;
const react_1 = __importDefault(require("react"));
const Medal_1 = __importDefault(require("./Medal"));
const Feather_1 = __importDefault(require("./Feather"));
const Cap_1 = __importDefault(require("./Cap"));
const Flag_1 = __importDefault(require("./Flag"));
const Star_1 = __importDefault(require("./Star"));
const Books_1 = __importDefault(require("./Books"));
function Icons() {
    return (<ul className='  absolute -bottom-20 right-60 flex gap-6   text-gray-700 font-semibold text-xl'>
      <li className=''> 
        <Medal_1.default />
        <span className='pr-3'>جوایز ادبی </span>
      </li>
      <li> 
        <Feather_1.default />
        <span className='pr-1'>انواع داستان</span>
      </li>
      <li> 
        <Cap_1.default />
        <span className='pr-3'>مکاتب ادبی</span>
        </li>
      <li> 
        <Flag_1.default />
        <span className='pr-1'>ادبیات جهان</span>
      </li>
      <li> 
        <Star_1.default />
        <span className='pr-3'>برگزیدگان</span>
        </li>
      <li> 
        <Books_1.default />
        <span className='pr-4'>موضوعی</span>
        </li>
    </ul>);
}
