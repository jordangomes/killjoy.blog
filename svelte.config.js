import adapter from '@sveltejs/adapter-auto';
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
		adapter: adapter()
	}
};

export default config;
