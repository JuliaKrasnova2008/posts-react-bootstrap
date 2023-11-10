import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesReducer";
import usersReducer from "./slices/usersReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    users: usersReducer,
  },
  //
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
