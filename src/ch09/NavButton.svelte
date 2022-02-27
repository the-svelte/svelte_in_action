<script>
  export let name;
  export let pageName;
</script>

<button
  class="btn {pageName === name ? 'btn-primary' : 'btn-outline-primary'}"
  on:click={() => pageName = name}
>
  <slot></slot>
</button>
