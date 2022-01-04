<script>
	let breed = 'Whipper';
	
	async function getDogs() {
		const url =
		  'https://dog.ceo/api/breed/' +
			`${breed.toLowerCase()}/images/random/1`;
	  const res = await fetch(url);
		if (!res.ok || res.status === 404) return [];
		const json = await res.json();
		return json.message;
	}
	
	let gosPromise = getDogs();
</script>

<h1>Hello {name}!</h1>
