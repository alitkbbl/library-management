"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Context;
const Banner_webp_1 = __importDefault(require("./../../images/Banner.webp"));
const whatread_jpg_1 = __importDefault(require("./../../images/whatread.jpg"));
const image_1 = __importDefault(require("next/image"));
const Icons_1 = __importDefault(require("./iconsforElement/Icons"));
function Context() {
    return (<div className='relative bg-slate-100'>
  
      <p className='z-0 '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quisquam ipsum reprehenderit illum itaque dignissimos! Aliquid laudantium asperiores, voluptatum voluptatibus, repellendus in culpa exercitationem veniam, doloribus placeat dolore omnis saepe!
      </p>
      <br />

      <div className='flex mx-32 m-4 relative'>
      <image_1.default src={Banner_webp_1.default} alt="Banner" layout="responsive" width={700} height={475} className="rounded-b-3xl rounded-t-md"/>
        <Icons_1.default />
      </div>
      <div className='px-20 py-28'>
      <image_1.default src={whatread_jpg_1.default} alt="whatread" layout="responsive" width={700} height={475} className="rounded-b-3xl rounded-t-md"/>
      </div>

      {/* <div>
          <BoxReserve />
        </div> */}
    
    
    </div>);
}
// 
