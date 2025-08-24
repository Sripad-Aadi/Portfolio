
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Body from "./components/body";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} /> {/* Home is rendered inside Outlet */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
