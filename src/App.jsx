import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPostForm from "./features/AddPostForm";
import PostsList from "./features/PostsList";
import BlogHeader from "./features/BlogHeader";
import CreatePost from "./features/CreatePost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen ">
      <BlogHeader />
      <AddPostForm />
      <PostsList />
    </div>

    // errors:
    // 1. edit not working
    // 2. Delete not working
    // 3.Toastify  not working
  );
}

export default App;
