<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let text = "";
</script>

<div class="headline" style={'align-items: center'}>
	<p style={" width: 80%;"}>
		<SvelteMarkdown source={text} />
	</p>
</div>

<style lang="scss">
	.headline {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 3rem;
		margin-top: 0.5rem;
		padding: 1rem;


		p {
			margin: 0.5rem;
			font-family: 'Lato';
			font-weight: 500;
			text-align: center;
			font-size: 1rem;
			max-width: 80%;

		}
		:global(a) {
			color: darkmagenta;
		}
	}
</style>
