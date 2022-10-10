import React from 'react'

const Users = ({users}) => {
  return (
    <div>{
      users.map((user)=>(
        <div key={user.id} style={{border: '1px solid #ccc', cursor:'pointer', marginBottom: '5px'}}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}</div>
  )
}

export default Users

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data
    }
  }
}