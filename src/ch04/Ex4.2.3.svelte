<script>
const person = {
  color: 'yellow',
  name: 'Mark',
  spouse: {
    color: 'blue',
    name: 'Tami',
  },
};
</script>

{#each Object.entries(person) as [key, value]}
  <div>found key "{key}" with value {JSON.stringify(value)}</div>
{/each}
