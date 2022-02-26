<script>
  import {onMountFocus, onMountLog} from './helper';

  export let name;

  onMountLog('NameEntry');
  onMountFocus();
</script>

<div>
  <label for="">Name</label>
  <input id="" type="text" bind:value={name} />
</div>
