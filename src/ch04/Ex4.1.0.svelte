<script>
let color = 'pupple'
</script>

<h1>4.1</h1>
{#if color === 'yellow'}
  <div>Nice color!</div>
{:else if color === 'orange'}
  <div>That's oky too.</div>
{:else}
  <div>Questionable choice.</div>
{/if}
