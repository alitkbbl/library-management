"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
const Hook_1 = require("@/redux/hooks/Hook");
const LoginShop_1 = __importDefault(require("./loginShop/LoginShop"));
const Logo_1 = __importDefault(require("./Logo"));
const Menu_1 = __importDefault(require("./menu/Menu"));
const FristListElement_1 = __importDefault(require("./menu/menuBar/FristListElement"));
function Navbar() {
    const isMyMenu = (0, Hook_1.useAppSelector)((state) => state.isMenu.value);
    return (<div className="fixed top-0 w-full z-50">

    <div className="relative ">
  <nav className="flex justify-center bg-gray-200 p-5 sticky top-0 ">
    <div className="flex-grow basis-1/8"></div>
    <div className="flex justify-between flex-grow basis-8/12">

      <div>
        <Menu_1.default />
      </div>
      <div>
        <Logo_1.default />
      </div>
      <div>
        <LoginShop_1.default />
      </div>
    </div>
    <div className="flex-grow basis-1/8"></div>
  </nav>
  
  <div className='text-gray-700 m-1 absolute top-auto rounded-lg z-50 bg-white flex bg-opacity-70 backdrop-blur-sm'>
      <div className=''>
      {isMyMenu && <FristListElement_1.default />}
      </div>
  </div> 
    </div>
    </div>);
}
