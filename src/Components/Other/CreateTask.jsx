import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})
  
  const submitHandler = (e)=>{
    e.preventDefault()
    
setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

const data = userData

data.forEach(function (elem) {
  if(assignTo == elem.firstname){
     elem.tasks.push(newTask)
     elem.taskNumbers.newTask =  elem.taskNumbers.newTask+1

    }
   })
setUserData(data)
console.log(data)

   setTaskTitle('')
 setCategory('')
 setAssignTo('')
 setTaskDate('')
 setTaskDescription('')
}
 

   
  return (
    <div>
      
      <div className='p-5 bg-[#282525] mt-7 rounded '>
        <form  onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex  flex-wrap w-full items-start justify-between '>
          <div className='w-1/2'>
           <div>
            <h3 className='task-sm text-white mb-0.5'>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='Make a UI design'
            />
          </div>
        
        <div>
          <h3 className='task-sm text-white mb-0.5' >Date</h3>
           <input
            value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='date'
            />
           </div>

        <div>
          <h3 className='task-sm text-white mb-0.5'>Assign to</h3>
          <input 
           value={assignTo}
           onChange={(e)=>{
             setAssignTo(e.target.value)
           }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='employee name'
          />
       </div>

      <div>
          <h3 className='task-sm text-white mb-0.5'>Catagory </h3>
          <input 
           value={category}
           onChange={(e)=>{
             setCategory(e.target.value)
           }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type='text' placeholder='design,dev,etc'
          
          />
      </div>
    </div>
         
         
          
          
          <div className='w-1/2'>
              <h3 className='task-sm text-white mb-0.5'>Description</h3>
              <textarea 
              value={taskDescription}
              
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              
               className='   w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id='' cols="30" rows="10">

               </textarea>
          </div>
              <button className='bg-green-600 py-3 font-semibold text-base hover:bg-green-700  px-5 rounded  ml-[50%] w-full '>Create task</button>

          
        </form>
      </div>
    </div>
  )
}

export default CreateTask
