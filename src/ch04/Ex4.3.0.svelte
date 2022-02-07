<script>
async function getDogs() {
  const url = 'https://dog.ceo/api/breeds/image/random/3';
  const res = await fetch(url);
  if (!res.ok || res.status === 404) return [];
  const json = await res.json();
  return json.message;
}
</script>

{#await getDogs()}
  <div>Waiting for dogs...</div>
{:then dogs}
  {#each dogs as dog}
    <div>{dog.name} is a {dog.breed}.
      <img alt="dog" src={dog}/>
    </div>
  {/each}
{:catch error}
  <div class="alert alert-error">Error: {error.message}</div>
{/await}
