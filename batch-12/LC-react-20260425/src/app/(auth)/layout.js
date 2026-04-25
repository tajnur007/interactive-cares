import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <>
      <div>{children}</div>
      <div>Footer</div>
    </>
  )
}

export default AuthLayout;
