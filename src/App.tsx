import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FetchFlight from "./components/FetchFlight";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<FetchFlight />} />
        <Route path={`/details/:id`} element={<Details />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>404-Page not Found</h2>
            </div>
          }
        />
        {/* <Route path="/" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
