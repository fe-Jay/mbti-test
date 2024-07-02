import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Home = React.lazy(() => import("./pages/Home"));
const Question = React.lazy(() => import("./pages/Question"));
const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div>Loading</div>}>
                <h1>DOGEAR</h1>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />} />
                    <Route
                        path="/question"
                        element={<Question />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
