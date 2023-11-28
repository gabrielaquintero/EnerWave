import { resolve } from "path";
import { defineConfig} from "vite";

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions: {
            input:{
                main: resolve(root, 'index.html'),
                "home": resolve(root, 'home', 'index.html'),
                "library": resolve(root, 'library', 'index.html'),
                "manuals": resolve(root, 'library', 'manuals', 'index.html'),
                "guides": resolve(root, 'library', 'guides', 'index.html'),
                "policies": resolve(root, 'library', 'policies', 'index.html'),
                "learning": resolve(root, 'learning', 'index.html'),
                "tasks": resolve(root, 'tasks', 'index.html'),
                "progreso": resolve(root, 'progreso', 'index.html'),
                "curso": resolve(root, 'curso', 'index.html'),
                "clase": resolve(root, 'clase', 'index.html'),
                "quiz": resolve(root, 'quiz', 'index.html'),
                "resultado": resolve(root, 'resultado', 'index.html'),
            }
        },
        target: 'esnext'
    }
})