// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	plugins: [ViteYaml(),],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			edge: false,
			split: true
		}),
		// paths: {
        //     base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
        // }
	}
};

export default config;
