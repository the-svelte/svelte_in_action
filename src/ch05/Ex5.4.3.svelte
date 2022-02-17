<script>

  function clickButton(event) {
    console.log('clickButton');
    console.log(event.detail);
  }
  
  function clickDiv(event) {
    console.log('clickDiv');
    console.log(event.detail);
  }

  function clickParent(event) {
    console.log('clickParent');
    console.log(event.detail);
  }
</script>

<div on:click={clickParent}>
  <div on:click|stopPropagation={clickDiv}>
    <button on:click|once={clickButton}>Click</button>
  </div>
</div>
