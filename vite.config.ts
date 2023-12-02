import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/CatanTrackApp/", // Replace 'my-vite-project' with your repo name
	plugins: [react()],
});
