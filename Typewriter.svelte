<script>
	import { onMount, createEventDispatcher, onDestroy } from 'svelte'
	export let interval = 30
	export let cascade = false
	export let loop = false
	export let scramble = false
	export let cursor = true
	export let delay = 0

	let node
	let elements = []

	const dispatch = createEventDispatcher()

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)
	const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
	const typingInterval = async () => sleep(interval[rng(0, interval.length)] || interval)
	const randomLetter = () => String.fromCharCode(65 + Math.round(Math.random() * 50));

	for (let i = 0; i < 200; i++) {
		console.log(i, String.fromCharCode(i))
	}

	/*
	 * Takes a word and generates a random string with the same length.
	 * If the random string and the given word has same letters, they won't be randomized again.
	*/
	const randomize = (word, foundIndexes) => {
		return [...Array(word.length).keys()].map(i => {
			const found = (foundIndexes.includes(i) || word[i] == " ");
			return found ? word[i] : randomLetter()
		}).join("")
	}

	const getElements = parentElement => {
		const treeWalker = document.createTreeWalker(parentElement, NodeFilter.SHOW_ELEMENT)
		let currentNode = treeWalker.nextNode()
		while (currentNode) {
			const text = currentNode.textContent.split('')
			hasSingleTextNode(currentNode) && elements.push({ currentNode, text })
			currentNode = treeWalker.nextNode()
		}
		if (hasSingleTextNode(node)) {
			const text = node.textContent.split('')
			node.textContent = ''
			const childNode = document.createElement('p')
			node.appendChild(childNode)
			elements.push({ currentNode: childNode, text })
		}
	}

	const typewriterEffect = async ({ currentNode, text }) => {
		currentNode.textContent = ''
		currentNode.classList.add('typing')
		for (const letter of text) {
			currentNode.textContent += letter
			const fullyWritten = loop && currentNode.textContent === text.join('')
			if (fullyWritten) {
				dispatch('done')
				await sleep(typeof loop === 'number' ? loop : 1500)
				while (currentNode.textContent !== '') {
					currentNode.textContent = currentNode.textContent.slice(0, -1)
					await typingInterval()
				}
				return
			}
			await typingInterval()
		}
		if (currentNode.nextSibling !== null || !cascade)
			currentNode.classList.length == 1
				? currentNode.removeAttribute('class')
				: currentNode.classList.remove('typing')
	}

	const loopMode = async () => {
		const loopParagraphTag = node.firstChild.tagName.toLowerCase()
		const loopParagraph = document.createElement(loopParagraphTag)
		node.childNodes.forEach(el => el.remove())
		node.appendChild(loopParagraph)
		while (loop) {
			for (const { currentNode, text } of elements) {
				node.childNodes.forEach(el => el.remove())
				const loopParagraphTag = currentNode.tagName.toLowerCase()
				const loopParagraph = document.createElement(loopParagraphTag)
				loopParagraph.textContent = text.join('')
				node.appendChild(loopParagraph)
				await typewriterEffect({ currentNode: loopParagraph, text })
				node.childNodes.forEach(el => el.remove())
			}
		}
	}

	const nonLoopMode = async () => {
		cascade && elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
		for (const element of elements) {
			cascade ? await typewriterEffect(element) : typewriterEffect(element)
		}

		if (cascade) {
			dispatch('done')
		} else {
			const { currentNode: lastElementToFinish } = elements.reduce(
				(longestTextElement, element) => {
					const longestTextLength = longestTextElement.text.length
					return element.text.length > longestTextLength
						? (longestTextElement = element)
						: longestTextElement
				}
			)

			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
					if (mutation.type === 'attributes' && lastElementFinishedTyping) {
						dispatch('done')
					}
				})
			})

			observer.observe(lastElementToFinish, {
				attributes: true,
				childList: true,
				subtree: true
			})
		}
	}

	const scrambleMode = () => {
		elements.forEach(async (element) => {
			const { currentNode, text } = element
			const foundIndexes = []
			let i = 0

			do {
				currentNode.textContent = randomize(currentNode.textContent, foundIndexes)

				for (let i=0; i<text.length; i++) {
					const current = currentNode.textContent
					if (!foundIndexes.includes(i) && text[i] === current[i]) {
						foundIndexes.push(i)
					}
				}

				i += 1
				await sleep(interval)
			} while (currentNode.textContent != text.join("") && i < 50)

			dispatch('done')
			currentNode.textContent = text.join("")
		})
	}

	onMount(() => {
		getElements(node)

		// If mode != scramble, clear the texts
		!scramble && elements.forEach(({ currentNode }) => currentNode.textContent = '')

		setTimeout(() => {
			if (loop) {
				loopMode()
			} else if (scramble) {
				scrambleMode()
			} else {
				nonLoopMode()
			}
		}, delay)
	})

	onDestroy(() => (loop = false))
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
