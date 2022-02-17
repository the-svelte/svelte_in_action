<script>
  import ChildB from './ChildB.svelte';

  let detail;

  function handleEvent(event) {
    detail = event.detail;
  }
</script>

<h5>Parents!</h5>
<ChildB
  on:someEvent={handleEvent}
/>
{#if detail}
  <div>You clicked {detail.name}, {detail.age}.</div>
{/if}
