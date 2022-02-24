<script>
  import MaskedInput from './MaskedInput.svelte';
  let phone = '';
</script>

<label for="">Phone</label>
<MaskedInput
  mask="(999)999-9999"
  bind:value={phone}
/>

<div>phone = {phone}</div>
