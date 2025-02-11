import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
  


   const submitHandler=(e)=>{
     e.preventDefault();
    handleLogin(email,password)
     setEmail("")
     setPassword("")
     
   }

  return (
   <div className='flex  h-screen w-screen items-center justify-center ' >
     <div className='border-2 rounded-xl border-emerald-600 p-20'>
      <form onSubmit={(e)=>{
        submitHandler(e)
        // e.preventDefault()
        }}
        
       className='flex flex-col items-center justify-center'>

        <input
         value={email} 
        onChange={(e)=>{
       
        setEmail(e.target.value)
        }}
        className='bg-black text-white outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type='email' placeholder='Enter the email' required/>

        <input
        value={password}
          onChange={(e)=>{
            setPassword(e.target.value)

          }}
        className='bg-black text-white outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3' type='password' placeholder='Enter the password'required/>
        <button className=' text-white outline-none border-none  bg-emerald-600 rounded-full py-3 px-5 text-xl w-64 placeholder:text-white mt-9' >Log in</button>
        
      </form>

     </div>
    
   </div>
  )
}

export default Login
