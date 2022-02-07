<script>
const people = [
  { id: '000', name: 'Sarah', age: 12 },
  { id: '111', name: 'Kate', age: 22 },
  { id: '222', name: 'Dave', kind: 'Dog' },
  { id: '333', dog: 'Dave', type: '🐶' },
];
// const people = [];
</script>

{#each people as person (person.id)}
  <div>{person.name} is {person.age} years old.</div>
{:else}
  <div>There are no people</div>
{/each}
