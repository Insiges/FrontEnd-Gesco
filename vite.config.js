import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true, // Ativa o uso de variáveis globais (como `describe`, `it`, etc.)
		environment: "jsdom", // Usa `jsdom` para simular o navegador
		setupFiles: "./setupTests.js", // O arquivo de setup para rodar antes dos testes
	},
});
