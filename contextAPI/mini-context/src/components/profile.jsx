import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const { user } = useContext(UserContext)

  if (!user) {
    return <h2>please login</h2>
  }
  return (
    <div>
      <h2>username: {user.username}</h2>
      <h2>password: {user.password}</h2>
    </div>
  )
}

export default Profile