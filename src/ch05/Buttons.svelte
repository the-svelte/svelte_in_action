<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let labels;
  export let value;
</script>

<div class="btn-group" role="group" aria-label="Basic mixed styles example">
{#each labels as label}
  <button
    type="button"
    class="btn btn-outline-{label}"
    class:active={label === value}
    on:click={() => dispatch('select', label)}
  >{label}</button>
{/each}
</div>
