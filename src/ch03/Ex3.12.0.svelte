<script>
  import Select from './Select.svelte';

  const options = [
    '',
    'Red',
    { label: 'Green' },
    { label: 'Blue', value: 'b' },
  ];

  let selected;

  const handleSelect = (event) => selected = event.detail;
</script>

<Select options={options} on:select={handleSelect} />

{#if selected}
  <div>You selected {selected}.</div>
{/if}
