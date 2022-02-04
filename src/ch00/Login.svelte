<script>
  let password = '';
  let username = '';

  const login = () => alert('You pressed Login.');
  const signup = () => alert('You pressed Signup.');
</script>

<section>
  <form on:submit|preventDefault={login}>
    <div class="mb-3">
      <label class="form-label" for="inputUsername">Username</label>
      <input class="form-control" id="inputUsername" type="text" bind:value={username} />
    </div>
    <div class="mb-3">
      <label class="form-label" for="inputPassword">Password</label>
      <input class="form-control" id="inputPassword" type="password" bind:value={password} />
    </div>
    <div>
      <button type="submit" class="btn btn-primary">Login</button>
      <button type="button" class="btn btn-secondary" on:click={signup}>Sign Up</button>
    </div>
  </form>
</section>
