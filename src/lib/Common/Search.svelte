<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';

	export let items: { modelName: string; link: string }[] = [];
	export let placeholder: string = 'Search over all models';
	export let tutorialsMode: boolean = false;
	export let extraSearchResult = '';

	let searchString = '';
	let results: { modelName: string; link: string }[] = [];
	let isOpen = false;

	const dispatch = createEventDispatcher();

	function handleInput(event: InputEvent) {
		searchString = (event.target as HTMLInputElement).value;
		updateResults();
	}

	function updateResults() {
		if (searchString === '') {
			results = [];
			isOpen = false;
		} else {
			results = items
				.filter(
					(item) =>
						item.modelName.toLowerCase().includes(searchString.toLowerCase()) ||
						(item.link && item.link.toLowerCase().includes(searchString.toLowerCase()))
				)
				.slice(0, 12);
			isOpen = true;
		}
	}

	function handleClickOutside(event: MouseEvent) {
		const isOutside = !(event.target as HTMLElement).closest('.search-results');
		if (isOutside) isOpen = false;
	}

	function handleSelect(item: { modelName: string; link: string }) {
		dispatch('select', item);
		isOpen = false;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="search-bar">
	<input type="text" {placeholder} class="search-input" on:input={handleInput} />
	<svg
		class="search-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<FaSearch />
	</svg>

	{#if isOpen}
		<div class="search-results">
			{#if results.length > 0}
				{#each results as result}
					<a
						href={tutorialsMode
							? result.link.startsWith('https')
								? result.link
								: 'https://juliaai.github.io/DataScienceTutorials.jl/' + result.link
							: `https://juliaai.github.io/MLJ.jl/dev/models/${result.link}`}
					>
						<div class="search-result-item" on:click={() => handleSelect(result)}>
							{result.modelName}
							{result.packageName ? '(' + result.packageName + ')' : ''}
						</div>
					</a>
				{/each}
			{/if}
			{#if !tutorialsMode}
				<a href={'https://juliaai.github.io/MLJ.jl/stable/'}>
					<div
						class="search-result-item search-result-item-last"
						on:click={() => handleSelect(result)}
					>
						<span style="font-weight: 600">{extraSearchResult}</span>
					</div>
				</a>
			{:else}
				<a
					href={'https://juliaai.github.io/DataScienceTutorials.jl/search/index.html?q=' +
						searchString}
				>
					<div
						class="search-result-item search-result-item-last"
						on:click={() => handleSelect(result)}
					>
						<span style="font-weight: 600">{extraSearchResult}</span>
					</div>
				</a>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.search-bar {
		margin-top: 3rem;
		position: relative;
		z-index: 0;
		width: 60%;
		@media only screen and (max-width: 1300px) {
			width: 90%;
		}
	}

	.search-input {
		width: 100%;
		padding: 10px 40px 10px 30px;
		border: 1px solid #ccc;
		border-radius: 25px;
		font-size: 1rem;
		outline: none;
		font-family: 'Open Sans';
	}

	.search-icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		color: #999;
	}

	.search-results {
		position: absolute;
		/* top: calc(100% + 10px); */
		left: 20px;
		width: 95%;
		background-color: #fff;
		border: 1px solid #ccc;
		border-top: none;
		border-radius: 0 0 20px 20px;
		z-index: 999;
	}

	.search-result-item {
		padding: 10px;
		cursor: pointer;
	}

	.search-result-item:hover {
		background-color: #5d3561;
		color: white;
	}
	.search-result-item-last {
		color: #7d4782;
	}
	.search-result-item-last:hover {
		border-radius: 0 0 20px 20px;
	}
</style>
