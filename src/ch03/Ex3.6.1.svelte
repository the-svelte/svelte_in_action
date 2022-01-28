<script>
  import Child from './Child.svelte';
</script>

<div class="override">
  <Child/>
</div>

<style>
.override :global(h1) {
  color: blue;
}
</style>
