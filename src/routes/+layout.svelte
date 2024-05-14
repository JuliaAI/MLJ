<script>
	import '$lib/app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	export const prerender = true;
</script>

<Header />
<slot />
<Footer />

