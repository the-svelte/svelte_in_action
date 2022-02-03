<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let options;

  const getLabel = (option) => {
    return typeof option === 'object' ? option.label : option;
  };

  const getValue = option => {
    return typeof option === 'object' ? option.value || option.label : option;
  };
</script>

<select on:change={event => dispatch('select', event.target.value)}>
  <option value="" disabled>--선택하세요--</option>
  {#each options as option}
    <option value={ getValue(option) }>{ getLabel(option) }</option>
  {/each}
</select>
