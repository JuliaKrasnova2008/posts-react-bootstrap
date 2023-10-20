import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      let posts = action.payload;
      state.posts = posts;
    },
  },
});

export default articlesSlice.reducer; //экспортируем хранилище
export const { setPosts } = articlesSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
