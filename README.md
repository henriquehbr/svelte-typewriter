# svelte-typewriter

> A simple and reusable typewriter effect for your Svelte applications

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/2074-shield.svg)](https://madewithsvelte.com/p/svelte-typewriter/shield-link)

[DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a)

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
	<p>Lorem ipsum dolor sit amet consectetur</p>
</Typewriter>
```

## Props

| Prop           | Type                  | Description                                                                                                                                                                     | Default |                                                                  |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `interval`     | `number` or `array`   | The interval (in milliseconds) between each letter, you can also pass a array of distinct intervals to mimic human typing                                                       | `30`    | [DEMO](https://svelte.dev/repl/eb6caec159cf454b8f2bc98f3444fa8c) |
| `loopInterval` | `number`              | The interval (in milliseconds) between each loop iteration                                                                                                                      | `1500`  | [DEMO](https://svelte.dev/repl/31950dd108344e70a30df148a9f7dde6) |
| `cursor`       | `boolean` or `string` | Enables/disables the terminal cursor on the Typewriter animation, and also, allows you to pass any valid color name, hex code, rgb/rgba valid values to change the cursor color | `true`  | [DEMO](https://svelte.dev/repl/6008b5aaff6f46e5909c63e795a19f5a) |

## Modes

> **Warning:** in order to reduce code and avoid the possibility of calling multiple modes simultaneously on the same component, from version 3.x onwards, the `Typewriter` component mode is defined with the prop `mode`, (`mode="cascade"` or `mode="loop"`) instead the previous boolean props with with their respective mode name (`<Typewriter cascade />` or `<Typewriter loop />`)

You can control the behavior of the typewriter effect by passing specific values to the prop `mode`, the table below contains information about all modes:

| Value     | Description                                                                                              |                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `cascade` | Apply animation on all elements sequentially instead of simultaneously                                   | [DEMO](https://svelte.dev/repl/9ddb89942e954a2a90b553356952ff46) |
| `loop`    | Cycles the animation between the children elements of the parent `Typewriter` component                  | [DEMO](https://svelte.dev/repl/e8b82d83f6c2444b97619238404bcd4d) |
| `default` | Apply animation simultaneously on all elements, as opposed to the sequential animation of `cascade` mode | [DEMO](https://svelte.dev/repl/7c1ef46db4ac45beaa2bd069e04677c6) |

## Event listeners

| Event     | Trigger                                                                                                           |                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `on:done` | Is executed at the end of the animation, if using `mode="loop"`, this event will be fired at the end of each loop | [DEMO](https://svelte.dev/repl/145cbf66c396497aa5338846077d53e0) |
