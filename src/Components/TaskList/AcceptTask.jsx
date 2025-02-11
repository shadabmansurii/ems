import React, { useState } from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl '>
      {/* <button className='bg-black rounded-full ml-[250px]  '> &#10060;</button> */}
     

    <div className=' flex justify-between  font-semibold items-center  '>
        <h3 className='bg-red-600  text-sm py-1 px-3 rounded '>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate} {data.date}</h4>
        
    </div>
    <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle} {data.title}</h2>
    <p className='text-sm mt-2'>
       {data.taskDescription} {data.description}
    </p>
    <div className='flex justify-between mt-4'>
       <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button> 
    </div>
 </div>
  )
}

export default AcceptTask
