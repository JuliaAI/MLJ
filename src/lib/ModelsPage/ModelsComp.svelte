<script lang="ts">
	// Helpers and builtins
	import { onMount } from 'svelte';
	import { flattenJSON, renameAttributes } from '../Common/helpers';
	import { markdownToJSON } from './helpers';
	// Components
	import Modal from './Modal.svelte';
	import Search from '../Common/Search.svelte';
	import Hints from '../Common/Hints.svelte';
	// Data
	import YAML from 'yaml';
	import modelBrowser from '$lib/Data/model_browser.md?raw';
	import modelsDataYaml from '../../data/ModelsPage.yaml?raw';
	import tutorialsDataYaml from '../../data/TutorialsPage.yaml?raw';

	// 1. Get tutorials data to hide Tutorials button when needed
	let tutorialsData = YAML.parse(tutorialsDataYaml);
	const tags = tutorialsData['tags'];

	// 2. Get models data
	let modelsData = YAML.parse(modelsDataYaml);

	// 3. Extract hints and duration from models data and apply its logic
	let hints = modelsData['hints'];
	let randomInd = Math.floor(Math.random() * hints.length);
	let hint_dur = modelsData['hint_dur'] * 1000;

	// every time hint_dur passes, recompute randomInd
	let hint_timer = setInterval(function () {
		randomInd = Math.floor(Math.random() * hints.length);
	}, hint_dur);

	// 4. Load model browser JSON and flatten/rename to allow search
	const modelBrowserJson = markdownToJSON(modelBrowser);
	let flatModelBrowser = flattenJSON(modelBrowserJson);
	const attributeMapping = {
		modelName: 'itemName',
		link: 'itemLink'
	};
	flatModelBrowser = renameAttributes(flatModelBrowser, attributeMapping);

	// 5. Define functions to switch between the view for two types of model genres (and save/load state)
	let learningMode: boolean = true;
	const setLearningMode = (): void => {
		learningMode = true;
		// After setting the mode, save it to local storage
		localStorage.setItem('learningMode', 'true');
	};
	const setModelingMode = (): void => {
		learningMode = false;
		// After setting the mode, save it to local storage
		localStorage.setItem('learningMode', 'false');
	};
	const loadStateFromLocalStorage = (): void => {
		const savedLearningMode: string | null = localStorage.getItem('learningMode');
		// If there's a saved learning mode in local storage
		if (savedLearningMode !== null) {
			// Parse the string to boolean and set the learning mode
			learningMode = savedLearningMode === 'true';
		}
	};

	onMount(() => {
		loadStateFromLocalStorage();
		return () => {
			clearInterval(hint_timer);
		};
	});

	// 6. Define logic for showing and hiding the models list modal
	let showModal = false;
	let modalContent = '';
	let models: any[] = [];

	function openModal(content: string, modelList: any[]) {
		showModal = true;
		modalContent = content;
		models = modelList;
	}

	function closeModal() {
		showModal = false;
		modalContent = '';
		models = [];
	}

	// 7. Shortcut variable names to access genre names, descriptions, and images
	const learningProblems = modelsData['learningTasks']['problems'];
	const learningDescriptions = modelsData['learningTasks']['descriptions'];
	const learningImages = modelsData['learningTasks']['images'];

	const modelingProblems = modelsData['modelingTasks']['problems'];
	const modelingDescriptions = modelsData['modelingTasks']['descriptions'];
	const modelingImages = modelsData['modelingTasks']['images'];
</script>

<!-- Search Bar -->
<div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
	<Search
		items={flatModelBrowser}
		placeholder={modelsData['searchText']}
		extraSearchResult={modelsData['extraSearchText']}
	/>
</div>

<!-- Hints appearing below the search bar -->
<Hints text={hints[randomInd]} />

<!-- Switch between the two model genres -->
<div
	style="display: flex; justify-content: center; align-items: center; margin-top: 0.5rem; gap: 0rem; max-width: 70%; margin-left: auto; margin-right: auto;"
