import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import MiniHome from "./pages/MiniHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/minihome" element={<MiniHome />} />
      </Routes>
    </>
  );
}

export default App;
