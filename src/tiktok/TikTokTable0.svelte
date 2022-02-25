<script>
  export let date;
</script>

<table class="table font-monospace">
  <thead>
    <tr>
      <td class="text-start">function</td>
      <td class="text-end">return</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-start">d.valueOf();</td>
      <td class="text-end">{date.valueOf()}</td>
    </tr>
    <tr>
      <td class="text-start">d.toUTCString();</td>
      <td class="text-end">{date.toUTCString()}</td>
    </tr>
    <tr>
      <td class="text-start">d.toGMTString();</td>
      <td class="text-end">{date.toGMTString()}</td>
    </tr>
    <tr>
      <td class="text-start">d.toISOString();</td>
      <td class="text-end">{date.toISOString()}</td>
    </tr>
    <tr>
      <td class="text-start">d.toJSON();</td>
      <td class="text-end">{date.toJSON()}</td>
    </tr>
  </tbody>
  <caption>value</caption>
</table>
