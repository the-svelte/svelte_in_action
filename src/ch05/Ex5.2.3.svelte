<script>
  let name = 'Tom';
  let age = 24;
</script>

<div>
  <div>
    <label class="form-label" for="inputName">Name</label>
    <input class="form-control" id="inputName" type="text" bind:value={name}>

    <h6>name</h6>
    <p>value: {name}</p>
    <p>typeof: {typeof name}</p>
  </div>

  <div>
    <label class="form-label" for="inputAge">Age</label>
    <input class="form-control" id="inputAge" type="number" bind:value={age}>

    <h6>age</h6>
    <p>value: {age}</p>
    <p>typeof: {typeof age}</p>
  </div>
</div>
