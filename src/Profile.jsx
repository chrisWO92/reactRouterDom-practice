import React from 'react'
import { useAuth } from './auth'

const Profile = () => {
    const auth = useAuth()

    const userTypes = []

    if (auth.user?.isAdmin) {
        userTypes.push('admin')
    } 
    
    if (auth.user?.isCreator) {
        userTypes.push('creator')
    } 
    
    if (auth.user?.isAuthor) {
        userTypes.push('author')
    }

    console.log(userTypes)

  return (
    <>
      <h1>Profile Page</h1>
      <p>Welcome, {auth.user.username}</p>

      <p>You are: {userTypes.map(type => (<span key={type}>{type} </span>))}</p>

    </>
  )
}

export default Profile
