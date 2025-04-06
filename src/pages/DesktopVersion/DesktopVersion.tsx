// src/pages/DesktopVersion.tsx

import { desktopTutorials } from "../../utils/tutorials";
import ModuleAccordion from "../../components/ModuleAccordion/ModuleAccordion";
import VersionSwitcher from "../../components/Header/VersionSwitcher";
import { ResetUserButton } from "../../components/Header/ResetUserButton";
import { WelcomeHeader } from "../../components/Header/WelcomeHeader";
import DesktopIcon from "../../assets/icons/desktop.svg";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const DesktopVersion = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <header className="w-72 bg-desktop/90 text-white py-6 shadow-sm flex-shrink-0">
        <div className="px-4 flex flex-col items-center">
          <img
            src={DesktopIcon}
            alt="Versão Desktop"
            className="w-20 h-auto p-4 mb-1 m-auto bg-backgroundAlt rounded-full shadow-xl"
          />
          <h1 className="text-support text-xl font-bold text-center">Clinic All - Versão Desktop</h1>
          <p className="text-support text-xs text-center mt-1 mb-4">
            Tutoriais para usuários da versão desktop do sistema.
          </p>
          <VersionSwitcher />
          <div className="mt-4">
            <ResetUserButton />
          </div>
        </div>
        <Footer />
      </header>

      <div className="min-h-screen mx-auto bg-gray-50 relative watermark">
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <main className="relative z-10 flex-1 px-6 py-8 overflow-y-auto">
            <WelcomeHeader
              pageTitle="Plataforma de Tutoriais da Versão Desktop"
              pageDescription="Explore os tutoriais que vão te ajudar a dominar o Clinic All Desktop com agilidade."
            />
            {desktopTutorials.map((modulo, index) => (
              <ModuleAccordion
                key={index}
                module={modulo.module}
                description={modulo.description}
                videos={modulo.videos}
              />
            ))}
          </main>
        </motion.main>
      </div>
    </div>
  );
};

export default DesktopVersion;

