
import { JSX, useEffect, useState } from "react";
import { getProductUser } from '@/redux/hooks/jsonHookUser';

import BoxInfirmation from "./BoxInfirmation";
import { useAppSelector } from "@/redux/hooks/Hook";


          
export type TUser ={
    name?: string;
    userName?:string;
    password ?:string;
    major?:string;
    role?:string;
    id?: string;
    isAdmin?: boolean;
    reserveUserBook ?: string[];
  }
    
 type Tuserss ={
    forEach(arg0: (item: TUser) => void): unknown;
    items : TUser[] | null;
    map(arg0: (item: TUser) => JSX.Element): import("react").ReactNode;
    filter(arg0: (item: TUser) => boolean): TUser
 } 

 export default function UserInformation() {

  const [user, setUser] = useState<TUser>();
  const userId = useAppSelector((state) => state.isMenu.userId); 
 

  useEffect(() => { getProductUser().then((result: Tuserss) => 
    { result.forEach((item) => { if (item.id === userId) { setUser(item); } }); });
    
    
   },[userId])




 
  return (
<div>
     
            <BoxInfirmation
              key={user?.id}
              id={user?.id}          
              name={user?.name} 
              userName={user?.userName} 
              isAdmin={user?.isAdmin}  
              password={user?.password}
              reserveUserBook={user?.reserveUserBook}
            />
     
</div>
  )
}

