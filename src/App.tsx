import React, { Suspense } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import router from "./configs/router";

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
