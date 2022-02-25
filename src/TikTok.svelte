<script>
  import TikTokTable0 from './tiktok/TikTokTable0.svelte';
  import TikTokTable1 from './tiktok/TikTokTable1.svelte';
  import TikTokTable2 from './tiktok/TikTokTable2.svelte';
  import TikTokTable3 from './tiktok/TikTokTable3.svelte';

  let date = new Date();

  // setInterval(() => {
  //   date = new Date();
  // }, 1000);

</script>

<h4>TikTok</h4>

<div class="row row-cols-2">
  <div class="col">
    <TikTokTable0 {date} />
  </div>
  <div class="col">
    <TikTokTable1 {date} />
  </div>
  <div class="col">
    <TikTokTable2 {date} />
  </div>
  <div class="col">
    <TikTokTable3 {date} />
  </div>
</div>

