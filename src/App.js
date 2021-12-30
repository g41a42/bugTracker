import React from "react";
import "./css/reset.css";
import Home from "./abas/home.js";
import Cria from "./abas/CriaProjetos.js";
import Nav from "./abas/nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/Criar" element={<Cria />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
