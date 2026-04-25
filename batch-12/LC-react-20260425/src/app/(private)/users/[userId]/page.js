'use client';

import { useParams } from 'next/navigation';
import React from 'react'

const UserPage = () => {
  const { userId } = useParams(); 
  return (
    <>
      <div>Single User page</div>
      <div>User ID: {userId}</div>
    </>
  )
}

export default UserPage;