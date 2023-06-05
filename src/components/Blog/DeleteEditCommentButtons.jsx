import React from "react";

const DeleteEditCommentButtons = ({
    comment,
    editCommentMode,
    deleteComment,
    openEditCommentMode,}) => {
  
  return (
    <>
      {!editCommentMode && (
        <>
          <button
            onClick={() => {
              deleteComment(comment.comment);
            }}
          >
            Eliminar comentario
          </button>
          <button
            onClick={() => {
              openEditCommentMode(comment.comment);
            }}
          >
            Editar comentario
          </button>
        </>
      )}
    </>
  );
};

export default DeleteEditCommentButtons;
