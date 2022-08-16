import { BrowserRouter, Route, Routes } from "react-router-dom";
import OtherView from "./views/OtherView";
import UserView from "./views/UserView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserView />} />
        <Route path="/other" element={<OtherView />} />
      </Routes>
    </BrowserRouter>
  );
}
