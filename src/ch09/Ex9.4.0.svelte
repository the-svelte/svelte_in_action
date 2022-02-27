<script>
  import page from 'page';
  import qs from 'query-string';

  import Page1 from './Page1.svelte';
  import Page2 from './Page2.svelte';

  let component;

  let props = {};

  function parseQueryString(context, next) {
    context.query = qs.parse(context.querystring);
    props = {};
    next();
  }

  page('*', parseQueryString);

  page('/', context => {
    component = Page1;
    props = {p1: 'alpha', q1: 'beta'};
  });

  page('/one/:p1/:p2?', context => {
    component = Page1;
    const {params, query} = context;
    props = {...params, ...query};
  });

  page('/two', () => {
    component = Page2;
  });

  page.start();
</script>

<nav class="nav nav-tabs">
  <a href="/one/v1/v2?q1=v3&q2=v4" class="nav-link" class:active={component === Page1}>One</a>
  <a href="/two" class="nav-link" class:active={component === Page2}>Two</a>
</nav>

<main>
  <svelte:component this={component} {...props} />
</main>
