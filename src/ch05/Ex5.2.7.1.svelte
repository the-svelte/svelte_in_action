<script>
  import ChildTriple from './ChildTriple.svelte';
  let cValue = 1;
  let triple;
</script>

<ChildTriple bind:cValue={cValue} bind:triple />

<div>cValue = {cValue}</div>
<div>triple = {triple}</div>
