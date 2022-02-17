<script>
  import Buttons from './Buttons.svelte';

  let colors = ['primary', 'success', 'info'];
  let color = '';

  function handleSelect(event) {
    color = event.detail;
  }
</script>

<h5>Parents!</h5>
<Buttons
  labels={colors}
  value={color}
  on:select={handleSelect}
/>
{#if color}
  <div>You clicked {color}.</div>
{/if}
