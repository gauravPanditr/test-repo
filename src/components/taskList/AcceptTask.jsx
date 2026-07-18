import React from 'react'
import useAuthStore from '../../store/authUser';

const AcceptTask = ({loggedInEmployee}) => {

 return (
      <div className="h-full min-w-[300px] p-5 bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
        high
        </h3>
        <h4 className="text-sm">
           {loggedInEmployee?.taskDate}
        </h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
            {loggedInEmployee?.taskTitle}
        </h2>
        <p className="text-sm mt-2">
           {loggedInEmployee?.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
      </div>

  )
}

export default AcceptTask
