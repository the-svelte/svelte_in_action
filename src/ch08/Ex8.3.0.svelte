<script>
  import ColorCycle from './ColorCycle.svelte';

  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <ColorCycle text="Some Title" />
{/if}
