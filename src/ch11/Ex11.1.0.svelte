<script>
  export let radius = 1;
  $: area = 2 * Math.PI * radius ** 2;
</script>

{@debug radius, area}
<main>
  <div>
    <label for="">Circle Radius:</label>
    <input type="number" bind:value={radius} />
  </div>

  <p>Circle Area: {area}</p>
</main>
