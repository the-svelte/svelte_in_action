<script>
  let password = '';
  let username = '';

  const login = () => alert('You pressed Login.');
  const signup = () => alert('You pressed Signup.');
</script>

<section>
  <form on:submit|preventDefault={login}>
    <div class="mb-3">
      <lable class="form-label" for="inputUseraame">Username</lable>
      <input class="form-control" id="inputUseraame" type="text" bind:value={username} />
    </div>
  </form>
</section>
