<script>
  export let cValue;
  export let triple;

  const double = () => cValue = cValue * 2;
  $: triple = cValue * 3;
</script>

<div class="border p-2 mb-3">
  <button on:click={double}>Double</button>
  <div>cValue = {cValue}</div>
</div>
