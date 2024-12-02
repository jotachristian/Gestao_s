import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Docente from "./pages/docente.jsx";
import Coordenacao from "./pages/coordenacao.jsx";
import Gestao from "./pages/gestao.jsx";
import SetorCompras from "./pages/setordecompras.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/docente"
          element={
            <ProtectedRoute allowedRoles={["docente"]}>
              <Docente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordenacao"
          element={
            <ProtectedRoute allowedRoles={["coordenacao"]}>
              <Coordenacao />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gestao"
          element={
            <ProtectedRoute allowedRoles={["gestao"]}>
              <Gestao />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setordecompras"
          element={
            <ProtectedRoute allowedRoles={["setor-compras"]}>
              <SetorCompras />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
