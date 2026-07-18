import React from 'react'
import useAuthStore from '../../store/authUser'

const Header = () => {

  const {
    loggedInEmployee,
    logout
  } = useAuthStore();

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-white font-semibold text-3xl'>
          {loggedInEmployee?.firstName || "Admin"}
        </span>
      </h1>

      <button
        onClick={logout}
        className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-b-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header