<script>
// import MarkdownIt from 'markdown-it';
console.log("hello")
</script>
Hi

<!-- <script lang="ts">
	import MarkdownIt from 'markdown-it';
	import modelBrowser from '$lib/data/model_browser.md?raw';
	import { markdownToJSON, flattenJSON } from './utilts'; // Make sure customSort function is exported from "utils.ts"
	import Modal from './Modal.svelte';
	import Search from './Search.svelte';
	import { onMount } from 'svelte';

	const md = new MarkdownIt();
	const modelBrowserJson = markdownToJSON(modelBrowser);
	const flatModelBrowser = flattenJSON(modelBrowserJson);

	const learningProblems = [
		'Classification',
		'Regression',
		'Clustering',
		'Dimension Reduction',
		'Outlier Detection',
		'Class Imbalance',
		'Missing Value Imputation',
		'Text Analysis',
		'Image Processing'
	];
	const learningDescriptions = [
		'Predicting which category an observation belongs to',
		'Predicting continuous outcomes',
		'Grouping similar data points together.',
		'Reducing dimensionality while preserving information',
		'Identifying anomalies or outliers in the data',
		'Handling imbalance in dataset labels with resampling',
		'Filling in missing data points in a dataset',
		'Extracting insights or patterns from textual data',
		'Analyzing and manipulating visual data'
	];
	const learningImages = [
		'https://i.imgur.com/pS2oOkb.png',
		'/reg.gif',
		'/cluster.gif',
		'https://i.imgur.com/3azIgiG.png',
		'https://i.imgur.com/57vvJBK.png',
		'/imbalance.gif',
		'https://i.imgur.com/n6CVxmj.png',
		'https://i.imgur.com/x5IrImv.png',
		'https://i.imgur.com/iDgQ4QP.png'
	];

	const modelGenres = Object.keys(modelBrowserJson).filter(
		(key) => !learningProblems.includes(key)
	);

	const modelingProblems = [
		'Iterative Models',
		'Ensemble Models',
		'Bayesian Models',
		'Encoders',
		'Distribution Fitter',
		'Neural Networks',
		'Static Models'
	];

	const modelingDescriptions = [
		'Models that are trained iteratively to improve performance',
		'Models that combine the predictions of multiple models',
		'Models that are based on Bayesian statistics',
		'Models that encode input data into a new form',
		'Models that fit a probability distribution to the data',
		'Models that use neural networks to learn complex patterns in the data',
		'Models that do not generalize to new observations'
	];

	const modelingImages = [
		'https://i.imgur.com/V6HWp7j.png',
		'https://i.imgur.com/u13WwDA.png',
		'https://i.imgur.com/4Py5yfh.png',
		'https://i.imgur.com/BrNfbhK.png',
		'https://i.imgur.com/SFD1ftY.png',
		'https://i.imgur.com/9KPyDWa.png',
		'/cluster.gif',
	];

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

	let learningMode: boolean = true;

	// Function to set learning mode
	const setLearningMode = (): void => {
		learningMode = true;
		// After setting the mode, save it to local storage
		localStorage.setItem('learningMode', 'true');
	};

	// Function to set modeling mode
	const setModelingMode = (): void => {
		learningMode = false;
		// After setting the mode, save it to local storage
		localStorage.setItem('learningMode', 'false');
	};

	// Function to load state from local storage
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

	})
</script>

<div
	class="headline"
	style="display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius:3rem; margin-top: 1.5rem; padding: 1rem; width:100%; "
>
	<h1
		style="margin: 1rem; font-family: 'Lato'; font-weight: 700; font-style: italic;  font-size: 2.4rem; text-align:center; width:70%"
	>
		Over <span style="color:darkmagenta;">180 Machine Learning Models</span>...At Your
		<span style="color:darkmagenta;">Fingertips</span>
	</h1>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
	<Search items={flatModelBrowser} />
</div>
<div
	style="display: flex; justify-content: center; align-items: center; margin-top: 2rem; gap: 0rem; max-width: 70%; margin-left: auto; margin-right: auto;"
>
	<button
		on:click={setLearningMode}
		style="background-color: {learningMode ? '#6E4582' : 'transparent'}; color: {learningMode
			? 'white'
			: 'black'}; border: 1px solid #00000033; padding: 0.7rem; border-top-left-radius: 3rem; border-bottom-left-radius: 3rem; font-family: 'Lato'"
		>View Models by Learning Objective</button
	>
	<button
		on:click={setModelingMode}
		style="background-color: {!learningMode ? '#6E4582' : 'transparent'}; color: {!learningMode
			? 'white'
			: 'black'}; border: 1px solid #00000033; padding: 0.7rem; font-family: 'Lato'; border-top-right-radius: 3rem; border-bottom-right-radius: 3rem;"
	>
		View Models by Modeling Approach
	</button>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:2rem;">
	<div class="modern-grid">
		{#each learningMode ? learningProblems : modelingProblems as problem, i}
			<div class="grid-item">
				<div class="img-container">
					<img src={learningMode ? learningImages[i] : modelingImages[i]} alt="" />
				</div>
				<div class="item-title">
					<b>{problem}</b>
					<p>{learningMode ? learningDescriptions[i] : modelingDescriptions[i]}</p>
					<button on:click={() => openModal(problem, modelBrowserJson[problem])} class="view-button"
						>View Models</button
					>
					<button class="view-button">View Tutorials</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<Modal {showModal} content={modalContent} {models} on:closeModal={closeModal} />

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

		.grid-item {
			position: relative;
			overflow: hidden;
			border-radius: 15px;
			transition: transform 0.3s ease;
			height: 400px;

			border: 1px solid #e1e1e1;

			&:hover {
				// border: 1px solid #5D3561 ;
				// outline-color: #5D3561 ;
				// outline-width: 2px;
				// outline-style: solid;
				// .item-title {
				// 	background: #5D3561 !important;
				// 	color: #fff;
				// }
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
				font-size: 20px;
				min-height: 70px;
				text-align: center;

				.view-button {
					border-radius: 1rem;
					font-weight: 400;
					font-family: 'Poppins';
					padding: 10px 15px;
					margin-top: 1rem;
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
					// display: none;
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
</style> -->
