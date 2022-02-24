<script>
  let baskets = [
    { name: 'Basket 1', items: ['Orange', 'Pineapple'] },
    { name: 'Basket 2', items: ['Banana', 'Apple'] },
    { name: 'Basket 3', items: ['GrapeFruit'] },
    { name: 'Basket 4', items: ['Tangerine'] },
  ];

  let hoveringOverBasket;

  function dragStart(event, basketIndex, itemIndex) {
    const data = {basketIndex, itemIndex};
    event.dataTransfer.setData('text/plain', JSON.stringify(data));
  }

  function drop(event, basketIndex) {
    const json = event.dataTransfer.getData('text/plain');
    const data = JSON.parse(json);

    const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);

    baskets[basketIndex].items.push(item);
    baskets = baskets;

    hoveringOverBasket = null;
  }
</script>

<p>Drag a fruit from one basket to another.</p>
{#each baskets as basket, basketIndex}
  <b>{basket.name}</b>
  <ul
    class="list-inline bg-light p-3"
    class:hovering={hoveringOverBasket === basket.name}
    on:dragenter={() => hoveringOverBasket = basket.name}
    on:gragleave={() => hoveringOverBasket = null}
    on:drop|preventDefault={event => drop(event, basketIndex)}
    on:dragover|preventDefault
  >
    {#each basket.items as item, itemIndex}
      <li
        class="list-inline-item p-1"
        draggable="true"
        on:dragstart={event => dragStart(event, basketIndex, itemIndex)}
      >{item}</li>
    {/each}
  </ul>
{/each}

<style>
  .hovering {
    border-color: hotpink;
    /* color: red; */
  }
  ul {
    border: solid lightgray 1px;
  }
  li:hover {
    background: orange;
  }
</style>
