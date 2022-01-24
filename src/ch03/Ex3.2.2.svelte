<script>
  import InputScore from './InputScore.svelte';

  let score = 87;
  const scoreAttrs = {
    type: 'number',
    min: 0,
    max: 100,
  };
</script>

<InputScore
  {...scoreAttrs} score={score}
/>