>
	<button
		on:click={setLearningMode}
		style="background-color: {learningMode ? '#6E4582' : 'transparent'}; color: {learningMode
			? 'white'
			: 'black'}; width: 150px; height:50px; display: flex; align-items: center; justify-content:center; font-size: 0.9rem; border: 1px solid #00000033; padding: 0.7rem; border-top-left-radius: 3rem; border-bottom-left-radius: 3rem; font-family: 'Lato'"
		>{modelsData['buttonTexts'][0]}</button
	>
	<button
		on:click={setModelingMode}
		style="background-color: {!learningMode ? '#6E4582' : 'transparent'}; color: {!learningMode
			? 'white'
			: 'black'}; width: 150px; height:50px; display: flex; align-items: center; justify-content:center; font-size: 0.9rem; border: 1px solid #00000033; padding: 0.7rem; font-family: 'Lato'; border-top-right-radius: 3rem; border-bottom-right-radius: 3rem;"
	>
		{modelsData['buttonTexts'][1]}
	</button>
</div>

<!-- Models Grid -->
<div style="display: flex; justify-content: center; align-items: center; margin-top:2rem;">
	<div class="modern-grid">
		{#each learningMode ? learningProblems : modelingProblems as problem, i}
			<div class="grid-item">
				<div class="img-container">
					<img src={learningMode ? learningImages[i] : modelingImages[i]} alt="" />
				</div>
				<div class="item-title">
					<b style="cursor: default">{problem}</b>
					<p>{learningMode ? learningDescriptions[i] : modelingDescriptions[i]}</p>
					<div style="display: flex; flex-direction: row; gap: 1rem;">
						{#if modelBrowserJson[problem]}
							<button
								on:click={() => openModal(problem, modelBrowserJson[problem])}
								class="view-button">View Models</button
							>
						{:else}
							<button on:click={() => openModal(problem, [])} class="view-button">Not Found</button>
						{/if}
						{#if tags.includes(problem)}
							<button class="view-button">
								<a href="/tutorials/{problem}"> View Tutorials </a>
							</button>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Models List Modal -->
<Modal {showModal} content={modalContent} {models} on:closeModal={closeModal} />

<!-- Note from author: it was not possible to call this file Models.svelte for unexpected reasons (Svelte bug?) -->

<style lang="scss">
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
	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 3), 1fr));
		@media only screen and (max-width: 767px) {
			grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 2), 1fr));
		}
		@media only screen and (max-width: 600px) {
			grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 1), 1fr));
		}
		gap: 20px;
		max-width: 1200px;
		padding: 20px;
		margin-bottom: 3rem;

		.grid-item {
			position: relative;
			overflow: hidden;
			border-radius: 15px;
			transition: transform 0.3s ease;
			height: 400px;

			border: 1px solid #e1e1e1;

			&:hover {
				img {
					transform: scale(1.08) !important;
				}
			}

			.img-container {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					transition: transform 0.8s;
					height: 100%;
					max-width: 100%;
					object-fit: cover;
					transform: scale(1.04);
				}
			}

			.item-title {
				position: absolute;
				font-family: 'Open Sans';
				bottom: 0;
				left: 0;
				width: 100%;
				background: #eaeaea;
				color: #1d1d1d;
				padding: 20px 0px;
				font-size: 1.3rem;
				min-height: 70px;
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				p {
					max-width: 90%;
				}

				.view-button {
					border-radius: 1rem;
					font-weight: 400;
					font-family: 'Poppins';
					padding: 10px 15px;
					margin-top: 1rem;
					font-size: 0.8rem;
					outline: none;
					border: 2px solid #acacac;
					&:hover {
						background: #5d3561;
						border: 2px solid #5d3561;
						color: white;
					}
				}

				p {
					font-size: 0.8rem;
					opacity: 0.9;
					font-weight: normal !important;
					text-align: center;
					margin-top: 4px;
				}
				span {
					margin-top: 0.5rem;
					font-size: 0.9rem;
					display: none;
				}
			}

			@keyframes fade_in_show {
				0% {
					opacity: 0;
					transform: scale(0);
				}

				100% {
					opacity: 0.7;
					transform: scale(1);
				}
			}
		}
	}
</style>
