import React from 'react'

const NewTask = ({data}) => {
  return (
      <div className="h-full min-w-[300px] p-5 bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
        high
        </h3>
        <h4 className="text-sm">
            20 feb 2026
        </h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
            Navya
        </h2>
        <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero ab debitis dolores corrupti dolorum?
        </p>
        <div className='mt-4 '>
        <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
