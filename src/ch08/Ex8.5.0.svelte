<script>
  import {afterUpdate} from 'svelte';

  let input;
  let item = '';
  let items = [];
  let list;

  afterUpdate(() => list.scrollTo(0, list.scrollHeight));

  function addItem() {
    items.push(item);
    items = items;
    item = '';
    input.focus();
  }
</script>

<form on:submit|preventDefault>
  <input bind:this={input} bind:value={item} />
  <button on:click={addItem}>Add</button>
</form>

<div bind:this={list} class="border bg-light mt-3 p-2 overflow-auto line-clamp">
  {#each items as item}
    <div>{item}</div>
  {/each}
</div>

<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
