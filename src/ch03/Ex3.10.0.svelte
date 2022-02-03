<script>
  let diameter = 1;
  let height = 1;

  $: volume = area * height;
  $: area = Math.PI * radius ** 2;
  $: radius = diameter / 2;
</script>

<h1>cylinder Calculations</h1>
<label for="">
  Diameter
  <input type="number" bind:value={diameter}>
</label>
<label for="">
  Height
  <input type="number" bind:value={height}>
</label>
<label for="">Radius: {radius}</label>
<label for="">Area: {area.toFixed(2)}</label>
<label for="">Volume: {volume.toFixed(2)}</label>
