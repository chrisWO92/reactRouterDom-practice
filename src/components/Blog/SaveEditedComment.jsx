import React from "react";

const SaveEditedComment = ({
  comment,
  editCommentMode,
  editedComment,
  setEditedComment,
  saveEditedComment,
}) => {
  return (
    <>
      {editCommentMode && (
        <>
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={() => saveEditedComment(comment.comment)}>
            Guardar Cambios
          </button>
        </>
      )}
    </>
  );
};

export default SaveEditedComment;
