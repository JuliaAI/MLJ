<script>
	import '$lib/app.css';
	import Header from '$lib/Common/Header.svelte';
	import Footer from '$lib/Common/Footer.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
	</style>
</svelte:head>

<Header />
<slot />
<Footer />
