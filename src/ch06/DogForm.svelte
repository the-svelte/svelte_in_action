<script>
  import {createEventDispatcher} from 'svelte';
  import {dogStore} from './dogStore';
  import {getGuid} from './util';

  const dispatch = createEventDispatcher();
  export let dog;
  export let mode;

  let {name, breed, size} = dog;
  $: canSave = name && breed && size;

  function save() {
    const id = dog.id || getGuid();
    dogStore.update(dogMap => {
      dogMap[id] = { id, name, breed, size };
      return dogMap;
    });
    dispatch('mode', 'list');
  }
</script>

<form on:submit|preventDefault={save}>
  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <!-- svelte-ignore a11y-autofocus -->
      <input type="text" class="form-control" id="name" bind:value={name} autofocus />
    </div>
  </div>
  <div class="row mb-3">
    <label for="breed" class="col-sm-2 col-form-label">Breed</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="breed" bind:value={breed} />
    </div>
  </div>
  <div class="row mb-3 align-items-center">
    <label for="" class="col-sm-2 col-form-label">Size</label>
    <div class="col-sm-10">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="" id="inlineRadio1" value="small" bind:group={size}>
        <label class="form-check-label" for="inlineRadio1">Small</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="" id="inlineRadio2" value="medium" bind:group={size}>
        <label class="form-check-label" for="inlineRadio2">Medium</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="" id="inlineRadio3" value="large" bind:group={size}>
        <label class="form-check-label" for="inlineRadio3">Large</label>
      </div>
    </div>
  </div>
  <button
    type="submit"
    class="btn btn-primary"
    disabled={!canSave}
  >{mode === 'create' ? 'Save' : 'Update'}</button>
  <button
    type="button"
    class="btn btn-primary"
    on:click={() => dispatch('mode', 'list')}
  >Cancel</button>
</form>
