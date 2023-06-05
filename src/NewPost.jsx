import React from "react";
import useNewPost from "./CustomHooks/useNewPost";


const NewPost = ({posts, savePost}) => {

  const {onTitle, onContent, onSlug, createPost, state} = useNewPost({posts, savePost})
  const { title, slug, content, } = state

  return (
    <>
      <h1>Creating Post</h1>
      <form id="create-post" onSubmit={createPost}>
        <label>
          Título del post
          <input
            id="title"
            value={title}
            onChange={(e) => onTitle(e.target.value)}
          />
        </label>

        <label>
          Slug
          <input
            id="slug"
            value={slug}
            onChange={(e) => onSlug(e.target.value)}
          />
        </label>

        <label>
          Contenido
          <textarea
            id="content"
            value={content}
            onChange={(e) => onContent(e.target.value)}
          />
        </label>
        <button type='submit'>Crear</button>
      </form>
    </>
  );
};

export default NewPost;
