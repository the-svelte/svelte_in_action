<script>
  export let hex = '';
  export let red;
  export let green;
  export let blue;

  $: red = parseInt(hex.slice(1, 3), 16);
  $: green = parseInt(hex.slice(3, 5), 16);
  $: blue = parseInt(hex.slice(5, 7), 16);
</script>

<input type="color" bind:value={hex} />
