<script>
import DogList from './DogList.svelte';
import DogForm from './DogForm.svelte';

import {bigDogsStore} from './bigDogsStore';

let dog = {};
let mode = 'list';

function changeMode(event) {
  mode = event.detail;
  if (mode === 'create') dog = {};
}

function selectDog(event) {
  dog = event.detail;
}
</script>

<h1>Dogs</h1>
{#if mode === 'list'}
  <DogList on:mode={changeMode} on:select={selectDog} />
{:else}
  <DogForm on:mode={changeMode} {mode} {dog} />
{/if}
