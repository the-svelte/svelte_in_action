<script>
  let aircrafts = {
    F4: 'Phantom',
    F5E: 'Tiger',
    F14: 'Tomcat',
    F15: 'Eagle',
    F16: 'Falcon',
    F18: 'Hornet',
    F22: 'Raptor',
  };
  let favoriteAircraft = '';

  $: crafts = Object.entries(aircrafts);
</script>

<div>
  <h5>Favorite Aircraft</h5>
  <div>
    <label class="form-label" for="selectColor">favorite?</label>
    <select class="form-select" id="selectColor" bind:value={favoriteAircraft}>
      {#each crafts as [key, value]}
        <option value={value}>{key}</option>
      {/each}
    </select>
  </div>

  <h6>favoriteAircraft</h6>
  <p>value: {favoriteAircraft}</p>
  <p>typeof: {typeof favoriteAircraft}</p>
</div>
