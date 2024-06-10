<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const dispatch = createEventDispatcher();

	export let showModal: boolean = false;
	export let name: string = '';
	export let text: string = '';
	export let link: string = '';

	function closeModal() {
		dispatch('closeModal');
	}

	function handleClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
</script>

{#if showModal}
	<button class="modal" on:click={handleClick}>
		<div class="modal-content">
			<h3>{name}</h3>
			<div style="display: flex; flex-direction: row; gap: 5rem;">
				<SvelteMarkdown source={text} />
			</div>
			<div class="buttons">
				<button on:click={closeModal}>Go Back</button>
				<button on:click={()=>window.open(link, '_blank')}>See {name}</button>
			</div>
		</div>
	</button>
{/if}

<style lang="scss">
	.modal {
		display: block;
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 1.5rem;
		color: white;
		cursor: auto !important;
	}

	.modal-content {
		background-color: #5d3561;
		margin: 5% auto;
		max-width: 60%;
		@media screen and (max-width: 600px) {
		max-width: 90%;
		}
		border-radius: 1.5rem;
		position: relative;
		padding: 30px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		:global(p) {
			color: white;
			font-family: 'Poppins';
			text-align: justify;
			font-size: 1.0rem;
			margin: 0rem 1rem;
			line-height: 1.5rem;
			background-color: #00000033;
			padding: 20px;
			border-radius: 10px;
			cursor: text !important;
		}
		:global(h3) {
			color: white;
			font-family: 'Lato';
			font-style: italic;
			font-size: 2rem;
			text-align: center;
			margin-bottom: 1rem;
		}
		:global(a) {
			text-decoration: underline;
			cursor: pointer !important;
		}
	}

	.close {
		color: #aaa;
		position: absolute;
		right: 15px;
		top: 3px;
		font-size: 1.3rem;
		font-weight: bold;
	}


	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin-top: 1rem;
		gap: 2rem;
		// for small screen make flex direction column
		@media screen and (max-width: 600px) {
			flex-direction: column;
		}
		
		button {
			background-color: #00000033;
			padding: 0.5rem 2rem;
			border-radius: 1rem;
			font-family: Poppins;
			font-size: 0.9rem;
			color: white;
		}

		button:hover {
			background-color: #ffffff;
			color: black;
		}
	}
</style>
