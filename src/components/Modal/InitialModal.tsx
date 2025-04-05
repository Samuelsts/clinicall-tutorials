import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function InitialModal() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  // Verifica se os dados já estão salvos no localStorage
  useEffect(() => {
    const userData = localStorage.getItem("clinicall_user");
  
    if (!userData) {
      setIsModalOpen(true);
    } else {
      const { version } = JSON.parse(userData);
  
      // Redireciona somente se o usuário está na raiz "/"
      if (window.location.pathname === "/") {
        navigate(`/${version}`);
      }
    }
  }, [navigate]);

  // Valida e salva no localStorage, depois redireciona
  const handleSelectVersion = (version: "web" | "desktop") => {
    if (!name || !company) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const userData = {
      name,
      company,
      version,
    };

    localStorage.setItem("clinicall_user", JSON.stringify(userData));
    setIsModalOpen(false);
    navigate(`/${version}`);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Bem-vindo à Plataforma</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Nome:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Razão Social:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => handleSelectVersion("web")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-[48%]"
          >
            Versão Web
          </button>
          <button
            onClick={() => handleSelectVersion("desktop")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-[48%]"
          >
            Versão Desktop
          </button>
        </div>
      </div>
    </div>
  );
}