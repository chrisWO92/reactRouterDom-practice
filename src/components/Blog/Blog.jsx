import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../CustomHooks/auth";
import BlogLink from "../Blog/BlogLink";
import CreatePostButton from "../Blog/CreatePostButton";

const Blog = ({ posts }) => {

  const auth = useAuth();
  const isAuthor = auth.user?.isAuthor;

  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>

      {isAuthor && <CreatePostButton />}

      <Outlet />
    </>
  );
};

export default Blog;
