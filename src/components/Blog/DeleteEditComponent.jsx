import React from "react";
import DeleteEditCommentButtons from "./DeleteEditCommentButtons";

const DeleteEditCommentButtons = ({
  comment,
  editCommentMode,
  deleteComment,
  openEditCommentMode, }) => {

  return (
    <>
      {!editCommentMode && (
        <DeleteEditCommentButtons
          comment={comment}
          deleteComment={deleteComment}
          openEditCommentMode={openEditCommentMode}
        />
      )}
    </>
  );
};

export default DeleteEditCommentButtons;
