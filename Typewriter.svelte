<script>
	import { onMount, createEventDispatcher, onDestroy } from 'svelte'
	export let interval = 30
	export let cascade = false
	export let loop = false
	export let cursor = true

	let node
	let elements = []

	const dispatch = createEventDispatcher()

	if (cascade && loop) {
		throw new Error('`cascade` mode should not be used with `loop`!')
	}
	
	const typewriterEffect = async ({ currentNode, text }, loopAnimation=false) => {
		const range = (min, max) => Math.floor(Math.random() * (max - min) + min)
		const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
		const typingInterval = async () => await sleep(interval[range(0, interval.length)] || interval)

		currentNode.textContent = ''
		currentNode.classList.add('typing')
		for (const letter of text) {
			currentNode.textContent += letter
			const fullyWritten = loopAnimation && currentNode.textContent === text.join('')
			if (fullyWritten) {
				await sleep(typeof loop === 'number' ? loop : 1500)
				while (currentNode.textContent !== '') {
					currentNode.textContent = currentNode.textContent.slice(0, -1)
					await typingInterval()
				}
			} else {
				await typingInterval()
			}
		}
		if (currentNode.nextSibling !== null || !cascade) {
			currentNode.classList.length == 1
				? currentNode.removeAttribute('class')
				: currentNode.classList.remove('typing')
		}
	}

	const modes = {
		cascade: async () => {
			elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
			for (const element of elements) await typewriterEffect(element)
			dispatch('done')
		},
		loop: async () => {
			const loopParagraphTag = node.firstChild.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			node.childNodes.forEach(el => el.remove())
			node.appendChild(loopParagraph)
			while (loop) {
				for (const text of elements) {
					loopParagraph.textContent = text.join('')
					await typewriterEffect({ currentNode: loopParagraph, text }, true)
				}
				dispatch('done')
			}
		},
		default: async () => {
			await new Promise(resolve => {
				elements.forEach(async (element, i) => {
					await typewriterEffect(element)
					i + 1 === elements.length && resolve()
				})
			})
			dispatch('done')
		}
	}

	onMount(async () => {
		const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

		if (hasSingleTextNode(node)) {
			throw new Error('<Typewriter /> must have at least one element')
		}

		// Get Elements
		const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT)
		let currentNode = treeWalker.nextNode()
		while (currentNode) {
			const text = currentNode.textContent.split('')
			hasSingleTextNode(currentNode) && elements.push(!loop ? { currentNode, text } : text)
			currentNode = treeWalker.nextNode()
		}

		if (cascade)	modes.cascade()
		else if (loop)	modes.loop()
		else			modes.default()
	})

	onDestroy(() => (loop = false))
</script>

<style>
	@keyframes cursorFade {
		0%   { opacity: 1 }
		50%  { opacity: 0 }
		100% { opacity: 1 }
	}

	.cursor :global(.typing::after) {
		content: '▌';
		display: inline-block;
		color: var(--cursor-color);
		animation: cursorFade 1.25s infinite;
	}
</style>

<div
	class:cursor
	style="--cursor-color: {typeof cursor === 'string' ? cursor : 'black'}"
	bind:this={node}
>
	<slot />
</div>
