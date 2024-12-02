import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Gestao = () => {
  // Estado para controlar o menu selecionado
  const [selectedMenu, setSelectedMenu] = useState("Relatórios");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        role="gestao"
        selected={selectedMenu}
        onMenuClick={setSelectedMenu}
      />
      <h1 className="p-6">Olá Gestor</h1>
    </div>
  );
};

export default Gestao;
