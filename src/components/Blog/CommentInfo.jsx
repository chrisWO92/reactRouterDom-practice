import React from "react";

const CommentInfo = ({ comment, editCommentMode }) => {
  return (
    <>
      <p>{comment.username}:</p>
      {!editCommentMode && <p>{comment.comment}</p>}
    </>
  );
};

export default CommentInfo;
