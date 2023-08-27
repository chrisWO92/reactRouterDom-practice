import React from 'react'

const DeleteEditCommentButtons = ({comment, deleteComment, openEditCommentMode}) => {
  return (
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
  )
}

export default DeleteEditCommentButtons