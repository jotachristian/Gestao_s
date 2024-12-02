import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Docente = () => {
  const [activeTab, setActiveTab] = useState("cursos"); // Estado para controlar o botão ativo

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Atualiza o estado para o botão clicado
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar role="docente" onSectionClick={(section) => console.log(`Setor selecionado: ${section}`)} />

      {/* Conteúdo Principal */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Olá <span className="font-bold shadow-lg">Turiano</span>
        </h1>

        {/* Botões para alternar entre Cursos e Status */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "cursos" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick("cursos")}
          >
            Cursos
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "status" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick("status")}
          >
            Status
          </button>
        </div>

        {/* Conteúdo Condicional */}
        {activeTab === "cursos" ? (
          <div className=" p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Cursos Vigentes</h2>
            <ul>
              <li className="mb-2">Técnico em Informática para Internet</li>
              <li className="mb-2">Técnico em Costura</li>
              <li className="mb-2">Técnico de Panificação</li>
              <li className="mb-2">Técnico de Administração</li>
            </ul>
            <h2 className="text-lg font-bold mt-6 mb-4">Cursos Concluídos</h2>
            <div className="flex items-center space-x-2 mb-4">
              <input type="date" className="border rounded p-2" />
              <span>a</span>
              <input type="date" className="border rounded p-2" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Buscar</button>
          </div>
        ) : (
          <div className="p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Em Andamento</h2>
            <ul>
              <li className="mb-2">Técnico em Informática - Nível B - Em Análise</li>
              <li className="mb-2">Excel Avançado - Nível B - Em Análise</li>
            </ul>
            <h2 className="text-lg font-bold mt-6 mb-4">Concluídos</h2>
            <div className="flex items-center space-x-2 mb-4">
              <input type="date" className="border rounded p-2" />
              <span>a</span>
              <input type="date" className="border rounded p-2" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Buscar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Docente;
