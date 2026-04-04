import React, { useEffect } from 'react'

const FullName = ({ name }) => {

  useEffect(() => {
    console.log(':: Component Mounted ::');

    return () => {
      console.log(':: Component Destroyed ::');
    }
  }, []);

  return (
    <p id='fullName'>
      Full name: {name} 
    </p>
  )
}

export default FullName;