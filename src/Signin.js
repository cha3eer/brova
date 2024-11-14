import React, { useEffect, useState } from 'react'
import {auth , provider} from "./components/Firebase"
import { signInWithPopup } from 'firebase/auth/web-extension'

function Signin() {
    const [value,setvalue] = useState('')
    const handleclick =()=>{
        signInWithPopup(auth , provider)
        .then((data)=>{
            setvalue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setvalue(localStorage.getItem('email'))
    })

  return (
    <>
      {value?<UserPage/>:
      <button onClick={handleclick}>Sign in with google</button>
}
    </>
  )
}

export default Signin
