<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  const data = {
    name: 'Anna',
    age: 28,
  };

  function handleClick() {
    dispatch('someEvent', data);
  }
</script>

<div class="border p-2 mb-3">
  <button on:click={handleClick}>Child B</button>
</div>
