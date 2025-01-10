"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BoxInfirmation;
const react_1 = __importStar(require("react"));
const image_1 = __importDefault(require("next/image"));
const face_jpg_1 = __importDefault(require("./../../../data/image/face.jpg"));
const Hook_1 = require("@/redux/hooks/Hook");
const isMenuSlice_1 = require("@/redux/isMenuSlice");
const link_1 = __importDefault(require("next/link"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BoxInfirmation({ name, userName, isAdmin, id, password, reserveUserBook }) {
    let a;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAdmin ? a = "Admin" : a = "User";
    const dispatch = (0, Hook_1.useAppDispatch)();
    const ha = () => {
        dispatch((0, isMenuSlice_1.setName)(name));
        dispatch((0, isMenuSlice_1.setReserveBook)(reserveUserBook));
    };
    (0, react_1.useEffect)(() => {
        ha();
    });
    return (<div className="flex justify-between mx-5 mb-5">
    <br />
    <br />
    {isAdmin ?
            <div className="flex  mx-6 my-4 pl-5 bg-white rounded-lg">
        <div className="m-5 text-gray-900 font-bold ml-5">

            <div>
                <link_1.default href={'/seeRequest'}> 
                    <div>
                        <h2 className='bg-slate-400 font-semibold text-xl py-3 mb-10 mt-2 m-2 pr-10 pl-12 rounded-xl shadow-md'>مشاهده درخواست ها</h2>
                    </div>
                </link_1.default>   
            </div>

            <div>

                <div>
                <link_1.default href={'/userPanel/addUser'}>
                    <div>
                        <h2 className='bg-slate-300  text-lg py-3 mb-3 m-2 pr-4 pl-4 rounded-xl flex-auto shadow-md'>اضافه کردن کاربر</h2>
                    </div>
                </link_1.default>   
                </div>
                <div>
                <link_1.default href={'/addBook'}>
                    <div>
                        <h2 className='bg-slate-300  text-lg py-3  m-2 pr-4 pl-4 rounded-xl flex-auto shadow-md'>مشاهده ی کاربران</h2>
                    </div>
                </link_1.default>   
                </div>
            </div>
             
        </div>
        <div>
            
        </div>
    </div> : null}
    

    <div className="flex justify-between flex-grow m-4 bg-white rounded-lg">
        <div className="m-5 text-gray-800 font-bold">
            <h2 className="text-3xl mt-1 mb-8">کاربر  :{name}</h2>
            <h2>نام کاربری در سامانه :{userName}</h2>
            <div className="flex">
                <h2 className="mt-3">وضعیت  :  </h2>
                <h2 className="mt-1 mr-2 py-2 px-3 bg-red-500 rounded-3xl">{a}</h2>
            </div>

        </div>
        <div>
            <image_1.default src={face_jpg_1.default} alt="Banner" width={250} height={235} className="rounded-b-3xl rounded-t-md mx-3 mt-2 mb-6 shadow-2xl hover:scale-y-150"/>
        </div>
    </div>

    </div>);
}
