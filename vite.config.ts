import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	base: "/CatanTrackApp/", // Replace with your repository name
	plugins: [react()],
	build: {
		outDir: "docs",
	},
});
