<script>
  export let cValue;
  const double = () => cValue = cValue * 2;
</script>

<div class="border p-2 mb-3">
  <button on:click={double}>Double</button>
  <div>cValue = {cValue}</div>
</div>
