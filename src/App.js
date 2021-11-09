import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import LearnMore from "./pages/LearnMore";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/learn-more" element={<LearnMore />} />
      </Routes>
    </>
  );
};

export default App;
