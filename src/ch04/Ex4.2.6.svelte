<script>
const rows = 6;
</script>

{#each Array(rows) as _, index}
  <div>line #{index + 1}</div>
{/each}
