<script>
  export let on = false;

  $: color = on ? 'green' : 'red';
</script>

<div style="background-color: {color}">{color}</div>
