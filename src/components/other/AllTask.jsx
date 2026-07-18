import React from 'react'

const AllTask = ({employees }) => {
    console.log(employees);
  return (
    <div className='p-5 mt-5 rounded h-80 overflow-auto'>
      <div className='bg-red-400 py-2 px-4 flex justify-between rounded font-bold mb-2'>
        <h2>Name</h2>
        <h2>Task</h2>
        <h2>Status</h2>
      </div>

      {employees?.map((employee) =>
        employee.tasks.map((task, index) => (
          <div
            key={`${employee.id}-${index}`}
            className='border border-red-400 py-2 px-4 flex justify-between rounded mb-2'
          >
            <h2>{employee.firstName}</h2>
            <h3>{task.taskTitle}</h3>
            <h5>
              {task.completed
                ? "Completed"
                : task.failed
                ? "Failed"
                : task.active
                ? "Active"
                : "New"}
            </h5>
          </div>
        ))
      )}
    </div>
  )
}

export default AllTask