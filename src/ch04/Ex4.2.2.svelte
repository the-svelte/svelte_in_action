<script>
const people = [
  { name: 'Sarah', age: 12 },
  { name: 'Kate', age: 22 },
  { name: 'Dave', kind: 'Dog' },
  { dog: 'Dave', type: '🐶' },
];
// const people = [];
</script>

{#each people as {name, age}}
  <div>{name} is {age} years old.</div>
{:else}
  <div>There are no people</div>
{/each}
