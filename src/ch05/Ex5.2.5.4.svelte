<script>
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  let favoriteColor = '';
</script>

<div>
  <h5>Favorite Color</h5>
  <div class="">
    <label class="form-label" for="selectColor">favorite?</label>
    <select class="form-select" id="selectColor" bind:value={favoriteColor}>
      {#each colors as color}
        <option>{color}</option>
      {/each}
    </select>
  </div>

  <h6>favoriteColor</h6>
  <p>value: {favoriteColor}</p>
  <p>typeof: {typeof favoriteColor}</p>
</div>
