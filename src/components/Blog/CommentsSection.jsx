import React from "react";
import CommentInfo from "./CommentInfo";
import DeleteEditCommentButtons from "./DeleteEditCommentButtons";
import SaveEditedComment from "./SaveEditedComment";
import CommentAdition from "./CommentAdition";

const CommentsSection = ({
  comments,
  editCommentMode,
  editedComment,
  isUser,
  user,
  newComment,
  commentsFunctions,
}) => {
  const {
    addComment,
    saveEditedComment,
    deleteComment,
    openEditCommentMode,
    setEditedComment,
    setNewComment,
  } = commentsFunctions;

  return (
    <>
    
      {comments.map((comment) => {
        return (
          <>
            <CommentInfo comment={comment} editCommentMode={editCommentMode} />

            {isUser && user.username === comment.username && (
              <>
                <DeleteEditCommentButtons
                  comment={comment}
                  editCommentMode={editCommentMode}
                  deleteComment={deleteComment}
                  openEditCommentMode={openEditCommentMode}
                />
                <SaveEditedComment
                  comment={comment}
                  editCommentMode={editCommentMode}
                  editedComment={editedComment}
                  setEditedComment={setEditedComment}
                  saveEditedComment={saveEditedComment}
                />
              </>
            )}

          </>
        );
      })}

      {isUser && user && (
        <CommentAdition
          newComment={newComment}
          setNewComment={setNewComment}
          addComment={addComment}
        />
      )}
    </>
  );
};

export default CommentsSection;
