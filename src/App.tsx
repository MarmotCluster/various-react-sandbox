import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Navigation from "./components/Navigation";
import PageUseMemo from "./components/pages/PageUseMemo";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/usememo" element={<PageUseMemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
