"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminBookBox;
const react_1 = require("react");
const jsonHookBook_1 = require("@/redux/hooks/jsonHookBook");
const BookAdminMannegment_1 = __importDefault(require("./BookAdminMannegment"));
const DownIcon_1 = __importDefault(require("./icons/DownIcon"));
const link_1 = __importDefault(require("next/link"));
function AdminBookBox() {
    const [bookss, setBookss] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, jsonHookBook_1.getProduct)().then((result) => {
            setBookss(result);
        });
    }, []);
    const [status, setStatus] = (0, react_1.useState)(false);
    const handleClick = () => {
        setStatus(!status);
    };
    return (<div className="flex flex-col flex-grow rounded-xl mx-6 mt-5 mb-10 bg-slate-200">
      <div className='my-3 font-bold text-3xl mr-9 text-gray-800 flex justify-between '>
        <div className='flex'>
           <div onClick={handleClick} className='ml-3 p-4 bg-white rounded-full cursor-pointer'>
              <DownIcon_1.default />
            </div>
        
            <h2 className='mt-3 mr-3'>لیست همه ی کتاب ها</h2>
        </div>
       <div className='ml-5'>
        <link_1.default href={'/addBook'}>
        <p className='bg-red-500 py-2.5 px-6 rounded-full mt-1'>Add</p>
        </link_1.default>
        
       </div>
        
      </div>
        {status &&
            <div className='mx-2 mb-1'>

         {bookss.map((item) => <BookAdminMannegment_1.default key={item.id} id={item.id} englandTitle={item.englandTitle} title={item.title} entesharat={item.entesharat} author={item.author} number={item.number} major={item.major} whoGet={item.whoGet}/>)}
      </div>}
     
    </div>);
}
