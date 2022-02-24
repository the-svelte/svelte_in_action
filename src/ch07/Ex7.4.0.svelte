<script>
  import Dialog from './Dialog.svelte';
  let dialog;
</script>

<div>
  <button
    class="btn btn-primary"
    on:click={() => dialog.showModal()}
  >Open Dialog</button>
</div>
<Dialog title="Test Dialog" bind:dialog>
  My Dialog contetn is very, very logn.<br>
  It will not wrap by default.
</Dialog>
