//store.js
import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/post/postSlice";

const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});

export default store;
