<script>
  let happy = true;
</script>

<div>
  <div class="form-check">
    <input class="form-check-input" id="inputHappy" type="checkbox" bind:checked={happy}>
    <label class="form-check-label" for="inputHappy">Happy?</label>
  </div>

  <h6>happy</h6>
  <p>value: {happy}</p>
  <p>typeof: {typeof happy}</p>
</div>
