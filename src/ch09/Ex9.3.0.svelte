<script>
  import page from 'page';

  import NotFound from './NotFound.svelte';
  import Shop from './Shop.svelte';
  import Cart from './Cart.svelte';
  import Ship from './Ship.svelte';

  let component;

  page.redirect('/', '/shop');

  page('/cart', () => (component = Cart));
  page('/shop', () => (component = Shop));
  page('/ship', () => (component = Ship));

  page('*', () => (component = NotFound));

  page.start();
</script>

<nav class="nav nav-tabs">
  <a href="/shop" class="nav-link" class:active={component === Shop}>Shop</a>
  <a href="/cart" class="nav-link" class:active={component === Cart}>Cart</a>
  <a href="/ship" class="nav-link" class:active={component === Ship}>Ship</a>
</nav>

<main>
  <svelte:component this={component} />
</main>
