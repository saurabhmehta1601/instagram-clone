import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import {getUserById} from "../services/firebase"

const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() =>{

    const getUserObjByUserId =async () => {
       const [response] = await getUserById(user.uid) ;
       setActiveUser(response)
    }

    if(user?.uid){
        getUserObjByUserId()
    }
  },[user])

  return {user:activeUser}
};

export default useUser;
