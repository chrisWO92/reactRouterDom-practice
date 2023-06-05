import React from "react";

const CommentAdition = ({ newComment, setNewComment, addComment }) => {
  return (
    <>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Agregar Comentario</button>
    </>
  );
};

export default CommentAdition;
