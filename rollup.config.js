import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import analyze from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'

/** @type {import('rollup').Plugin[]} */
const plugins = [
	svelte({
		dev: false
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
	terser(),
	analyze({
		summaryOnly: true
	})
]

/** @type {(format: 'es' | 'umd') => import('rollup').RollupOptions} */
const libConfig = format => ({
	input: 'src/Typewriter.svelte',
	output: {
		format,
		...(format === 'es'
			? { dir: 'lib/esm', entryFileNames: 'index.mjs', chunkFileNames: '[name].mjs' }
			: {
					dir: 'lib/umd',
					name: 'Typewriter',
					entryFileNames: 'index.js',
					chunkFileNames: '[name].js'
			  })
	},
	plugins,
	...(format === 'es' && { external: ['svelte/internal'] }),
	inlineDynamicImports: format === 'es' ? false : true
})

export default [libConfig('es'), libConfig('umd')]
