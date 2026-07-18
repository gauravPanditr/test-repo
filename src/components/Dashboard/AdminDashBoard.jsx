import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashBoard = ({ changeUser, data }) => {
  console.log(data);
  
  return (
    <div className='h-screen w-full p-10  bg-[#1c1c1c]'>
      <Header  />
    <CreateTask
  employees={data}
  setEmployees={setEmployees}
/>
     <AllTask employees={data} />
    </div>
  )
}

export default AdminDashBoard
