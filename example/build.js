import esbuild from 'esbuild'
import sveltePlugin from 'esbuild-svelte'

const build = async () => {
	await esbuild.build({
		entryPoints: ['./src/index.js'],
		platform: 'browser',
		bundle: true,
		format: 'esm',
		splitting: true,
		outbase: './',
		outdir: 'public/build',
		plugins: [sveltePlugin()]
	})
}

build()
