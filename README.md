# 🖥️ ClinicAll Tutoriais

Plataforma web criada para exibir tutoriais em vídeo e texto dos sistemas **Clinic All Web** e **Clinic All Desktop**.

Desenvolvido em React com Vite, TypeScript e TailwindCSS, com foco em uma interface moderna, simples e funcional.

---

## 🛠️ Funcionalidades

- Modal inicial obrigatório para cadastro de **Nome** e **Razão Social**
- Escolha entre versão **Web** ou **Desktop**
- Redirecionamento automático com base na seleção (salva no `localStorage`)
- Páginas separadas com tutoriais organizados por módulos do sistema
- Player de vídeo integrado (YouTube)
- Layout responsivo e clean
- Estrutura preparada para futuras melhorias (autenticação, busca, ads, etc.)

---

## 🧠 Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/en/main)

---

## 📁 Estrutura de Pastas
src/ 
├── components/ # Componentes reutilizáveis 
│ ├── Modal/ # Modal inicial com formulário 
│ ├── Header/ # Cabeçalho com links de navegação 
│ ├── Footer/ # Rodapé da aplicação 
│ └── VideoCard/ # Componente para exibir vídeos 
├── pages/
│ ├── WebVersion/ # Página com tutoriais do sistema Web 
│ └── DesktopVersion/ # Página com tutoriais do sistema Desktop 
├── hooks/ # Hooks personalizados (futuramente) 
├── contexts/ # Contextos globais (futuramente) 
├── utils/ # Funções auxiliares 
└── assets/ # Imagens e ícones

📌 Observações
As informações preenchidas no modal são salvas localmente no navegador (localStorage)

Ainda não há banco de dados ou autenticação (planejado para o futuro)

O projeto está em constante evolução, com novas funcionalidades sendo adicionadas gradativamente

🧑‍💻 Desenvolvido por
SAM</>
Suporte Técnico e Desenvolvedor Web
LinkedIn (em breve)
Portfólio (em breve)


