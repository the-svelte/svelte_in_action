<script>
  import ColorPicker from './ColorPicker.svelte';

  let hex = '';
</script>

<ColorPicker bind:hex={hex} />

<div
  class="p-3"
  style="background-color: {hex}"
>hex: {hex}</div>

<!-- <input type="color" bind:value={hex} /> -->
