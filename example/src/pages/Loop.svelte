<script lang="ts">
	import TypewriterControls from '@example/components/TypewriterControls.svelte'
</script>

<h1>Loop mode</h1>

<hr>

<pre>
  &lt;Typewriter loop /&gt;
</pre>

<TypewriterControls loop>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter loop endLoop /&gt;
</pre>

<TypewriterControls loop endLoop>
  <slot />
</TypewriterControls>

 
<hr>

<pre>
  &lt;Typewriter loop interval=&lcub;80&rcub; /&gt;
</pre>

<TypewriterControls loop interval={80}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter loop interval=&lcub;80&rcub; delay=&lcub;3000&rcub; /&gt;
</pre>

<TypewriterControls loop interval={80} delay={3000}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter loop interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor=&lcub;false&rcub; /&gt;
</pre>

<TypewriterControls loop interval={80} delay={3000} cursor={false}>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter loop interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='limegreen' /&gt;
</pre>

<TypewriterControls loop interval={80} delay={3000} cursor='limegreen'>
  <slot />
</TypewriterControls>

<hr>

<pre>
  &lt;Typewriter loop interval=&lcub;80&rcub; delay=&lcub;3000&rcub; cursor='limegreen' on:done=&lcub;() =&gt; console.log('Hello World!')&rcub; /&gt;
</pre>

<TypewriterControls
  loop
  interval={80}
  delay={3000}
  cursor='limegreen'
  on:done={() => console.log('Hello World!')}
>
  <slot />
</TypewriterControls> 
