"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookCardBox;
const react_1 = require("react");
const BookCard_1 = __importDefault(require("./BookCard"));
const Hook_1 = require("@/redux/hooks/Hook");
const jsonHookBook_1 = require("@/redux/hooks/jsonHookBook");
function BookCardBox() {
    const [bookss, setBookss] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, jsonHookBook_1.getProduct)().then((result) => {
            setBookss(result);
        });
    }, []);
    // مطمئن شوید که userbooks از نوع string[] باشد
    const userbooks = (0, Hook_1.useAppSelector)((state) => state.isMenu.reserveBook);
    return (<div className="flex flex-col flex-grow rounded-lg">
      {bookss.map((item) => (userbooks === null || userbooks === void 0 ? void 0 : userbooks.includes(item.id)) ? (<BookCard_1.default key={item.id} id={item.id} englandTitle={item.englandTitle} title={item.title} entesharat={item.entesharat} author={item.author} number={item.number} url={item.url} classBook={item.classBook}/>) : null)}
    </div>);
}
