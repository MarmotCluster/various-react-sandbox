<<<<<<< HEAD
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
=======
import React, { Suspense } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import PageUseMemo from "./pages/PageUseMemo";
import OnKeydownFocus from "./pages/OnKeydownFocus";
import PageUseCallback from "./pages/PageUseCallback";
import PageImageSlide from "./pages/PageImageSlide";
import SVGopoy from "./components/SVGopoy";
import DirectMemo from "./pages/DirectMemo";
import router from "./configs/router";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {router.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
>>>>>>> e64fcc2 (feat: :sparkles: tested recoil)
