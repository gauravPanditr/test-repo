import React from 'react'

const CompletedTask = ({loggedInEmployee}) => {
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
        <div className='mt-2 '>
        <button className='w-full bg-green-500'>Completed Task</button>
        </div>
      </div>
  )
}

export default CompletedTask
