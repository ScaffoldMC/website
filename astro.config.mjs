// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://scaffoldmc.github.io/website",
	base: "/website",
	vite: {
		plugins: [tailwindcss()],
	},
});
