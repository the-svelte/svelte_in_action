<script>
  export let type;
  export let min;
  export let max;
  export let score;
</script>

<div>
  <p>Type: {type}</p>
  <p>Min: {min}</p>
  <p>Max: {max}</p>
  <p>Score: {score}</p>
  <form>
    <div>
      <label
        for="exampleInputNumber1"
        class="form-label"
      >You Number</label>
      <input
        class="form-control"
        type="number"
        alt={type}
        max={max}
        min={min}
        bind:value={score}
        id="exampleInputNumber1"
      />
    </div>
  </form>
</div>
