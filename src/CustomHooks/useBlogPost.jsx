import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const useBlogPost = ({ posts, savePost, user, slug }) => {
    
  const navigate = useNavigate();
  const blogpost = posts.find((post) => post.slug === slug);
  let index = posts.findIndex((post) => post.slug === slug);

  const initialState = {
    editPostMode: false,
    editCommentMode: false,
    postContent: "",
    newComment: "",
    commentIndex: null,
    editedComment: "",
  };

  const actionTypes = {
    setPostContent: "SET-POST-CONTENT",
    setNewComment: "SET-NEW-COMMENT",
    setEditedComment: "SET-EDITED-COMMENT",
    closeEditPostMode: "CLOSE-EDIT-POST-MODE",
    deletePost: "DELETE-POST",
    openEditPostMode: "EDIT-POST-MODE",
    openEditCommentMode: "OPEN-EDIT-COMMENT-MODE",
    closeEditCommentMode: "CLOSE-EDIT-COMMENT-MODE",
  };

  const reducerObject = (state, payload) => ({
    [actionTypes.setPostContent]: { ...state, postContent: payload },
    [actionTypes.setNewComment]: { ...state, newComment: payload },
    [actionTypes.setEditedComment]: { ...state, editedComment: payload },
    [actionTypes.deletePost]: { ...state, editedComment: payload },
    [actionTypes.closeEditPostMode]: { ...state, editPostMode: false },
    [actionTypes.closeEditCommentMode]: { ...state, editCommentMode: false },
    [actionTypes.openEditPostMode]: {
      ...state,
      postContent: payload,
      editPostMode: true,
    },
    [actionTypes.openEditCommentMode]: {
      ...state,
      editCommentMode: true,
      editedComment: payload,
      commentIndex: () => {
        return blogpost?.comments.findIndex((com) => payload === com);
      },
    },
  });

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    editPostMode,
    editCommentMode,
    postContent,
    newComment,
    commentIndex,
    editedComment,
  } = state;

  const deletePost = () => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    savePost(newPosts);
    navigate("/blog");
  };

  const saveEditedPost = () => {
    const newPosts = [...posts];
    newPosts[index].content = postContent;
    savePost(newPosts);
    dispatch({ type: actionTypes.closeEditPostMode });
  };

  const addComment = () => {
    const newPosts = [...posts];
    newPosts[index].comments.push({
      username: user.username,
      comment: newComment,
    });
    savePost(newPosts);
    dispatch({ type: actionTypes.setNewComment, payload: "" });
  };

  const saveEditedComment = (commentToSave) => {
    const newPosts = [...posts];
    let commentIndex = newPosts[index].comments.findIndex(
      (comment) => commentToSave === comment.comment
    );
    console.log(commentIndex);
    console.log(commentToSave);
    newPosts[index].comments[commentIndex].comment = editedComment;
    savePost(newPosts);
    dispatch({ type: actionTypes.closeEditCommentMode });
  };

  const deleteComment = (commentToDelete) => {
    const newPosts = [...posts];
    let commentIndex = newPosts[index].comments.findIndex(
      (comment) => commentToDelete === comment
    );
    newPosts[index].comments.splice(commentIndex, 1);
    savePost(newPosts);
  };

  const openEditPostMode = () => {
    dispatch({
      type: actionTypes.openEditPostMode,
      payload: blogpost?.content,
    });
  };

  const openEditCommentMode = (comment) => {
    dispatch({ type: actionTypes.openEditCommentMode, payload: comment });
  };

  const setPostContent = (content) => {
    dispatch({ type: actionTypes.setPostContent, payload: content });
  };

  const setEditedComment = (comment) => {
    dispatch({ type: actionTypes.setEditedComment, payload: comment });
  };

  const setNewComment = (comment) => {
    dispatch({ type: actionTypes.setNewComment, payload: comment });
  };

  const returnToBlog = () => {
    navigate("/blog");
  };

  const postsFunctions = {
    deletePost,
    saveEditedPost,
    openEditPostMode,
    setPostContent,
    returnToBlog,
  }

  const commentsFunctions = {
    addComment,
    saveEditedComment,
    deleteComment,    
    openEditCommentMode,    
    setEditedComment,
    setNewComment,
  }

  return {
    state,
    postsFunctions,
    commentsFunctions,    
  };
};

export default useBlogPost;
