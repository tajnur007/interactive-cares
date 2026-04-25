import Sidebar from '@/features/layout/Sidebar';
import React from 'react'

const PrivateLayout = ({children}) => {
  return (
    <div className='flex h-screen'>
      <div className='min-w-[250px] border'>
        <Sidebar />
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default PrivateLayout;
