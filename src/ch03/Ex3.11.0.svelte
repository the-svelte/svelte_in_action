<script>
  import { onMount } from 'svelte';
  import { add } from './Demo.svelte';

  onMount(() => {
    const sum = add(1, 3);
    console.log('sum =', sum);
  });
</script>
