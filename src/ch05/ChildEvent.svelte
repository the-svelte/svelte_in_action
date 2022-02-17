<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  function sendEvent() {
    const optionData = {
      name: 'Anna',
      age: 28,
    };
    dispatch('someEventName', optionData);
  }
</script>

<div>
  <h5>Child Event</h5>
  <button
    class="btn btn-primary"
    on:click={sendEvent}
  >Event</button>
</div>
