import { useEffect, useReducer, useState } from "react";

import {blogdata} from '../blogdata'
import { useAuth } from "./auth";


const useLocalStorage = (postsObjectName, defaultPostsObject) => {
 /*  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [sinc, setSinc] = useState(false); */

  let actualPostsArray = [...defaultPostsObject]
  //const auth = useAuth();

  const initialState = {
    posts: [],
    error: "",
    sinc: false
  }

  const actionTypes = {
    sinc: 'SINC',
    success: 'SUCCESS',
    error: 'ERROR'
  }

  const reducerObject = (state, payload) => ({
    [actionTypes.sinc]: {...state, sinc: true},
    [actionTypes.success]: {...state, posts: payload},
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

  const onSinc = () => {
    dispatch({type: actionTypes.sinc})
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

        //si no existe le asigna el array definido por defecto (blogdata)
        if (!localStorageItem || JSON.parse(localStorageItem).length === 0) {
          localStorage.setItem(postsObjectName, JSON.stringify(defaultPostsObject));
          parsedPosts = defaultPostsObject;
        //si existe, lo carga en el array de datos luego de parsearlo
        } else {
          parsedPosts = JSON.parse(localStorageItem);
        }
        let posts = parsedPosts

        /* posts = posts.map((post) => {
          let i = 0
          post.key = i
          i++
        }) */

        onSuccess(posts);
        onSinc();
        console.log(posts);
        console.log(posts.length);
        console.log(sinc);
      }, 2000);
    } catch (error) {
      onError(error);
    }
  }, [sinc]);

  const savePost = (newPostsObject) => {
    try {
      //vuelve un string el objeto a guardar en localStorage
      const stringifiedPosts = JSON.stringify(newPostsObject);
      //guarda en localStorage
      localStorage.setItem(postsObjectName, stringifiedPosts);
      //
      onSuccess(newPostsObject);
      onSinc();
      console.log(posts);
      console.log(sinc)
    } catch (error) {
      onError(error);
    }
  };

  return { posts, savePost };
};

export default useLocalStorage;
