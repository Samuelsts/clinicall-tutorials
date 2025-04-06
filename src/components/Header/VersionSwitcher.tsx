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
          className="inline-block text-desktop hover:text-desktop rounded hover:bg-background transition mb-2 py-3 px-2"
        >
          Ir para Versão Desktop
        </Link>
      )}

      {isOnDesktopPage && (
        <Link
          to="/web"
          className="inline-block px-4 py-2  text-support rounded hover:bg-desktop transition"
        >
          Ir para Versão Web
        </Link>
      )}
    </div>
  );
};

export default VersionSwitcher;
