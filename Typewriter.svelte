<script>
	import { onMount, createEventDispatcher, onDestroy } from 'svelte'
	export let mode = 'default'
	export let interval = 30
	export let loopInterval = 1500
	export let cursor = true

	let node
	let elements = []

	const dispatch = createEventDispatcher()

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)
	const hasSingleTextNode = el =>
		el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
	const typingInterval = async () =>
		await sleep(interval[rng(0, interval.length)] || interval)

	const getElements = parentElement => {
		const treeWalker = document.createTreeWalker(
			parentElement,
			NodeFilter.SHOW_ELEMENT
		)
		let currentNode = treeWalker.nextNode()
		while (currentNode) {
			const text = currentNode.textContent.split('')
			hasSingleTextNode(currentNode) && elements.push({ currentNode, text })
			currentNode = treeWalker.nextNode()
		}
	}

	const typewriterEffect = async ({ currentNode, text }) => {
		currentNode.textContent = ''
		currentNode.classList.add('typing')
		for (const letter of text) {
			currentNode.textContent += letter
			const fullyWritten =
				mode === 'loop' && currentNode.textContent === text.join('')
			if (fullyWritten) {
				await sleep(loopInterval)
				while (currentNode.textContent !== '') {
					currentNode.textContent = currentNode.textContent.slice(0, -1)
					await typingInterval()
				}
				return
			}
			await typingInterval()
		}
		currentNode.classList.length === 1 && currentNode.nextSibling !== null
			? currentNode.removeAttribute('class')
			: currentNode.classList.remove('typing')
	}

	const init = async () => {
		mode === 'cascade' &&
			elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
		for (const element of elements) {
			mode === 'cascade'
				? await typewriterEffect(element)
				: typewriterEffect(element)
		}
		dispatch('done')
	}

	const loop = async () => {
		const loopParagraphTag = node.firstChild.tagName.toLowerCase()
		const loopParagraph = document.createElement(loopParagraphTag)
		node.childNodes.forEach(el => el.remove())
		node.appendChild(loopParagraph)
		while (mode === 'loop') {
			for (const { text } of elements) {
				loopParagraph.textContent = text.join('')
				await typewriterEffect({ currentNode: loopParagraph, text })
			}
			dispatch('done')
		}
	}

	onMount(() => {
		if (hasSingleTextNode(node))
			throw new Error('<Typewriter /> must have at least one element')
		getElements(node)
		switch (mode) {
			case 'cascade':
			case 'default':
				init()
				break
			case 'loop':
				loop()
		}
	})

	onDestroy(() => (mode = 'default'))
</script>

<style>
	@keyframes cursorFade {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
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
