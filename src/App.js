import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
