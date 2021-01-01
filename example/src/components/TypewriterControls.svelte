<script>
  import Typewriter from '../../../src/Typewriter.svelte'

  export let interval = 30
	export let cascade = false
	export let loop = false
	export let loopRandom = false
	export let cursor = true
  export let delay = 0

  $: props = { interval, cascade, loop, loopRandom, cursor, delay }
</script>

<b>Interval:</b>
<input type="number" bind:value={interval} />

<b>Cursor:</b>
<input type="color" bind:value={cursor} />

<b>Delay:</b>
<input type="number" bind:value={delay} />

<Typewriter {...props}>
  <slot />
</Typewriter>
