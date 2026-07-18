import React from 'react'
import useAuthStore from '../../store/authUser'

const TaskListNumber = () => {
  const {loggedInEmployee }=useAuthStore();
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-red-400'>
        <h2 className='text-2xl font-semibold'>{loggedInEmployee.taskCounts.
newTask

}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
        </div>
       <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{loggedInEmployee.taskCounts.completed}</h2>
        <h2 className='text-xl font-medium '>Completed Task</h2>
        </div>
         <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>{loggedInEmployee.taskCounts.active}</h2>
        <h2 className='text-xl font-medium '>Accepted Task</h2>
        </div>
         <div className='p-10 rounded-xl px-9 py-6 w-[45%] bg-green-400'>
        <h2 className='text-2xl font-semibold'>{loggedInEmployee.taskCounts.failed}</h2>
        <h2 className='text-xl font-medium '>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber
