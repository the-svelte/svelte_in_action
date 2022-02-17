<script>
  import ChildEvent from './ChildEvent.svelte';

  function handleEvent(event) {
    console.log(event.detail);
  }
</script>

<h5>Parents!</h5>
<ChildEvent on:someEventName={handleEvent}/>
