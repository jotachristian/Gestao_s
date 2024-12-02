import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Coordenacao = () => {
  const [selectedMenu, setSelectedMenu] = useState("Cadastro");

  return (
    <div className="flex h-screen">
      <Sidebar
        role="coordenacao"
        selected={selectedMenu}
        onMenuClick={setSelectedMenu}
      />

      {/* Conteúdo Principal */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">Bem-vindo, Coordenador!</h1>
      </div>
    </div>
  );
};

export default Coordenacao;
