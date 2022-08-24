import "reflect-metadata";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsView from "./views/PostsView";
import UserView from "./views/UserView";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserView />} />
        <Route path="/posts" element={<PostsView />} />
      </Routes>
    </BrowserRouter>
  );
}
