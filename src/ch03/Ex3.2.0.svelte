<script>
  import Person from './Person.svelte';
  import Pets from './Pets.svelte';
  import Score from './Score.svelte';

  function calculateAge(age) {
    return age + 1;
  }

  function celebrate() {
    console.log('Happy Birthday!');
  }

  const pet = 'rabbit';
  const pet3 = 'Duck';

  const scoreObj = {
    score: 87,
    min: 0,
    max: 100,
  };
</script>

<Person
  fullname="Jane Programmser"
  developer={true}
  ball={{name: 'baseb', grams: 149, new: false}}
  favoritedColors={['yello', 'orange']}
  age={calculateAge(21)}
  onBirthday={celebrate}
/>

<Pets
  pet0="Green {pet}"
  pet1={null}
  pet2={`snake`}
  {pet3}
/>
<Score
  {...scoreObj}
/>
