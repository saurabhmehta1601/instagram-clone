import React, { useContext,useEffect,useState } from 'react'
import { useHistory } from 'react-router'
import FirebaseContext from '../context/firebase'

const  Login = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const isInvalid = password ==="" || email === "" 

    const handleLogin = () => {}

    useEffect(()=>{
        document.title="Login | Instagram"
    },[])

    return (
        <div className="mx-auto container flex max-w-screen-md items-center h-screen" >
         <div className=" flex w-3/5 ">
             <img src="/images/iphone-with-profile.jpg" alt="iphone with profile" className="max-w-xs" />
        </div>
        <div className="flex flex-col w-2/5">
            <p>This is the form</p>
        </div>
        </div>
    )
}

export default Login
