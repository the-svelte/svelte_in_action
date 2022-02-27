<script>
  import {totalPrice, shippingPrice} from './cartStore';

  // let total = $cartStore.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let city = '';
  let name = '';
  let state = '';
  let street = '';
  let zip = '';

  // $: shipping = total === 0 ? 0 : total < 10 ? 2 : total < 30 ? 6 : 10;

  const format = cost => '$' + cost.toFixed(2);
</script>

<h4>Ship</h4>
<form on:submit|preventDefault>
  <div>
    <label for="">name</label>
    <input type="text" bind:value={name}>
  </div>
  <div>
    <label for="">street</label>
    <input type="text" bind:value={street}>
  </div>
  <div>
    <label for="">city</label>
    <input type="text" bind:value={city}>
  </div>
  <div>
    <label for="">state</label>
    <input type="text" bind:value={state}>
  </div>
  <div>
    <label for="">zip</label>
    <input type="text" bind:value={zip}>
  </div>
</form>

<ul>
  <li>Shipping To:</li>
  <li>{name}</li>
  <li>{street}</li>
  <li>{city ? city + ',' : ''} {state} {zip}</li>
</ul>

<ul>
  <li>Total: {format($totalPrice)}</li>
  <li>Shipping: {format($shippingPrice)}</li>
  <li>Grand Total: {format($totalPrice + $shippingPrice)}</li>
</ul>
