"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookAdminManengment;
const image_1 = __importDefault(require("next/image"));
const _1_jpg_1 = __importDefault(require("./../../../data/image/1.jpg"));
const react_1 = require("react");
const jsonHookUser_1 = require("@/redux/hooks/jsonHookUser");
const CheckIcom_1 = __importDefault(require("./icons/CheckIcom"));
const LeftMenu_1 = __importDefault(require("./LeftMenu"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookAdminManengment({ id, title, author, number, major, entesharat, englandTitle, whoGet }) {
    const [status, setStatus] = (0, react_1.useState)(false);
    const handleClick = () => {
        setStatus(!status);
        if (status == true) {
            setB("...more");
        }
        else {
            setB("...less");
        }
    };
    const [user, setUser] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        (0, jsonHookUser_1.getProductUser)().then((result) => {
            setUser(result);
        });
    }, []);
    console.log(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //    useEffect(() => {
    //     whoGet?.forEach((itemm: string | undefined) => {
    //       setUser((prevUser) => prevUser?.filter((item) => itemm === item.id));
    //     });
    //   }, [whoGet]);
    const [B, setB] = (0, react_1.useState)("...more");
    return (<div>

      <div className=' text-gray-800 my-2 mx-3 bg-white flex  flex-grow rounded-xl'>
        <div className='flex flex-grow'>
 
        <div className='ml-10 my-2 mr-1'>
           <image_1.default src={_1_jpg_1.default} alt="Banner" width={180} height={220} className="rounded-lg "/>
        </div>
        <div className='flex flex-col mr-2 justify-center'>
          <div className='  mt-6 '>
              <h2 className='text-5xl font-bold'>{title}</h2>
              <h2 className='text-xs  mx-1'>{englandTitle}</h2>
          </div>
          <div className='mt-16  text-slate-700 text-lg'>
            <p>نویسنده :{author}</p>
            <p> انتشارات :{entesharat}</p>
            <div className='flex'>
               

               <div className='pb-1 pr-1 mt-2 mr-1 mb-1 text-slate-800 cursor-pointer hover:scale-110' onClick={handleClick}>
                    <p className='py-1.5 px-3.5 bg-red-500 rounded-3xl'> {B}</p>
                </div> 
                {status &&
            <div className='m-1 text-lg'>
                        <br />
                        <h2>کد کتاب : {id}</h2>
                        <h2 className='mb-1'>رشته ی کتاب: {major} </h2>
                        <div className=' justify-center'>
                        {user === null || user === void 0 ? void 0 : user.map((item) => {
                    const elements = [];
                    whoGet === null || whoGet === void 0 ? void 0 : whoGet.forEach((z) => {
                        if (z == item.id) {
                            elements.push(<div className='flex m-3 justify-center bg-slate-300  py-1.5 pr-2 pl-5 rounded-md ' key={item.id}>
                                    
                                    <CheckIcom_1.default />
                                    <p key={item.id} className='mr-2 ml-3'>{item.name}</p>
                                    <p className='mr-28 ml-1 bg-red-300 py-0.5 px-2 rounded-md'>{item.userName}</p>
                                    <p className='ml-28'>   :userName </p>
                                    <p className='ml-1 bg-red-300 py-0.5 px-2 rounded-md'>{item.password}</p>
                                    <p className='ml-16 '>  :pass</p>
                                    <p className='ml-1 mr-14 bg-red-300 py-0.5 px-2 rounded-md'>{item.id}</p>
                                    <p className='ml-5 '>  :ID</p>
                                </div>);
                        }
                    });
                    return elements;
                })}
                        </div>
                    </div>}
            </div>
            


          </div>
        </div>
                

        </div>

        <div className=''>
            <LeftMenu_1.default number={number} id={id}/>
         
        </div>

      </div>
    </div>);
}
