import React, { useState } from 'react'
import { useAuth } from '../../CustomHooks/auth'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const auth = useAuth()
    const [username, setUsername] = useState('')
    const login = (e) => {
        e.preventDefault()
        auth.login({username})
    }

    if (auth.user) {
        return <Navigate to='/profile' />
    }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Escribe tu usuario</label>
        <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <button type='submit'>Entrar</button>
      </form>
    </>
  )
}

export default Login
