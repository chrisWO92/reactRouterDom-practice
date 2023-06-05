import React from "react";

const ContentSection = ({
  title,
  author,
  content,
  editPostMode,
  postContent,
  isAdmin,
  isEditor,
  isPostAuthor,
  postsFunctions,
}) => {
  const {
    deletePost,
    saveEditedPost,
    openEditPostMode,
    setPostContent,
    returnToBlog,
  } = postsFunctions;

  return (
    <>
      <h2>{title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{author}</p>
      {!editPostMode && <p>{content}</p>}
      {editPostMode && (
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      )}
      {editPostMode && (
        <button onClick={saveEditedPost}>Save Edited Post</button>
      )}

      {(isAdmin || isPostAuthor) && !editPostMode && (
        <button onClick={deletePost}>Eliminar Post</button>
      )}
      {(isEditor || isPostAuthor) && !editPostMode && (
        <button onClick={openEditPostMode}>Editar Post</button>
      )}
    </>
  );
};

export default ContentSection;
