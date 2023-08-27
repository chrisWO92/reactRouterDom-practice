import React from "react";
import EditComponent from "./EditComponent";

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
      {!editPostMode && (isEditor || isPostAuthor) && (
        <button onClick={openEditPostMode}>Editar Post</button>
      )}
      {editPostMode && (
        <EditComponent 
          postContent={postContent}
          setPostContent={setPostContent}
          saveEditedPost={saveEditedPost}
        />
      )}

      {(isAdmin || isPostAuthor) && !editPostMode && (
        <button onClick={deletePost}>Eliminar Post</button>
      )}
      
    </>
  );
};

export default ContentSection;
