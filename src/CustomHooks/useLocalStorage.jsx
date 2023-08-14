import { useEffect, useReducer, useState } from "react";
import {blogdata} from '../blogdata'


const useLocalStorage = (postsObjectName, defaultPostsObject) => {
 /*  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [sinc, setSinc] = useState(false); */

  let actualPostsArray = [...defaultPostsObject]


  const initialState = {
    posts: [],
    error: "",
    sinc: false
  }

  const actionTypes = {
    success: 'SUCCESS',
    error: 'ERROR'
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.success]: {...state, posts: payload, sinc: true},
    [actionTypes.error]: {...state, error: payload},
  })

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const { posts, error, sinc } = state
  
  const onSuccess = (posts) => {
    dispatch({type: actionTypes.success, payload: posts})
  }

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error})
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        //intenta obtener el item de localStorage
        const localStorageItem = localStorage.getItem(postsObjectName);
        let parsedPosts = [];

        //si no existe le asigna el array definido por defecto
        if (!localStorageItem) {
          localStorage.setItem(postsObjectName, JSON.stringify(defaultPostsObject));
          parsedPosts = defaultPostsObject;
          //si existe, lo carga en el array de datos luego de parsearlo
        } else {
          parsedPosts = JSON.parse(localStorageItem);
        }
        let posts = defaultPostsObject.concat(parsedPosts)
        onSuccess(posts);
      }, 2000);
    } catch (error) {
      onError(error);
    }
  }, [sinc]);

  const savePost = (newPostsObject) => {
    try {
      const stringifiedPosts = JSON.stringify(newPostsObject);
      localStorage.setItem(postsObjectName, stringifiedPosts);
      onSuccess(newPostsObject);
    } catch (error) {
      onError(error);
    }
  };

  return { posts, savePost };
};

export default useLocalStorage;
