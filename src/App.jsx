import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
