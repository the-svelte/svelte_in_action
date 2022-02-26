<script>
  import Demo from './Demo.svelte';

  let show = false;
</script>

<div>
  <label for="checkShow">Show</label>
  <input id="checkShow" type="checkbox" bind:checked={show}>
</div>

{#if show}
  <Demo />
{/if}
