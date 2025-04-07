import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Feito com React, Tailwind e um leve desespero existencial.",
  "Desenvolvido com 💙 e algumas abas do Stack Overflow, ChatGPT, Youtube ....",
  "Muita IA aqui… e um dev tentando acertar.",
  "Codado com amor... e alguns commits suspeitos.",
  "Plataforma 100% livre de bugs (ou quase!).",
  "Feito com 💙, insomnia e refatorações que ninguém pediu.",
  "Desenvolvido por um dev que jurou que ia dormir cedo.",
  "Desenvolvido com 💙 e o poder de um Ctrl+Z bem usado.",
  "Foram necessárias algumas (ou muitas) chicaras de café.",
];


export function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="text-xs text-center text-web mt-8 p-6 relative sm:mt-1">
      <div className="h-6 mb-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={phrases[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 right-0"
          >
            {`"${phrases[currentIndex]}"`}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 ">
        <a
          href="https://github.com/Samuelsts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-web hover:text-desktop transition"
        >
          <FaGithub size={18} />
        </a>
        <p className="text-xs">v1.0.0 — Desenvolvido por SAM{'</>'}</p>
      </div>
    </footer>
  );
}