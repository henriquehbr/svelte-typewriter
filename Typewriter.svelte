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
	const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

	const randomString = (word, foundIndexes) => 
		[...Array(word.length).keys()].map(i => {
			const found = (foundIndexes.includes(i) || word[i] == " ");
			const letter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return found ? word[i] : letter
		}).join("")
	
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
					await sleep(interval)
				}
				return
			}
			await sleep(interval)
		}
		if (currentNode.nextSibling !== null || !cascade)
			currentNode.classList.length == 1
				? currentNode.removeAttribute('class')
				: currentNode.classList.remove('typing')
	}

	const loopMode = async () => {
		while (loop) {
			for (const { currentNode, text } of elements) {
				const loopParagraph = document.createElement(currentNode.tagName)
				loopParagraph.textContent = text.join('')

				node.childNodes.forEach(el => el.remove())
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
			return dispatch('done')
		}

		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
				if (mutation.type === 'attributes' && lastElementFinishedTyping) {
					dispatch('done')
				}
			})
		})

		const lastElementToFinish = elements.sort((a, b) => b.length - a.length)[0].currentNode
		observer.observe(lastElementToFinish, {
			attributes: true,
			childList: true,
			subtree: true
		})
	}

	const scrambleMode = () => {
		elements.forEach(async element => {
			const { currentNode, text } = element
			const foundIndexes = []
			const scrambleCount = typeof scramble == 'number' ? scramble * 1000 / interval : 100
			let i = 0

			do {
				currentNode.textContent = randomString(currentNode.textContent, foundIndexes)

				for (let i=0; i<text.length; i++) {
					const current = currentNode.textContent
					if (!foundIndexes.includes(i) && text[i] === current[i]) {
						foundIndexes.push(i)
					}
				}

				i += 1
				await sleep(interval)
			} while (currentNode.textContent != text.join("") && i < scrambleCount)

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
