<script>
  export let age;
  export let ball;
  export let developer;
  export let favoritedColors;
  export let fullname;
  export let onBirthday;
</script>

<div>
  {fullname} is {age} years old and
  {developer ? 'is' : 'is not'} a developer.
</div>
<div>
  They like the colors {favoritedColors.join(' and ')}.
</div>
<div>
  The like to throw {ball.new ? 'a new' : 'an old'} {ball.name}
  that weight {ball.grams} grams.
</div>
<button on:click={onBirthday}>It's my birthday!</button>
