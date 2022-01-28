<script>
  let status = 200;
  let message = 'This is a message.';
  $: bold = status >= 300;
</script>

<label>
  Status
  <input type="number" bind:value={status}>
</label>
<div
  class:error={status >= 400}
  class:bold={status >= 300}
>{message}</div>

<div
  class={status >= 400 ? 'text-danger': 'text-primary'}
  class:bold
>{message}</div>

<style>
  .error {
    color: red;
  }
  .bold {
    font-weight: bold;
  }
</style>
