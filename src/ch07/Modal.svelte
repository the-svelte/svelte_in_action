  <script>
  export let modal = null;

  // let showModal = false;

  // function toggle() {
  //   showModal = !showModal;
  // }

  // function show() {
  //   showModal = true;
  // }

  // function hide() {
  //   showModal = false;
  // }

  function showModal() {
    document.getElementsByTagName('body')[0].classList.add('modal-open');
  }
  function hideModal() {
    document.getElementsByTagName('body')[0].classList.remove('modal-open');
  }
</script>

<div>
  <button on:click={showModal}>SHOW</button>
  <button on:click={hideModal}>HIDE</button>
</div>

<div class="modal" tabindex="-1" bind:this={modal}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
