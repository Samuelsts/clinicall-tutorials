import { useNavigate } from "react-router-dom";

export function ResetUserButton() {
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.removeItem("clinicall_user");
    navigate(0); // Recarrega a página
  };

  return (
    <button
      onClick={handleReset}
      className="hover:bg-web/70 px-2 py-3 mt-2 sm:mt-1 rounded-md text-blcg text-sm hover:text-red-600  hover:text-red-800"
    >
      Redefinir dados do usuário
    </button>
  );
}
