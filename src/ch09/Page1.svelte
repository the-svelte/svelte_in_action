<script>
  import page from 'page';

  export let p1;
  export let p2 = undefined;
  export let q1;
  export let q2 = undefined;

  console.log('Page1 $$props = ', $$props);
</script>

<h1>Page1</h1>
<p>p1 = {p1}</p>
<p>p2 = {p2}</p>
<p>q1 = {q1}</p>
<p>q2 = {q2}</p>

<button on:click={() => page.show('/two')}>Go To Page Two</button>
