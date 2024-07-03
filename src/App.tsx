import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
