<script>
  import Person from './Person.svelte';

  function calculateAge(age) {
    return age + 1;
  }

  function celebrate() {
    console.log('Happy Birthday!');
  }
</script>

<Person
  fullname="Jane Programmser"
  developer={true}
  ball={{name: 'baseb', grams: 149, new: false}}
  favoritedColors={['yello', 'orange']}
  age={calculateAge(21)}
  onBirthday={celebrate}
/>
