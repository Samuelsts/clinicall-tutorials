// src/pages/WebVersion.tsx
import { webTutorials } from "../../utils/tutorials";
import ModuleAccordion from "../../components/ModuleAccordion/ModuleAccordion";
import VersionSwitcher from "../../components/Header/VersionSwitcher";
import { ResetUserButton } from "../../components/Header/ResetUserButton";
import { WelcomeHeader } from "../../components/Header/WelcomeHeader";
import WebIcon from "../../assets/icons/web.svg";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const WebVersion = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row">
      <header className="w-full sm:w-60 bg-brand text-white py-6 shadow-sm flex-shrink-0">
        <div className="px-4 flex flex-col items-center">
          <img
            src={WebIcon}
            alt="Versão Web"
            className="w-16 sm:w-20 h-auto p-4 mb-2 m-auto bg-backgroundAlt rounded-full shadow-xl"
          />
          <h1 className="text-desktop text-lg sm:text-xl font-bold text-center">
            Clinic All - Versão Web
          </h1>
          <p className="text-desktop text-xs text-center mt-1 mb-4">
            Tutoriais para usuários da versão web do sistema.
          </p>
          <VersionSwitcher />
          <div className="mt-4">
            <ResetUserButton />
          </div>
        </div>
        <Footer />
      </header>

      <div className="flex-1 bg-gray-50 relative watermark w-full">
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 py-8 w-full"
        >
          <main className="relative z-10 px-2 sm:px-6 py-6 overflow-y-auto">
            <WelcomeHeader
              pageTitle="Plataforma de Tutoriais da Versão Web"
              pageDescription="Aqui você encontra vídeos e instruções para utilizar o sistema Clinic All Web com mais facilidade."
            />
            {webTutorials.map((modulo, index) => (
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

export default WebVersion;