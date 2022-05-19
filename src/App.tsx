import "./App.css";

import { Route, Routes } from "react-router-dom";

import Busqueda from "./containers/Busqueda";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Busqueda />} />
    </Routes>
  );
}

export default App;
