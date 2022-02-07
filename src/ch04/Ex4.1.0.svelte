<script>
let color = 'pupple';
</script>

{#if color === 'yellow'}
  <div>Nice color!</div>
{:else if color === 'orange'}
  <div>That's oky too.</div>
{:else}
  <div>Questionable choice.</div>
{/if}
