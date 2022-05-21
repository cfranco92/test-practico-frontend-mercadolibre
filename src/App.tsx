import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import CajaBusqueda from "./containers/CajaBusqueda";
import Header from "./components/Header";
import ResultadosBusqueda from "./containers/ResultadosBusqueda";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<CajaBusqueda />} />
          <Route path="/items?search=" element={<ResultadosBusqueda />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
