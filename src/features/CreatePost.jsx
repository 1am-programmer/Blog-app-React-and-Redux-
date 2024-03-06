import React from "react";
import { useState, useRef } from "react";
import { editBlog, saveEdit, delBlog } from "../Redux/post";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CreatePost = ({ props }) => {
  const blogText = useRef(null);

  const [edit, setedit] = useState(false);
  const dispatch = useDispatch();

  const editBlogPost = () => {
    setedit(!edit);
    dispatch(editBlog(props.id));
  };
  const saveBlogEdit = () => {
    setedit(!edit);
    if (blogText.current.innerText.length < 10) {
      blogText.current.innerText = props.text;
      return toast.warning("Blog should be 10 characters or more");
    }
    dispatch(saveEdit({ id: props.id, text: blogText.current.innerText }));
  };

  const handleEdit = () => {
    !edit ? editBlogPost() : saveBlogEdit();
  };

  const deleteBlogPost = () => {
    dispatch(delBlog(props.id));
  };
  return (
    <div className=" pt-10 container mx-auto border-[1px] rounded-md border-grey">
      <div className="flex items-center">
        <img src="src/assets/images/user-icon.png" className="h-10 w-10" />
        <p>
          <strong> Blog user</strong>
        </p>
      </div>

      <div>
        <p
          className=""
          contentEditable={props.isCompleted}
          type="text"
          ref={blogText}
          // onInput={handleChange}
        >
          {props.text}
        </p>

        <button
          className="border-none underline bg-transparent"
          onClick={handleEdit}
        >
          {edit ? "Save Edit" : "Edit Post"}
        </button>
        <button
          className="border-none underline bg-transparent"
          onClick={deleteBlogPost}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
