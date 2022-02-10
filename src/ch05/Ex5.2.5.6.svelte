<script>
  let aircrafts = [
    { key: 'F4', value: 'Phantom' },
    { key: 'F5E', value: 'Tiger' },
    { key: 'F14', value: 'Tomcat' },
    { key: 'F15', value: 'Eagle' },
    { key: 'F16', value: 'Falcon' },
    { key: 'F18', value: 'Hornet' },
    { key: 'F22', value: 'Raptor' },
  ];
  let favoriteAircraft = '';
</script>

<div>
  <h5>Favorite Aircraft</h5>
  <div>
    <label class="form-label" for="selectColor">favorite?</label>
    <select class="form-select" id="selectColor" bind:value={favoriteAircraft}>
      {#each aircrafts as {key, value}}
        <option {value}>{key}</option>
      {/each}
    </select>
  </div>

  <h6>favoriteAircraft</h6>
  <p>value: {favoriteAircraft}</p>
  <p>typeof: {typeof favoriteAircraft}</p>
</div>
