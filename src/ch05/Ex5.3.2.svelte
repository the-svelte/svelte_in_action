<script>
  import ShippingLabel from './ShippingLabel.svelte'
</script>

<ShippingLabel>
  <div slot="address">
    123 Some Street, <br/>
    Somewhere, Some State 12345
  </div>
  <!-- <div slot="name">Mark Volkmann</div> -->
  <div slot="name">Anna</div>
</ShippingLabel>
