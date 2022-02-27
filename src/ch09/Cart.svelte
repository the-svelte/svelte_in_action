<script>
  import {cartStore, totalPrice} from './cartStore';

  // let total = $cartStore.reduce((acc, item) => acc + item.price * item.quantity, 0);
</script>

<h4>Cart</h4>
{#if $cartStore.length === 0}
  <div>Empty</div>
{:else}
  <table class="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {#each $cartStore as item}
      <tr>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.price.toFixed(2)}</td>
      </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2">Total</th>
        <th>{$totalPrice.toFixed(2)}</th>
      </tr>
    </tfoot>
  </table>
{/if}
