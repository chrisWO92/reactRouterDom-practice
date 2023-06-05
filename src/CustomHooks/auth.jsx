import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const admins = ['Cristian', 'Jenn', 'Rosario']
const editors = ['Jose', 'Marina', 'Juan']
const authors = ['Ricardo', 'Camilo', 'Shaw']

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const login = ({username}) => {
        const isAdmin = admins.find(admin => admin === username)
        const isEditor = editors.find(creator => creator === username)
        const isAuthor = authors.find(author => author === username)
        
        setUser({username, isAdmin, isEditor, isAuthor})
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = {user, login, logout}

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

//para no tener que invocar siempre el useContext, sino solamente useAuth
const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}

const AuthRoute = (props) => {
    const auth = useAuth()
    if (!auth.user) {
        return <Navigate to='/login' />
    } else {
        return props.children
    }
}

export { AuthProvider, useAuth, AuthRoute }
