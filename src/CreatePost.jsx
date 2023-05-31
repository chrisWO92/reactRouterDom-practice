import React, { useState } from "react";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const auth = useAuth()

  const createPost = () => {
    blogdata.push({
        title: title,
        slug: slug,
        content: content,
        author: auth.user.username
    })
  }

  return (
    <>
      <h1>Creating Post</h1>
      <form id="create-post" onSubmit={createPost}>
        <label>
          Título del post
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Slug
          <input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </label>

        <label>
          Contenido
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type='submit'>Crear</button>
      </form>
    </>
  );
};

export default CreatePost;
