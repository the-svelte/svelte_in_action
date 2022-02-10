<script>
  let story = '';
</script>

<div>
  <div>
    <label class="form-label" for="inputStory">Life Story</label>
    <textarea class="form-control" id="inputStory" bind:value={story} />

    <h6>story</h6>
    <p>value: {story}</p>
    <p>typeof: {typeof story}</p>
  </div>
</div>
