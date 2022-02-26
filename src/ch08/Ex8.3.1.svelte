<script>
  import ColorCycle1 from './ColorCycle1.svelte';

  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <ColorCycle1 text="Some Title" />
{/if}
