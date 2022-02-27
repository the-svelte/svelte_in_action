<script>
  import items from './items';
  import {cartStore} from './cartStore';

  function changeQuantity(event, item) {
    const newQuantity = Number(event.target.value);
    cartStore.update(items => {
      if (newQuantity && !item.quantity) {
        items.push(item);
      } else if (newQuantity === 0 && item.quantity) {
        const {desciption} = item;
        items = items.filter(i => i.desciption !== desciption);
      }

      item.quantity = newQuantity;

      return items;
    });
  }
</script>


<h4>Shop</h4>
<table class="table">
  <thead>
    <tr>
      <td>Description</td>
      <td>Price</td>
      <td>Quantity</td>
    </tr>
  </thead>
  <tbody>
    {#each items as item}
    <tr>
      <td>{item.description}</td>
      <td>{item.price.toFixed(2)}</td>
      <td>
        <input
          class=""
          type="number"
          min="0"
          on:input={e => changeQuantity(e, item)}
          value={item.quantity}
        />
      </td>
    </tr>
    {/each}
  </tbody>
</table>
