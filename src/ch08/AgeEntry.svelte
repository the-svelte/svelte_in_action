<script>
  import {onMountFocus, onMountLog} from './helper';

  export let age;

  onMountLog('AgeEntry');
  onMountFocus();
</script>

<div>
  <label for="">Age</label>
  <input id="" type="number" bind:value={age} min="0" />
</div>
