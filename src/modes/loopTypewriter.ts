import { writeEffect } from '@svelte-typewriter/helpers/writeEffect'
import { unwriteEffect } from '@svelte-typewriter/helpers/unwriteEffect'
import { getRandomElement } from '@svelte-typewriter/helpers/getRandomElement'
import { asyncForEach } from '@svelte-typewriter/helpers/asyncForEach'
import type { TypewriterEffectFn, TypewriterModeFn } from '@svelte-typewriter/types'

const loopTypewriter: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	await writeEffect({ currentNode, text }, options)
	if (!options.stopLoop) {
		const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
		const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
		fullyWritten && (await unwriteEffect(currentNode, options))
	}
}

const mode: TypewriterModeFn = async (elements, options) => {
	if (options.endLoop) {
		asyncForEach(elements, async (element: any, idx: number) => {
			let stopLoop = options.endLoop ? elements.length - 1 === idx : false
			await loopTypewriter(element, { ...options, stopLoop })
		})
	} else {
		while (true) {
			if (options.loop) {
				for (const element of elements) await loopTypewriter(element, options)
			} else if (options.loopRandom) {
				const element = getRandomElement(elements)
				await loopTypewriter(element, options)
			}
		}
	}
}

export { mode }
