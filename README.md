# svelte-typewriter

> A simple and reusable typewriter effect for your Svelte applications

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/2074-shield.svg)](https://madewithsvelte.com/p/svelte-typewriter/shield-link)

[DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a)

## Summary

- [Installation](#Installation)
- [Usage](#Usage)
- [Props](#Props)
- [Modes](#Modes)
- [Event listeners](#Event-listeners)

## Installation

```bash
# yarn
yarn add -D svelte-typewriter

# npm
npm i -D svelte-typewriter
```

## Usage

You need to import the Svelte component, and wrap your elements with the `<Typewriter>` component

```svelte
<script>
	import Typewriter from 'svelte-typewriter'
</script>

<Typewriter>
	<h1>Testing the typewriter effect</h1>
	<h2>The typewriter effect cascades by default</h2>
	<p>Lorem ipsum dolor sit amet consectetur</p>
</Typewriter>
```

## Props

| Prop       | Type                  | Description                                                                                                                                                                     | Default |                                                                  |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `interval` | `number` or `array`   | The interval in milliseconds between each letter, you can also pass a array of distinc intervals to mimic human typing                                                          | `30`    | [DEMO](https://svelte.dev/repl/eb6caec159cf454b8f2bc98f3444fa8c) |
| `cursor`   | `boolean` or `string` | Enables/disables the terminal cursor on the Typewriter animation, and also, allows you to pass any valid color name, hex code, rgb/rgba valid values to change the cursor color | `true`  | [DEMO](https://svelte.dev/repl/6008b5aaff6f46e5909c63e795a19f5a) |

## Modes

You can control the behavior of the typewriter effect by passing specific values to the prop `mode`, the table below contains information about all modes:

| Value     | Description                                                                                              |                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `cascade` | Apply animation on all elements sequentially instead of simultaneously                                   | [DEMO](https://svelte.dev/repl/9ddb89942e954a2a90b553356952ff46) |
| `loop`    | Cycles the animation between the children elements of the parent `Typewriter` component                  | [DEMO](https://svelte.dev/repl/e8b82d83f6c2444b97619238404bcd4d) |
| `default` | Apply animation simultaneously on all elements, as opposed to the sequential animation of `cascade` mode | [DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a) |

## Event listeners

| Event     | Trigger                                                                                                           |                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `on:done` | Is executed at the end of the animation, if using `mode="loop"`, this event will be fired at the end of each loop | [DEMO](https://svelte.dev/repl/145cbf66c396497aa5338846077d53e0) |
