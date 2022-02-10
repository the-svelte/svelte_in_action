<script>
  let flavors = ['vanilla', 'chocolate', 'strawberry', 'sinnamon'];
  let favoriteFlavors = [];
</script>

<div>
  <h5>Favorite Flavors</h5>
  {#each flavors as floavor}
  <div class="form-check">
    <input class="form-check-input" id="input-{floavor}" type="checkbox" value={floavor} bind:group={favoriteFlavors}>
    <label class="form-check-label" for="input-{floavor}">{floavor}</label>
  </div>
  {/each}

  <h6>favoriteFlavors</h6>
  <p>value: {favoriteFlavors}</p>
  <p>typeof: {typeof favoriteFlavors}</p>
</div>
