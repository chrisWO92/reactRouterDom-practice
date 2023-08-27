import React from 'react'
import { useAuth } from '../../CustomHooks/auth'
import useProfiles from '../../CustomHooks/useProfiles'

const Profile = () => {

    const auth = useAuth()
    const {isAdmin, isEditor, isAuthor, isUser} = useProfiles({})

    const userTypes = []

    if (isAdmin) {
        userTypes.push('admin')
    } 
    
    if (isEditor) {
        userTypes.push('editor')
    } 
    
    if (isAuthor) {
        userTypes.push('author')
    }

    if (isUser) {
      userTypes.push('user')
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
