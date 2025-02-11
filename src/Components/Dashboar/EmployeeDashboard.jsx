import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import AdminDashboard from './AdminDashboard'
import CreateTask from '../Other/CreateTask'

const EmployeeDashboard = ({ changeUser , data}) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
  
  
      <Header changeUser={changeUser} data ={data}/>
     <TaskListNumbers data ={data}/>
     <TaskList data ={data}/> 
     
    </div>
  )
}

export default EmployeeDashboard
