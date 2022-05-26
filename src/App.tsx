import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CajaBusqueda from "./containers/CajaBusqueda";
import DetalleProducto from "./containers/DetalleProducto";
import Header from "./components/Header";
import ResultadosBusqueda from "./containers/ResultadosBusqueda";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<CajaBusqueda />} />
          <Route path="/items" element={<ResultadosBusqueda />} />
          <Route path="/items/:productId" element={<DetalleProducto />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
