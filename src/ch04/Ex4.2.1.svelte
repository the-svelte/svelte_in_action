<script>
let colors = ['red', 'green', 'blue'];
</script>

{#each colors as color, index}
  <div>{index + 1}) {color}</div>
{/each}
