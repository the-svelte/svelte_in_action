<script>
  import Hello from './Hello.svelte';
  import MyProps from './MyProps.svelte';

  function myCallbackFunction() {
    return 'fn';
  }
</script>

<Hello name="Svelte" />
<MyProps myProp={false} />
<MyProps myProp={7} />
<MyProps myProp={{ name: 'baseball', grams: 149, new: false }} />
<MyProps myProp={['red', 'green', 'blue']} />
<MyProps myProp={myCallbackFunction} />
<MyProps myProp={text => text.toUpperCase()} />
