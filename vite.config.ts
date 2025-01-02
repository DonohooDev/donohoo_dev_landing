import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	const isDev = mode === "development";

	return {
		plugins: [sveltekit()],
		build: {
			sourcemap: isDev,
		},
		server: isDev
			? {
					hmr: true,
					port: 5234,
				}
			: {},
	};
});
