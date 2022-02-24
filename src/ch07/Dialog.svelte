<script>
  import {createEventDispatcher, onMount} from 'svelte';

  export let canClose = true;
  export let className = '';
  export let dialog = null;
  export let icon = undefined;
  export let title;

  const dispatch = createEventDispatcher();

  $: classNames = 'dialog' + (className ? ' ' + className : '');

  // onMount(() => dialogPolyfill.registerDialog(dialog));

  function close() {
    dispatch('close');
    dialog.close();
  }
</script>

<dialog bind:this={dialog} class={classNames}>
  <header class="d-flex justify-content-between">
    {#if icon}{icon}{/if}
    <div class="title">{title}</div>
    {#if canClose}
      <button class="btn btn-outline-primary btn-sm" on:click={close}>x</button>
    {/if}
  </header>
  <menu>
    <slot></slot>
  </menu>
</dialog>
