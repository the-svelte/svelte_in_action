<script>
  import {dogStore} from './dogStore';
  import {bigDogsStore} from './bigDogsStore';

  $dogStore = {
    'aaa': { id: 'aaa', name: 'A0', breed: 'a0', size: 'small' },
    'bbb': { id: 'bbb', name: 'B1', breed: 'b1', size: 'large' },
    'ccc': { id: 'ccc', name: 'C2', breed: 'c2', size: 'medium' },
    'ddd': { id: 'ddd', name: 'D3', breed: 'd3', size: 'large' },
  };
</script>

<div>
  <h4>Dogs</h4>
  {#each Object.values($dogStore) as dog}
    <p>{dog.name} : {dog.breed} : {dog.size}</p>
  {/each}
</div>
<div>
  <h4>Big Dogs</h4>
  {#each $bigDogsStore as dog}
    <p>{dog.name} {dog.size}</p>
  {/each}
</div>
