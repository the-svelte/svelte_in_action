<script>
  import ColorSlider from './ColorSlider.svelte';
  import ColorInput from './ColorInput.svelte';

  export let hex;

  let red = 200;
  let green = 200;
  let blue = 200;

  function getHex(number) {
    const hex = number.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  // $: red = parseInt(hex.toslice(0,2), base);
  $: hex = '#' + getHex(red) + getHex(green) + getHex(blue);
</script>

<ColorSlider name="Red" bind:value={red} />
<ColorSlider name="Green" bind:value={green} />
<ColorSlider name="Blue" bind:value={blue} />

<ColorInput bind:hex={hex} bind:red bind:green bind:blue />

