<script lang="ts">
	export let text = "";

	let htmlText = text.replace(/\[/g, '<span>').replace(/\]/g, '</span>');
</script>

<div class="headline">
	<h1>
		{@html htmlText}
	</h1>
</div>

<style lang="scss">
	.headline {
		display: flex;
		cursor: pointer;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 3rem;
		margin-top: 1.5rem;
		padding: 1rem;
		width: 100%;

		h1 {
			margin: 1rem;
			font-family: 'Lato';
			font-weight: 700;
			font-style: italic;
			font-size: 2.4rem;
			text-align: center;
			width: 80%;
		}
		:global(span) {
			color: darkmagenta;
		}
	}
</style>
