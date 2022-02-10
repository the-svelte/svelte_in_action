<script>
  let aircrafts = {
    Phantom: 4,
    Tiger: 5,
    Tomcat: 14,
    Eagle: 15,
    Falcon: 16,
    Hornet: 18,
    Raptor: 22,
  };
  let favoriteAircraft;

  $: crafts = Object.entries(aircrafts);
</script>

<div>
  <h5>Favorite Aircraft</h5>
  <div>
    <label class="form-label" for="selectColor">favorite?</label>
    <select class="form-select" id="selectColor" bind:value={favoriteAircraft}>
      <option disabled>선택하세요</option>
      {#each crafts as [key, value]}
        <option {value}>{key}</option>
      {/each}
    </select>
  </div>

  <h6>favoriteAircraft</h6>
  <p>value: {favoriteAircraft}</p>
  <p>typeof: {typeof favoriteAircraft}</p>
</div>
