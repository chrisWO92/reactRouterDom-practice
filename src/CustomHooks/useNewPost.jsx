import { useReducer, useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const useNewPost = ({ posts, savePost }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const initialState = {
    title: "",
    slug: "",
    content: "",
  }

  const actionTypes = {
    title: 'TITLE',
    slug: 'SLUG',
    content: 'CONTENT',
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.title]: {...state, title: payload,},
    [actionTypes.slug]: {...state, slug: payload,},
    [actionTypes.content]: {...state, content: payload,},
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const { title, slug, content, } = state
  
  const onTitle = (title) => {
    dispatch({type: actionTypes.title, payload: title})
  }

  const onSlug = (slug) => {
    dispatch({type: actionTypes.slug, payload: slug})
  }

  const onContent = (content) => {
    dispatch({type: actionTypes.content, payload: content})
  }

  const createPost = () => {
    const newPosts = [...posts];
    newPosts.push({
      title: title,
      slug: slug,
      content: content,
      author: auth.user.username,
      comments: [],
    });
    savePost(newPosts);
    navigate("/blog");
  };

  return {onTitle, onContent, onSlug, createPost, state};
};

export default useNewPost;
