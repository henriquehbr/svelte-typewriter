/// <reference path='../types.js' />
import { typingInterval } from '../utils'

// Unify the function below with the one on default mode
/** @type {TypewriterEffectFn} */
const typewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	for (const element of elements) typewriterEffect(element, options)

	// Modularize this
	const { currentNode: lastElementToFinish } = elements.reduce((longestTextElement, element) => {
		const longestTextLength = longestTextElement.text.length
		return element.text.length > longestTextLength
			? (longestTextElement = element)
			: longestTextElement
	})

	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
			if (mutation.type === 'attributes' && lastElementFinishedTyping) {
				options.dispatch('done')
			}
		})
	})

	observer.observe(lastElementToFinish, {
		attributes: true,
		childList: true,
		subtree: true
	})
}
