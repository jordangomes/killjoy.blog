import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {

	extensions: [
		'.svelte',
		'.svx'
	  ],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: mdsvex({
		layout: './src/routes/posts/PostLayout.svelte'
	}),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		prerender: {
			default: true
		}
	},
};

export default config;
