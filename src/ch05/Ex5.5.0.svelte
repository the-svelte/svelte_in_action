<script>
  import A from './A.svelte';
  import { setContext } from 'svelte';

  setContext('favorites', { name: 'Anna', age: 28 });
</script>

<div>
  This is Parent
  <A/>
</div>
