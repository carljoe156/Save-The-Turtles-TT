import React from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
