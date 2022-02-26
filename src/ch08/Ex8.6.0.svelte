<script>
  import {onMountLog} from './helper';
  import AgeEntry from './AgeEntry.svelte';
  import NameEntry from './NameEntry.svelte';

  let age = 0;
  let enterAge = false;
  let name = '';

  onMountLog('App');
</script>

{#if enterAge}
  <AgeEntry bind:age />
{:else}
  <NameEntry bind:name />
{/if}

<div>
  <label for="inputEnterAge">Enter Age?</label>
  <input id="inputEnterAge" type="checkbox" bind:checked={enterAge} />
</div>

<div>{name} is {age} years old.</div>
