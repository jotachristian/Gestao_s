import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de autenticação
    const user = { role: "docente", name: "Turiano Santos" }; // Exemplo: papel "docente"
    localStorage.setItem("user", JSON.stringify(user)); // Salva usuário no localStorage

    // Redireciona com base no papel do usuário
    switch (user.role) {
      case "docente":
        navigate("/docente");
        break;
      case "coordenacao":
        navigate("/coordenacao");
        break;
      case "gestao":
        navigate("/gestao");
        break;
      case "setor-compras":
        navigate("/setor-compras");
        break;
      default:
        navigate("/login");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" p-8 rounded shadow-md w-96">
        <h1 className="text-4xl">Login</h1>
        <p className="text-cyan-300">Essa é a tela de Login que o Francisco deve fazer KKKKKK!</p>
        <input
          type="text"
          placeholder="Usuário"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
