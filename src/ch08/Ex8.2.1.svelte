<script>
  import {onMount} from 'svelte';

  let name = '';
  let nameInput;

  onMount(() => nameInput.focus());
</script>

<input type="text" bind:this={nameInput} bind:value={name} />
