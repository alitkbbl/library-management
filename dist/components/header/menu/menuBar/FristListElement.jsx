"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FristListElement;
const Hook_1 = require("@/redux/hooks/Hook");
const ListElements_1 = __importDefault(require("./ListElements"));
function FristListElement() {
    const items = [{
            title: "دسته بندی موضوعات",
            url: "/",
        },
        {
            title: "کتاب های جدید",
            url: "/",
        },
        {
            title: "کتاب های برگزیده",
            url: "/",
        },
        {
            title: "ادبیات بین الملل",
            url: "/",
        },
        {
            title: "درباره ی ما",
            url: "/",
        },
    ];
    const items2 = [{
            title: "ادبیات داستانی",
            url: "/",
        },
        {
            title: "روانشناسی",
            url: "/",
        },
        {
            title: "فلسفه و منطق",
            url: "/",
        },
        {
            title: "خودشناسی",
            url: "/",
        },
        {
            title: "مذهبی",
            url: "/",
        },
        {
            title: "سیاسی",
            url: "/",
        },
    ];
    const m1 = (0, Hook_1.useAppSelector)((state) => state.isMenu.m1);
    return (<div className="flex flex-grow ">
            <div className="flex-grow text-base bg-slate-50">
               <ListElements_1.default items={items}/>
            </div>

            {m1 && <div className="flex-grow font-semibold text-xl py-3 px-5 ">
                <ListElements_1.default items={items2}/> 
           
            </div>}
           
      
        </div>);
}
