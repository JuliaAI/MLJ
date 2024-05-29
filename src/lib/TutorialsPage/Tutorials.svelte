<script lang="ts">
	import headString from '$lib/Data/head.js?raw';
	import { flattenJSON } from '../Common/helpers';
	import {
		stageEffectBasedOnURL,
		getTutorialsByTag,
		removeDuplicatesByKey,
		renameAttributes
	} from './helpers';
	import Search from '../Common/Search.svelte';
	import Title from '../Common/Title.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Carousel from 'svelte-carousel';

	async function fetchJson() {
		try {
			const response = await fetch('/TutorialsPage.json');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const json = await response.json();
			console.log(json);
		} catch (error) {
			console.error('Error fetching JSON:', error);
		}
	}
	console.log("check")

	// Call the async function
	fetchJson();

	const pattern = /const navItems = (\[.*?\]);/s;
	const match = headString.match(pattern);
	const navItemsJson = match ? match[1] : '';
	const navItems = eval(navItemsJson);

	onMount((): void => {
		stageEffectBasedOnURL();
	});

	const tutorialsByTag = getTutorialsByTag(navItems);

	const tags = [
		'Data Processing',
		'Classification',
		'Regression',
		'Clustering',
		'Dimensionality Reduction',
		'Neural Networks',
		'Class Imbalance',
		'Missing Value Imputation',
		'Encoders',
		'Feature Selection',
		'Hyperparameter Tuning',
		'Pipelines',
		'Iterative Models',
		'Ensemble Models',
		'Bayesian Models'
	];

	let flatTutorialsByTag = removeDuplicatesByKey(flattenJSON(tutorialsByTag), 'href');

	const attributeMapping = {
		name: 'modelName',
		href: 'link'
	};
	flatTutorialsByTag = renameAttributes(flatTutorialsByTag, attributeMapping);
</script>

<div class="container">
	<Title text="Looking for a [Ph.D. in ML?] We've Got All [Needed Tutorials]" />

	<div style="padding-top: 1rem; display:flex; justify-content: center; align-items: center;">
		<Search
			tutorialsMode={true}
			items={flatTutorialsByTag}
			placeholder="Search over all tutorials"
		/>
	</div>
	<div class="headtext">
		<p>
			Looking for an intuitive sequential progression of tutorials? See <a
				style="color: darkmagenta; "
				href="https://juliaai.github.io/DataScienceTutorials.jl/">DataScienceTutorials.jl</a
			>
		</p>
	</div>
	<div class="tag-buttons-container">
		<Carousel particlesToShow={6} particlesToScroll={3} infinite={true} initialPageIndex={0}>
			{#each tags.slice().reverse() as tag}
				<button
					id="{tag}-button"
					on:click={() => {
						goto(`/tutorials/${tag.replace('%20', ' ')}`);
						stageEffectBasedOnURL(tag);
					}}>{tag}</button
				>
			{/each}
		</Carousel>
	</div>
	<div class="tag-containers-wrapper">
		{#each tags as tag}
			<div class="tag-container" id={tag}>
				<h3 class="tag">{tag}</h3>
				<div class="tutorial-list">
					{#each tutorialsByTag[tag] as tutorial}
						<a
							href={'https://juliaai.github.io/DataScienceTutorials.jl/' + tutorial.href}
							class="tutorial-link"
						>
							<div class="tutorial-item">
								{tutorial.name}
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.headtext {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
		font-family: 'Poppins';
		@media screen and (max-width: 900px) {
			text-align: center;
			font-size: 0.9rem;
		}
	}
	:global(.sc-carousel-dots__container) {
		display: none !important;
	}
	.tag-buttons-container,
	:global(.sc-carousel__pages-container) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		// flex-wrap: wrap;
		gap: 0.8rem;
		margin: 1.5rem 3rem;
		@media screen and (max-width: 900px) {
			gap: 0.7rem;
			margin: 1.5rem 2rem;
		}
		button {
			background-color: #e9e9e9;
			color: rgb(34, 34, 34);
			border-radius: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.4rem 0.7rem;
			font-family: 'Poppins';
			font-size: 0.75rem;
			@media screen and (max-width: 900px) {
				font-size: 0.7rem;
				text-align: center;
			}

			&:hover {
				background-color: #6e4582;
				color: white;
			}
		}
	}
	.headline {
		h1 {
			@media only screen and (max-width: 900px) {
				display: none;
			}
			@media only screen and (max-width: 1500px) {
				width: 90% !important;
			}
		}
	}
	.tag-containers-wrapper {
		column-count: 3;
		// handle smaller screen
		@media screen and (max-width: 1000px) {
			column-count: 2;
		}
		// handle mobile
		@media screen and (max-width: 600px) {
			column-count: 1;
		}
		margin: 2rem 3rem;
	}

	.tag-container {
		margin-bottom: 2rem;
		break-inside: avoid-column;
		h3 {
			font-family: Poppins;
			background-color: #6e4582ee;
			color: white;
			padding: 0.5rem;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
			font-size: 1.5rem;
			text-align: center;
		}

		.tutorial-list {
			display: flex;
			gap: 1rem;
			flex-direction: column;
			padding: 1rem;
			border: 1px solid #6e458299;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;

			.tutorial-item {
				// width: 150px;
				// height: 150px;
				background-color: #e9e9e9;
				color: rgb(34, 34, 34);
				border-radius: 0.5rem;
				display: flex;
				font-size: 1rem;
				font-family: Poppins;
				text-align: left;
				font-weight: 400;
				padding: 0.5rem 1rem;
				transition: all 0.2s ease-in-out;

				&:hover {
					color: white;
					background-color: #6e4582ee;
				}
			}
		}
	}
</style>
