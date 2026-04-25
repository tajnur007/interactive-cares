import React from 'react'

const PublicLayout = ({children}) => {
  return (
    <>
      <div>Header</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  )
}

export default PublicLayout;