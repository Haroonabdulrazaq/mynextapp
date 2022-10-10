import React from 'react'

const Users = ({user}) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  )
}

export default Users