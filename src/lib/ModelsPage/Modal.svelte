<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let showModal: boolean = false;
	export let content: string = '';
	export let models: string[] = [];

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
			<div style="padding-left:1.8rem; display: flex; flex-direction: row; gap: 5rem;">
				<h4 style="min-width:100px; text-decoration:underline;">{content} Models</h4>
				<h4 style="min-width:100px; text-decoration:underline;">Package</h4>
			</div>
			<div class="list-container">
				{#each models as model, i}
					<button class="list-button">
						<a href={`https://juliaai.github.io/MLJ.jl/dev/models/${model.link}`}>
							<div style="padding-left:1rem; display: flex; flex-direction: row; gap: 8rem;">
								<div style="width:100px">{model.modelName}</div>
								<div style="width:100px">({model.packageName})</div>
							</div>
						</a>
					</button>
				{/each}
			</div>
			<div class="go-back">
				<button on:click={closeModal}>Go Back</button>
			</div>
		</div>
	</button>
{/if}

<style lang="scss">
	.modal {
		display: block;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 1.5rem;
		color: white;
	}

	.modal-content {
		background-color: #5d3561;
		margin: 5% auto;
		padding: 20px;
		border: 1.5px solid #fff;
		width: 60%;
		border-radius: 1.5rem;
		position: relative;
	}

	.list-container {
		margin-top: 0.5rem;
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
		max-height: 500px;
		overflow-y: auto;
		scrollbar-color: rgb(255, 255, 255) #ffffff00;

		.list-button {
			padding: 0.6rem 0rem;
			border-bottom: 1px solid #f1f1f177;
			font-size: 0.9rem;
			text-align: left;
			display: flex;
			align-items: center;
			a {
				color: white;
				font-family: 'Poppins';
			}
			&:hover {
				background-color: #1f1f1f66;
			}
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

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	.go-back {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin-top: 1rem;
		button {
			background-color: white;
			padding: 0.5rem 2rem;
			border-radius: 1rem;
			font-family: Poppins;
			font-size: 0.9rem;
		}
	}
</style>
