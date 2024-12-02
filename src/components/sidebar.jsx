import React, { useState } from "react";
import DocenteIcon from "../assets/icons/docente.svg";
import CoordenacaoIcon from "../assets/icons/coordenacao.svg";
import GestaoIcon from "../assets/icons/gestao.svg";
import SetorComprasIcon from "../assets/icons/setor-compras.svg";

const Sidebar = ({ role, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu em dispositivos móveis

  const menuItems = [
    { title: "Docente", icon: DocenteIcon, role: "docente" },
    { title: "Coordenação", icon: CoordenacaoIcon, role: "coordenacao" },
    { title: "Gestão", icon: GestaoIcon, role: "gestao" },
    { title: "Setor de Compras", icon: SetorComprasIcon, role: "setor-compras" },
  ];

  return (
    <>
      {/* Botão do Menu Sanduíche para dispositivos móveis */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <span className="material-icons">...</span>
      </button>

      {/* Overlay para dispositivos móveis */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:h-[1000px] inset-y-0 left-0 bg-blue-700 rounded-r-xl w-full mt-0 md:mt-10 md:w-72 pr-12 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-auto`}
      >
        {/* Botão de Fechar para dispositivos móveis */}
        <button
          className="md:hidden text-white mb-6"
          onClick={() => setIsOpen(false)}
        >
          <span className="material-icons">X</span>
        </button>

        {/* Itens do Menu */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {menuItems.map((item) => (
              <button
                key={item.role}
                className={`flex items-center justify-between m-4 p-2 w-full text-white ${
                  item.role === role
                    ? "bg-blue-900 border-2 border-gray-100 rounded-xl"
                    : "opacity-50"
                } hover:bg-blue-800 transition border border-blue-500 rounded-xl`}
                disabled={item.role !== role}
                onClick={() => {
                  onSectionClick(item.role);
                  setIsOpen(false); // Fecha o menu após a seleção
                }}
              >
                {/* Nome do Setor */}
                <span className="text-lg font-semibold">{item.title}</span>
                {/* Ícone do Setor */}
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-blue-800 text-white flex items-center">
            <div className="w-10 h-10 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-blue-700 font-bold">T</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Turiano Santos</p>
              <p className="text-xs">Docente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
