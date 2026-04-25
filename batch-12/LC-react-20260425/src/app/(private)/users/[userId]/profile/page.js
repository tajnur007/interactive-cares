'use client';

import { useParams } from 'next/navigation';
import React from 'react'

const UserProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <div>User Profile page</div>
      <div>User ID: {userId}</div>
    </>
  )
}

export default UserProfilePage;