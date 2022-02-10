<script>
  export let name;
  export let value;
</script>

<div>
  <label class="form-label" for="slider">{name}: {value}</label>
  <input class="form-range" id="slider" type="range" min="0" max="255" bind:value>
</div>
