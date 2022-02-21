<script>
  import {itemsWithTaxStore, taxStore} from './itemsStores';
</script>

<div>
  <label for="">Tax</label>
  <input type="number" bind:value={$taxStore}>
</div>
<div>
  <h4>Items</h4>
  {#each $itemsWithTaxStore as item}
    <p>{item.name} - cost {item.cost.toFixed(2)} - total {item.total.toFixed(2)}</p>
  {/each}
</div>
