<script>
  export let numbers;

  // const sum = numbers.reduce((acc, n) => acc + n);
  $: sum = numbers.reduce((acc, n) => acc + n);
</script>

<div>number are {numbers.join(', ')}</div>
<div>sum is {sum}</div>
