import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/login'
import EmployeeDashboard from './Components/Dashboar/EmployeeDashboard'
import Header from './Components/Other/Header'
import AdminDashboard from './Components/Dashboar/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  //  },)
  
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData,SetUserData] = useContext(AuthContext)


useEffect(()=>{
  const loggedInUser  = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[])



const handleLogin = (email,password) =>{
  if(email == 'admin@me.com' && password =='123'){
    setUser("admin")
    localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))

  } else if(userData  ){
    const employee = userData.find((e)=> email == e.email && e.password == password )
    if(employee){
      setLoggedInUserData(employee)
    setUser("employee")
    localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee' ,data:employee}))
    }

  }
  else{
    alert("Invalid")
  }
}

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :''}
    {user =='admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
  
    
    </>
  )
}

export default App
