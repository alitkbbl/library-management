"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainLoginPage;
const react_1 = __importDefault(require("react"));
const UserInformation_1 = __importDefault(require("./UserInformation"));
const BoxReserve_1 = __importDefault(require("../main/booksReserve/BoxReserve"));
const Hook_1 = require("@/redux/hooks/Hook");
const Logining_1 = __importDefault(require("./Logining"));
const AdminBookBox_1 = __importDefault(require("./AdminBookBox"));
function MainLoginPage() {
    const isLogin = (0, Hook_1.useAppSelector)((state) => state.isMenu.userLogin);
    const isadmin = (0, Hook_1.useAppSelector)((state) => state.isMenu.adminLogin);
    return (<div>
        {isLogin ? <div>
                        <UserInformation_1.default />
                        <div>
                          {isadmin ? <AdminBookBox_1.default /> : <BoxReserve_1.default />}
                        </div> 
                      </div> : <Logining_1.default />}
       
             
    </div>);
}
