import React from "react";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";

const PostsList = () => {
  const blogs = useSelector((state) => state.posts.posts);
  return (
    <div className=" pt-10 container mx-auto">
      {/* Foreach blog,pass the blog as props */}
      {blogs.map((blog) => {
        return <CreatePost props={blog} />;
      })}
    </div>
  );
};

export default PostsList;
