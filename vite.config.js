import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", // Directori de sortida per al build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), // Pàgina principal
        buscarCangurs: path.resolve(__dirname, "src/pages/buscarCangurs.html"),
        chats: path.resolve(__dirname, "src/pages/chats.html"),
        configuracionPerfil: path.resolve(
          __dirname,
          "src/pages/configuracion-perfil.html"
        ),
        formulariAjuda: path.resolve(
          __dirname,
          "src/pages/formulariAjuda.html"
        ),
        formulariCangur: path.resolve(
          __dirname,
          "src/pages/formulariCangur.html"
        ),
        forumSolicitudes: path.resolve(
          __dirname,
          "src/pages/forum-solicitudes.html"
        ),
        login: path.resolve(__dirname, "src/pages/login.html"),
        perfilCanguro: path.resolve(__dirname, "src/pages/perfil-canguro.html"),
        register: path.resolve(__dirname, "src/pages/register.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});
