<script>
  let seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  let favoriteSeason = '';
</script>

<div>
  <h5>Favorite Season</h5>
  {#each seasons as season}
  <div class="form-check">
    <input class="form-check-input" id="input-{season}" type="radio" value={season} bind:group={favoriteSeason}>
    <label class="form-check-label" for="input-{season}">{season}</label>
  </div>
  {/each}

  <h6>favoriteSeason</h6>
  <p>value: {favoriteSeason}</p>
  <p>typeof: {typeof favoriteSeason}</p>
</div>
