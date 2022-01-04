<script>
const people = [
  {
    id: '09bcbe6cd3faf7dd89b703be7ef5e481fff002fb79db90247a3f2863eb5c04c689f2',
    name: 'Sue',
    age: 32,
  },
  {
    id: '1cbcde304adec67c01c8db321182848cf6c2948641935feeba9f4b7bf30c54afe32f',
    name: 'Sarah',
    age: 28,
  },
];
</script>

{#each people as person (person.id)}
  <div>{person.name} is {person.age} years old. ({person.id})</div>
{/each}
