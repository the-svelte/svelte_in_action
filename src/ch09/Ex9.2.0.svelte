<script>
  import NotFound from './NotFound.svelte';
  import Shop from './Shop.svelte';
  import Cart from './Cart.svelte';
  import Ship from './Ship.svelte';

  let component;

  const hashMap = {
    '#shop': Shop,
    '#cart': Cart,
    '#ship': Ship,
  };

  function hashChange() {
    component = hashMap[location.hash] || NotFound;
  }
</script>

<svelte:window on:hashchange={hashChange} />
<nav class="nav nav-tabs">
  <a href="/#shop" class="nav-link" class:active={component === Shop}>Shop</a>
  <a href="/#cart" class="nav-link" class:active={component === Cart}>Cart</a>
  <a href="/#ship" class="nav-link" class:active={component === Ship}>Ship</a>
</nav>

<main>
  <svelte:component this={component} />
</main>
