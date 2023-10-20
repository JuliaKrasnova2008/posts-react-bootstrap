import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
  //
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
