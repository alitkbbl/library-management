"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserInformation;
const react_1 = require("react");
const jsonHookUser_1 = require("@/redux/hooks/jsonHookUser");
const BoxInfirmation_1 = __importDefault(require("./BoxInfirmation"));
const Hook_1 = require("@/redux/hooks/Hook");
function UserInformation() {
    const [user, setUser] = (0, react_1.useState)();
    const userId = (0, Hook_1.useAppSelector)((state) => state.isMenu.userId);
    (0, react_1.useEffect)(() => {
        (0, jsonHookUser_1.getProductUser)().then((result) => { result.forEach((item) => { if (item.id === userId) {
            setUser(item);
        } }); });
    }, [userId]);
    return (<div>
     
            <BoxInfirmation_1.default key={user === null || user === void 0 ? void 0 : user.id} id={user === null || user === void 0 ? void 0 : user.id} name={user === null || user === void 0 ? void 0 : user.name} userName={user === null || user === void 0 ? void 0 : user.userName} isAdmin={user === null || user === void 0 ? void 0 : user.isAdmin} password={user === null || user === void 0 ? void 0 : user.password} reserveUserBook={user === null || user === void 0 ? void 0 : user.reserveUserBook}/>
     
    </div>);
}
