import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
		globals: true,
		environment: "jsdom",
		setupFiles: [],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
