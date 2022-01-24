<script>
  import Pets from './Pets.svelte';

  const pet0 = 'rabbit';
  const pet5 = 'Duck';
</script>

<Pets
  pet0="Green {pet0}"
  pet1={null}
  pet2={undefined}
  pet4={`snake`}
  {pet5}
/>
