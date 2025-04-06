type WelcomeHeaderProps = {
  pageTitle: string;
  pageDescription: string;
};

export function WelcomeHeader({ pageTitle, pageDescription }: WelcomeHeaderProps) {
  const userData = localStorage.getItem("clinicall_user");
  const user = userData ? JSON.parse(userData) : null;

  return (
    <div className="mb-8 px-4 md:px-8 text-blc2">
      <h2 className="text-2xl font-semibold">
        Olá, <span className="text-desktop">{user?.name || "Usuário"}</span>, bem vindo! 
        <span className="inline-block animate-wave origin-[70%_100%]">👋</span>
      </h2>
      <p className="text-sm text-gray-600 mb-8">
        Empresa: <strong>{user?.company || "Empresa"}</strong>
      </p>

      <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
      <p className="text-gray-700 text-base">{pageDescription}</p>
    </div>
  );
}