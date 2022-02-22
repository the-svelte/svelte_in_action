<script>
  let name = '';
  const focus = element => element.focus();

  let show = false;

  function toggleShow() {
    show = !show;
  }
</script>

{#if show}
  <input type="text" bind:value={name} use:focus />
{:else}
  <p>Not show</p>
{/if}
<button on:click={toggleShow}>Toggle</button>
