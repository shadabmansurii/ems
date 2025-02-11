import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className=' flex mt-10 justify-between  gap-5'>
        <div className=' w-[45%] p-10 bg-blue-500 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' w-[45%] p-10 bg-green-500 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=' w-[45%] p-10 bg-yellow-500 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className=' w-[45%] p-10 bg-red-500 py-6 px-5 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
