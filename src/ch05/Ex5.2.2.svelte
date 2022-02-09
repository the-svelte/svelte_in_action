<script>
  import Sum from './Sum.svelte';

  let size = 3;

  $: numbers = Array(size).fill().map((_, i) => i + 1);
</script>

<label>size
  <input type="number" bind:value={size}/>
</label>
<Sum {numbers} />
