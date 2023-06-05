import React from "react";
import { Link } from "react-router-dom";

const CreatePostButton = () => {
  return (
    <button>
      <Link to={"/blog/create-post"}>Create Post</Link>
    </button>
  );
};

export default CreatePostButton;
