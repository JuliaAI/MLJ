<script lang="ts">
	// Helpers and builtins
	import { flattenJSON, renameAttributes } from '../Common/helpers';
	import {
		stageEffectBasedOnURL,
		getTutorialsByTag,
		getExternalTutorialsByTag,
		removeDuplicatesByKey,
		appendValues
	} from './helpers';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	// Components
	import Search from '../Common/Search.svelte';
	import Hints from '../Common/Hints.svelte';
	// Data
	import YAML from 'yaml';
	import headString from '$lib/Data/head.js?raw';
	import tutorialsDataYaml from '../../data/TutorialsPage.yaml?raw';
	import externalTutorialsDataYaml from '../../data/ExternalTutorials.yaml?raw';

	// 1. Get tutorials data and extract hints and apply their logic
	let tutorialsData = YAML.parse(tutorialsDataYaml);
	let hints = tutorialsData['hints'];
	let randomInd = 0; // give first hint more importance
	let hint_dur = tutorialsData['hint_dur'] * 1000;
	// every time hint_dur passes, recompute randomInd
	let hint_timer = setInterval(function () {
		randomInd = Math.floor(Math.random() * hints.length);
	}, hint_dur);

	// 2. Parse the navItems JSON from the string
	const pattern = /const navItems = (\[.*?\]);/s;
	const match = headString.match(pattern);
	const navItemsJson = match ? match[1] : '';
	const navItems = eval(navItemsJson);

	// 3. Read external tutorials data
	let externalTutorialsData = YAML.parse(externalTutorialsDataYaml);

	// 4. Pivot the tutorials by tag and merge them together so they can be looped on later
	const tags = tutorialsData['tags'];
	const tutorialsByTag = getTutorialsByTag(navItems);
	const extraTutorialsByTag = getExternalTutorialsByTag(flattenJSON(externalTutorialsData));
	appendValues(tutorialsByTag, extraTutorialsByTag);

	// 5. Flatten and rename attributes to enable search
	let flatTutorialsByTag = removeDuplicatesByKey(flattenJSON(tutorialsByTag), 'href');
	const attributeMapping = {
		name: 'itemName',
		href: 'itemLink'
	};
	flatTutorialsByTag = renameAttributes(flatTutorialsByTag, attributeMapping);

	// Logic for the stage effect when page is open after tutorial is clicked
	onMount(() => {
		stageEffectBasedOnURL();
		return () => {
			clearInterval(hint_timer);
		};
	});
</script>

<div class="container">
	<!-- Search Bar -->
	<div>
		<div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
			<Search
				tutorialsMode={true}
				items={flatTutorialsByTag}
				placeholder={tutorialsData['searchText']}
				extraSearchResult={tutorialsData['extraSearchText']}
			/>
		</div>
	</div>

	<!-- Hints appearing below the search bar -->
	<Hints text={hints[randomInd]} />

	<!-- Tags appearing below hints -->
	<div class="tag-buttons-container">
		{#each tags as tag}
			<button
				id="{tag}-button"
				on:click={() => {
					stageEffectBasedOnURL(tag);
					goto(`/tutorials/${tag.replace('%20', ' ')}`);
				}}>{tag}</button
			>
		{/each}
	</div>

	<!-- Tutorials grid by tag -->
	<div class="tag-containers-wrapper">
		{#each tags as tag}
			<div class="tag-container" id={tag}>
				<h3 class="tag">{tag}</h3>
				<div class="tutorial-list">
					{#if tutorialsByTag[tag]}
						<!-- Tutorial list for each grid item -->
						{#each tutorialsByTag[tag] as tutorial}
							<div class="tutorial-container">
								<a
									href={tutorial.href.startsWith('https')
										? tutorial.href
										: 'https://juliaai.github.io/DataScienceTutorials.jl/' + tutorial.href}
									class="tutorial-link"
								>
									<div class="tutorial-item">
										{tutorial.name}
									</div>
								</a>
								<div class="intended-learning-outcomes">
									<p style="font-weight: bold; margin-left: 0.5rem; margin-bottom: 0.5rem">
										Intended Learning Outcomes:
									</p>
									{#if tutorial.ilos.length > 0}
										<ul style="margin-left: 2rem; margin-right: 1.5rem;">
											{#each tutorial.ilos as ilo}
												<li style="text-align: justify; margin-bottom: 0.5rem">{ilo}</li>
											{/each}
										</ul>
										<!-- else -->
									{:else}
										<p style="margin-left: 0.5rem; margin-right: 1.5rem;">
											No intended learning outcomes available for this tutorial.
										</p>
									{/if}
								</div>
							</div>
						{/each}
					{/if}
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
		margin-top: 2rem;
		margin-bottom: -2rem;
		font-family: 'Lato';
		font-size: 1rem;
		:global(a) {
			color: darkmagenta;
		}
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
		flex-wrap: wrap;
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

	.intended-learning-outcomes {
		display: none; /* Hide outcomes by default */
		padding: 0.5rem;
		background-color: #532f66;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 20px;
		left: 0;
		right: 0;
		width: 80%;
		margin: auto;
		color: white;
		border-radius: 1rem;
		padding: 1rem;
		// for small screen disable this feature due to lack of space
		@media screen and (max-width: 600px) {
			display: none !important;
		}
	}

	.tutorial-container:hover .intended-learning-outcomes {
		display: block; /* Show outcomes on hover */
	}
</style>
