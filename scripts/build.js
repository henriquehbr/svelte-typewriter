import esbuild from 'esbuild'
import sveltePlugin from 'esbuild-svelte'

/** @type {import('esbuild').BuildOptions} */
const esbuildCommonConfig = {
	bundle: true,
	platform: 'browser',
	format: 'esm'
}

/** @type {(format: 'esm' | 'cjs') => import('esbuild').BuildOptions} */
const esbuildComponentConfig = format => ({
	...esbuildCommonConfig,
	format,
	entryPoints: ['./src/Typewriter.svelte'],
	outdir: `lib/${format}`,
	splitting: format === 'esm' ? true : false,
	outExtension: {
		'.js': format === 'esm' ? '.mjs' : '.js'
	},
	plugins: [sveltePlugin()]
})

const build = async () => {
	await esbuild.build(esbuildComponentConfig('esm'))
	await esbuild.build(esbuildComponentConfig('cjs'))
}

build()
