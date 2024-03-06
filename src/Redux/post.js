import { createSlice } from "@reduxjs/toolkit";

let baseState = {
  posts: [],
};
const newState = createSlice({
  name: "posts",
  initialState: baseState,
  reducers: {
    addtoBlog: (state, action) => {
      state.posts.push(action.payload);
    },
    // to edit post
    editBlog: (state, action) => {
      state.posts = state.posts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    },
    // To save edited post
    saveEdit: (state, action) => {
      state.posts = state.posts.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, text: action.payload.text };
        }
        return item;
      });
    },
    delBlog: (state, action) => {
      state.posts = state.posts.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addtoBlog, editBlog, delBlog, saveEdit } = newState.actions;
//To export the methods in the reducer

export default newState.reducer;
//To export the whole Slice
