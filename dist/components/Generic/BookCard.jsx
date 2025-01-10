"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookCard;
const image_1 = __importDefault(require("next/image"));
const _1_jpg_1 = __importDefault(require("./../../../data/image/1.jpg"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookCard({ id, title, author, number, url, entesharat, englandTitle, classBook, whoget }) {
    return (<div>
      <div className=' text-gray-800 my-1 bg-white flex  flex-grow rounded-xl'>
        <div className='ml-10 my-1 mr-1'>
           <image_1.default src={_1_jpg_1.default} alt="Banner" width={180} height={220} className="rounded-lg "/>
        </div>
        <div className='flex flex-col mr-2 justify-center'>
          <div className='  mt-6 '>
              <h2 className='text-4xl font-bold'>{title}</h2>
              <h2 className='text-xs  mx-1'>{englandTitle}</h2>
          </div>
          <div className='mt-16  text-slate-700'>
            <p>نویسنده :{author}</p>
            <p> انتشارات :{entesharat}</p>
            <p> کد کتاب :{id}</p>
          </div>
        </div>
        <div>
                

        </div>
      </div>
    </div>);
}
