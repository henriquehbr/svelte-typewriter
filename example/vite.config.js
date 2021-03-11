import path from 'path'

import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'
//import { minify } from 'html-minifier'

/*
const indexReplace = () => {
	return {
		name: 'html-transform',
		transformIndexHtml(html) {
			return minify(html, {
				collapseWhitespace: true
			})
		}
	}
}
*/

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
	return {
		build: {
			polyfillDynamicImport: false,
			cssCodeSplit: false,
			minify: isProduction
		},
		extensions: ['html', 'js', 'css'],
		resolve: {
			alias: {
				svelte: path.resolve(__dirname, 'node_modules/svelte')
			}
		},
		plugins: [
			svelte({
				hot: !isProduction,
				emitCss: true
			})
			//indexReplace()
		],
		build: {
			minify: isProduction
		}
	}
})
