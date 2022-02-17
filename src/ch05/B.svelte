<script>
  import { getContext } from 'svelte';

  const { name, age } = getContext('favorites');
</script>

<div>
  This is B
  <p>favorite name is {name}</p>
  <p>favorite age is {age}</p>
</div>
