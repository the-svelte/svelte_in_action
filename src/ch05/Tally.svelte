<script>
  export const taxRate = 0.07;

  let price;
  let prices = [];

  $: total = prices.reduce((acc, n) => acc + n, 0);

  function add() {
    prices.push(price);
    prices = prices;
    price = null;
  }

  export const getGrandTotal = () => total * (1 + taxRate);
</script>

<div>
  <input type="number" bind:value={price} />
  <button on:click={add}>Add</button>
  <ul>
    {#each prices as price}
    <li>{price}</li>
    {/each}
  </ul>

  <hr>
  <p>Total {total}, Tax Rate {(taxRate * 100).toFixed(2)}%</p>
</div>
