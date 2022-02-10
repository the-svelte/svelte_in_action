<script>
  import Child from './Child.svelte';
  let cValue = 1;
</script>

<Child bind:cValue={cValue} />
<Child bind:cValue />

<Child cValue={cValue} />
<Child {cValue} />

<div>cValue = {cValue}</div>
