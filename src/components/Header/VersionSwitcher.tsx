import { Link, useLocation } from "react-router-dom";

const VersionSwitcher = () => {
  const location = useLocation();
  const isOnWebPage = location.pathname.includes("web");
  const isOnDesktopPage = location.pathname.includes("desktop");

  return (
    <div className="mt-4">
      {isOnWebPage && (
        <Link
          to="/desktop"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Ir para Versão Desktop
        </Link>
      )}

      {isOnDesktopPage && (
        <Link
          to="/web"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ir para Versão Web
        </Link>
      )}
    </div>
  );
};

export default VersionSwitcher;
