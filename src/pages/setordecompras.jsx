import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const SetorCompras = () => {
  const [selectedMenu, setSelectedMenu] = useState("Pedidos");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        role="setor-compras"
        selected={selectedMenu}
        onMenuClick={setSelectedMenu}
      />

      {/* Conteúdo Principal */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">Setor de Compras</h1>
      </div>
    </div>
  );
};

export default SetorCompras;
