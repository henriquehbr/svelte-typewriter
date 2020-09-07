import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

/** @type {import('rollup').RollupOptions} */
const options = {
	input: 'index.js',
	output: {
		format: 'es',
		name: 'app',
		dir: 'build'
	},
	plugins: [
		svelte({
			dev: false,
			css: css => css.write('build/bundle.css', false)
		}),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			customResolveOptions: {
				moduleDirectory: ['src', 'node_modules'],
				extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json']
			}
		}),
		commonjs(),
		!production &&
			serve({
				contentBase: './',
				port: 8080
			}),
		!production && livereload('./'),
		terser()
	]
}

export default options
