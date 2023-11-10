import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../NavBar/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setPosts } from "../../redux/slices/articlesReducer";
import { useDispatch, useSelector } from "react-redux";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users/Users";
import Photos from "../../pages/Photos/Photos";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.articles.posts);
  //данные по постам
  useEffect(() => {
    if (!posts.length) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((json) => {
        dispatch(setPosts(json.data));
      });
    }
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
