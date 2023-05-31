import React from 'react'
import { Link, NavLink } from  'react-router-dom'
import { useAuth } from './auth'

const routes = []
    routes.push({
        to: '/',
        text: 'Home',
        private: false,
    })
    routes.push({
        to: '/blog',
        text: 'Blog',
        private: false,
    })
    routes.push({
        to: '/profile',
        text: 'Profile',
        private: true,
    })
    routes.push({
        to: '/login',
        text: 'Login',
        private: false,
        publicOnly: true,
    })
    routes.push({
        to: '/logout',
        text: 'Logout',
        private: true,
    })

const Menu = () => {   

    const auth = useAuth()

  return (
    <>
      <nav>
        <ul>
            {routes.map((route) => {

                //si la ruta es privada y aún no se ha ingresado
                //ningún user, no renderizar la página
                if (route.private && !auth.user) return null

                if (route.publicOnly && auth.user) return null

                return (
                    <li key={route.text} >
                    <NavLink
                        to={route.to}
                        style={({isActive}) => ({
                            color: isActive ? 'red' : 'blue'
                        })}
                    >
                        {route.text}
                    </NavLink>
                </li>
                )
            })}
        </ul>
      </nav>
    </>
  )
}

export default Menu
