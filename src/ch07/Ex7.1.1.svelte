<script>
  import sanitizeHtml from 'sanitize-html';

  const SAFE = false;
  const SANITIZE_OPTIONS = {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
    allowedAttributes: {img: ['alt', 'src']},
  };

  function buildScript(content) {
    const s = 'script';
    return `<${s}>${content}</${s}>`;
  }

  function sanitize(markup) {
    return SAFE
      ? sanitizeHtml(markup, SANITIZE_OPTIONS)
      : markup;
  }

  const markup1 = buildScript('console.log("pwend script")');

  const markup2 = '<img alt="star" src="star.jpg" />'

  const markup3 = '<img alt="star" src="star.jpg" onload="console.log(\'pwned by onload\')" />'

  const markup4 = '<img alt="missing" src="missing.png" onerror="console.log(\'pwned by onerror\')" />'

  const markups = [markup1, markup2, markup3, markup4];
</script>

<h2>Check the console</h2>
{#each markups as markup}
  {@html sanitize(markup)}
{/each}

<style>
.img {
  width: 4rem;
}
</style>
