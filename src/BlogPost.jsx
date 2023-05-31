import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find((post) => post.slug === slug);

  const auth = useAuth();

  const returnToBlog = () => {
    navigate("/blog");
  };

  const canDelete = auth.user?.isAdmin || auth.user?.username === blogpost.author

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && <button>Eliminar Post</button>}
    </>
  );
};

export default BlogPost;
