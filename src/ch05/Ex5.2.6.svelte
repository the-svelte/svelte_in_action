<script>
  import Tally from './Tally.svelte';

  let tally;
  let taxRate = 0;
  let grandTotal = 0;

  function update() {
    taxRate = tally.taxRate;
    grandTotal = tally.getGrandTotal();
  }
</script>

<Tally bind:this={tally} />
<button on:click={update}>Update</button>
<div>
  <p>Tax Rate = {(taxRate * 100).toFixed(2)}</p>
  <p>Grand Total = {grandTotal.toFixed(2)}</p>
</div>
