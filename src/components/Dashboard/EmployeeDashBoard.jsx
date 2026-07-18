import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDashBoard = () => {
  
    
  return (
    <div className=' h-screen  p-10'>
     <Header  />
     <TaskListNumber/>
     <TaskList />
    </div>
  )
}

export default EmployeeDashBoard;
