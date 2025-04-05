// src/pages/WebVersion.tsx
import { webTutorials } from "../../utils/tutorials";
import ModuleAccordion from "../../components/ModuleAccordion/ModuleAccordion";
import VersionSwitcher from "../../components/Header/VersionSwitcher";

const WebVersion = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Clinic All - Versão Web</h1>
          <p className="text-sm text-blue-100">Tutoriais para usuários da versão web do sistema.</p>
          <VersionSwitcher />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {webTutorials.map((modulo, index) => (
          <ModuleAccordion
            key={index}
            module={modulo.module}
            description={modulo.description}
            videos={modulo.videos}
          />
        ))}
      </main>
    </div>
  );
};

export default WebVersion;
