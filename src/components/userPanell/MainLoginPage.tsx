import React from 'react'
import UserInformation from './UserInformation'
import BoxReserve from '../main/booksReserve/BoxReserve'
import { useAppSelector } from '@/redux/hooks/Hook';
import Logining from './Logining';
import AdminBoobBox from './AdminBookBox';

export default function MainLoginPage() {
    const isLogin = useAppSelector((state) => state.isMenu.userLogin);
    const isadmin = useAppSelector((state) => state.isMenu.adminLogin);
  return (
    <div>
        {
            isLogin ? <div>
                        <UserInformation />
                        <div>
                          {isadmin ?<AdminBoobBox /> : <BoxReserve /> }
                        </div> 
                      </div> :  <Logining/>
        }
       
             
    </div>
  )
}
