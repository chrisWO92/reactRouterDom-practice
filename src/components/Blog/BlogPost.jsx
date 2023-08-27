import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../CustomHooks/auth";
import useProfiles from "../../CustomHooks/useProfiles";
import useBlogPost from "../../CustomHooks/useBlogPost";
import ContentSection from "../Blog/ContentSection";
import CommentsSection from "../Blog/CommentsSection";

const BlogPost = ({ posts, savePost }) => {

  const { slug } = useParams();

  const auth = useAuth();
  const user = auth?.user;

  const blogpost = posts.find((post) => post.slug === slug);
  
  const title = blogpost?.title
  const author = blogpost?.author
  const content = blogpost?.content
  const comments = blogpost?.comments

  const { isAdmin, isEditor, isPostAuthor, isUser } = useProfiles(blogpost);

  const { state, postsFunctions, commentsFunctions } = useBlogPost({
    posts,
    savePost,
    user,
    slug,
  });

  const {
    editPostMode,
    editCommentMode,
    postContent,
    newComment,
    editedComment,
  } = state;

  return (
    <>
      <ContentSection 
        title={title}
        author={author}
        content={content}
        editPostMode={editPostMode}
        postContent={postContent}
        isAdmin={isAdmin}
        isEditor={isEditor}
        isPostAuthor={isPostAuthor}
        postsFunctions={postsFunctions}
      />

      <CommentsSection 
        comments={comments}
        editCommentMode={editCommentMode}
        editedComment={editedComment}
        isUser={isUser}
        user={user}
        newComment={newComment}
        commentsFunctions={commentsFunctions}
      />
     
    </>
  );
};

export default BlogPost;
