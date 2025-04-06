import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebIcon from "../../assets/icons/web.svg";
import DesktopIcon from "../../assets/icons/desktop.svg";

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
    window.location.reload(); // força o reload da página (estava com bug nao carregando o nome do usuario)
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#EDEDED] backdrop-blur-md flex items-center justify-center z-50 text-blc2">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Bem-vindo à Plataforma</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Nome:</label>
          <input
            type="text"
            className="w-full border border-border rounded-lg p-2 mt-1 focus:border-brand focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">Razão Social:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:border-brand focus:outline-none"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="w-full mb-2 text-sm text-center">Escolha a versão do Sistema</div>
        <div className="flex justify-between">
          <button
            onClick={() => handleSelectVersion("web")}
            className="bg-background hover:bg-web text-desktop font-bold px-4 py-2 rounded-lg w-[48%] transition ease-in duration-200"
          >
            <img src={WebIcon} alt="Versão Desktop" className="w-10 h-auto mb-1 m-auto" />
            Versão Web
          </button>
          <button
            onClick={() => handleSelectVersion("desktop")}
            className="bg-background hover:bg-web text-desktop font-bold px-4 py-2 rounded-lg w-[48%] transition ease-in duration-200"
          >
            <img src={DesktopIcon} alt="Versão Desktop" className="w-10 h-auto mb-1 m-auto" />
            Versão Desktop
          </button>
        </div>
      </div>
    </div>
  );
}