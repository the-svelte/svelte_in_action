<script>
let colors = ['red', 'green', 'blue'];
</script>

{#each colors as color}
  <div style="color: {color}">{color}</div>
{/each}
