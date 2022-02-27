<script>
  import NavButton from './NavButton.svelte';
  import Shop from './Shop.svelte';
  import Cart from './Cart.svelte';
  import Ship from './Ship.svelte';

  const pageMap = {
    shop: Shop,
    cart: Cart,
    ship: Ship,
  };

  let pageName = 'shop';
</script>

<nav>
  <NavButton name="shop" bind:pageName >Shop</NavButton>
  <NavButton name="cart" bind:pageName >Cart</NavButton>
  <NavButton name="ship" bind:pageName >Ship</NavButton>
</nav>

<main>
  <svelte:component this={pageMap[pageName]} />
</main>
