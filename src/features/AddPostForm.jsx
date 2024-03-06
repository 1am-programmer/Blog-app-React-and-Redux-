import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import PostsList from "./PostsList";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addtoBlog } from "../Redux/post";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { ToastCointaner, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AddPostForm = () => {
  const [Text, setText] = useState("");
  const dispatch = useDispatch();

  function handleInput(typing) {
    setText(typing.target.value);
  }

  function addPost() {
    if (Text === "" || Text.length < 10) {
      toast.warning("Post should be atleast 10 characters");
      // alert("Minimum of 10 characters");
      // return
    } else {
      dispatch(addtoBlog({ id: uuid(), text: Text, isCompleted: false }));
    }
    // toast.success("Post added successfully");

    setText("");
  }
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      <div className="flex items-start gap-4 pt-10 container mx-auto">
        <textarea
          type="text"
          placeholder="What's on your mind?"
          class="flex-1  p-3 rounded-md
           border border-gray-400 text-start min-h-[200px]"
          value={Text}
          onInput={handleInput}
        ></textarea>

        <button
          className="border-black bg-blue-600 text-white font-bold"
          onClick={addPost}
        >
          Add a Post
          {/* <Link to="/PostsList">Add Post</Link> */}
          {/* <a href="PostsList">Add a Post</a> */}
        </button>
      </div>
      {/* <div id="Toast">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}
    </div>
  );
};

export default AddPostForm;
