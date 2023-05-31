import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { blogdata } from './blogdata'
import { useAuth } from './auth'

function BlogLink ({ post }) {

    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}

const Blog = () => {

    const [createMode, setCreateMode] = useState(false)
    const auth = useAuth()

    const canCreate = auth.user?.isCreator || auth.user?.isAdmin
    console.log(createMode)

    return (
      <>
        <h1>Blog Page</h1>
        <ul>
          {blogdata.map(post => (
              <BlogLink key={post.slug} post={post}/>
          ))}
        </ul>

        {canCreate && <button><Link to={"/blog/create-post"}>Create Post</Link></button>}

        <Outlet />

      </>
    )
  }

export default Blog
