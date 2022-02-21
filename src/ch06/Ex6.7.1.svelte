<script>
  import Point from './point';
  import {lineStore, pointStore} from './pointLineStore';

  let point = pointStore(1, 2);
  let line = lineStore(new Point(0, 0), new Point(2, 3));

  function translate() {
    const dx = 2;
    const dy = 3;

    point.translate(dx, dy);
    line.translate(dx, dy);
  }
</script>

<h1>point store = {$point.x} {$point.y}</h1>
<h1>line store = {$line.start.toString()}, {$line.end.toString()}</h1>

<button class="btn btn-outline-primary" on:click={translate}>Translate</button>
