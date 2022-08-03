import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Navigation from "./components/Navigation";
import PageUseMemo from "./components/pages/PageUseMemo";
import OnKeydownFocus from "./components/pages/OnKeydownFocus";
import PageUseCallback from "./components/pages/PageUseCallback";
import PageImageSlide from "./components/pages/PageImageSlide";
import SVGopoy from "./components/SVGopoy";
import DirectMemo from "./components/pages/DirectMemo";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/usememo" element={<PageUseMemo />} />
        <Route path="/focus" element={<OnKeydownFocus />} />
        <Route path="/usecallback" element={<PageUseCallback />} />
        <Route path="/imageslide" element={<PageImageSlide />} />
        <Route path="/opoy" element={<SVGopoy />} />
        <Route path="/direct" element={<DirectMemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
