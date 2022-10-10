import React from 'react'
import Users from '../components/user/users'

const UsersList = ({users}) => {
  return (
    <div>{
      users.map((user)=>(
        <div key={user.id} style={{border: '1px solid #ccc', cursor:'pointer', marginBottom: '5px'}}>
          <Users user={user} />
        </div>
      ))}
    </div>
  )
}

export default UsersList

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data
    }
  }
}