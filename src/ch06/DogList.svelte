<script>
  import {createEventDispatcher} from 'svelte';
  import {dogStore} from './dogStore';
  import {sortOnName} from './util';

  const dispatch = createEventDispatcher();

  $: dogs = sortOnName(Object.values($dogStore));

  let selectedDogs = [];

  function deleteSelected() {
    const ids = selectedDogs.map(dog => dog.id);
    dogStore.update(dogMap => {
      for (const id of ids) {
        delete dogMap[id];
      }
      return dogMap;
    });
    selectedDogs = [];
  }

  function dogToString(dog) {
    return dog.name + ' is a ' + dog.size + ' ' + dog.breed;
  }

  function onSelect(event) {
    const {selectedOptions} = event.target;
    selectedDogs = Array.from(selectedOptions).map(
      option => $dogStore[option.value]
    );
    dispatch('select', selectedDogs[0]);
  }
</script>

{#if dogs.length}
  <select class="form-select" multiple on:change={onSelect}>
    {#each dogs as dog (dog.id)}
      <option value={dog.id}>{dogToString(dog)}</option>
    {/each}
  </select>
{:else}
  <h3>No dogs have been added yet.</h3>
{/if}

<div class="mt-4">
  <button
    class="btn btn-primary"
    on:click={() => dispatch('mode', 'create')}
  >Create</button>
  <button
    class="btn btn-primary"
    disabled={selectedDogs.length === 0}
    on:click={() => dispatch('mode', 'update')}
  >Update</button>
  <button
    class="btn btn-primary"
    disabled={selectedDogs.length === 0}
    on:click={deleteSelected}
  >Delete</button>
</div>
