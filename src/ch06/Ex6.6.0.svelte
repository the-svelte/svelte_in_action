<script>
  import {count} from './countStore';

  const { increment, decrement, reset } = count;
</script>

<div>
  <p>count = {$count}</p>
  <button
    class="btn btn-outline-primary"
    on:click={increment}
  >+</button>
  <button
    class="btn btn-outline-primary"
    on:click={decrement}
  >-</button>
  <button
    class="btn btn-outline-primary"
    on:click={reset}
  >Reset</button>
</div>
