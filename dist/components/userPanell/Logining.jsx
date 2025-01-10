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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logining;
const Hook_1 = require("@/redux/hooks/Hook");
const isMenuSlice_1 = require("@/redux/isMenuSlice");
const react_1 = __importStar(require("react"));
const jsonHookUser_1 = require("@/redux/hooks/jsonHookUser");
function Logining() {
    const dispatch = (0, Hook_1.useAppDispatch)();
    let myid = "0";
    let isadmin = false;
    let a = 0;
    const handleBottom = (event) => {
        event.preventDefault();
        if (a == 1) {
            dispatch((0, isMenuSlice_1.userLogin)(true));
            dispatch((0, isMenuSlice_1.adminLogin)(myid));
            dispatch((0, isMenuSlice_1.isAdmin)(isadmin));
        }
        if (a != 1) {
            alert("نام کاربری یا رمز شما وجود ندارد.(ثبت نام کنید)");
        }
    };
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const handleLogin = (event) => { setInputValue(event.target.value); };
    const [inputValue2, setInputValue2] = (0, react_1.useState)('');
    const handleLogin2 = (event) => { setInputValue2(event.target.value); };
    const [user, setUser] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, jsonHookUser_1.getProductUser)().then((result) => {
            setUser(result);
        });
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myuser = user === null || user === void 0 ? void 0 : user.filter((item) => item.userName == inputValue && item.password == inputValue2);
    (0, react_1.useEffect)(() => {
        if (user) {
            const filteredUsers = user.filter((item) => item.userName === inputValue && item.password === inputValue2);
            const myuser = filteredUsers[0];
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (myuser) {
                a = 1;
                myid = myuser.id;
                isadmin = myuser.isAdmin;
            }
        }
    }, [user, inputValue, inputValue2, a]);
    return (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">سلام!</h2>
        <p className="text-center mb-6 text-gray-800">جهت ورود نام کاربری و رمز خور را وارد کنید</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
             نام کاربری
            </label>
            <input id="mobile" type="text" onChange={handleLogin} value={inputValue} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105 focus:bg-slate-100"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              رمز عبور
            </label>
            <input id="email" type="text" onChange={handleLogin2} value={inputValue2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105 focus:bg-slate-100"/>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" onClick={handleBottom} className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>);
}
