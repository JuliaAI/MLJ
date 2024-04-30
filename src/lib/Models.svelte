<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import modelBrowser from '$lib/data/model_browser.md?raw';
	import { markdownToJSON, flattenJSON } from './utilts'; // Make sure customSort function is exported from "utils.ts"
	import Modal from './Modal.svelte';
	import Search from './Search.svelte';

	const md = new MarkdownIt();
	const modelBrowserJson = markdownToJSON(modelBrowser);
	const flatModelBrowser = flattenJSON(modelBrowserJson);
	console.log(flatModelBrowser)

	const problems = [
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
	const descriptions = [
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
	const images = [
		'https://i.imgur.com/pS2oOkb.png',
		'https://i.imgur.com/QNYMwLd.png',
		'https://i.imgur.com/9XDZko6.png',
		'https://i.imgur.com/4Hkvs72.png',
		'https://i.imgur.com/MZCYV8y.png',
		'https://i.imgur.com/n5ftY1Y.png',
		'https://i.imgur.com/S56AK2C.png',
		'https://i.imgur.com/M3cTtCF.png',
		'https://i.imgur.com/nAGEXBS.png'
	];

	const modelGenres = Object.keys(modelBrowserJson).filter((key) => !problems.includes(key));
	console.log(modelGenres);

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
</script>

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius:3rem; margin-top: 1.5rem; padding: 1rem; width:100%; ">	
	<h1 style="margin: 1rem; font-family: 'Lato'; font-weight: 700; font-style: italic;  font-size: 2.4rem; text-align:center; width:70%">Over <span style="color:darkmagenta;">180 Machine Learning Models</span>...At Your <span style="color:darkmagenta;">Fingertips</span></h1>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
<Search items={flatModelBrowser}/>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:3rem;">
	<div class="modern-grid">
		{#each problems as problem, i}
			<div class="grid-item">
				<div class="img-container">
					<img src={images[i]} alt="" />
				</div>
				<div class="item-title">
					<b>{problem}</b>
					<p>{descriptions[i]}</p>
					<button on:click={() => openModal(problem, modelBrowserJson[problem])} class="view-button"
						>View Models</button
					>
					<button class="view-button">View Tutorials</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<Modal {showModal} content={modalContent} models={models} on:closeModal={closeModal} />

<style lang="scss">
	.modern-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 3), 1fr));
		@media only screen and (max-width: 767px) {
			grid-template-columns: repeat(auto-fit, minmax(calc((100% - 40px) / 2), 1fr));
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
					transform: scale(1.05);
				}
			}

			.img-container {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
				transition: transform .8s;
				height: 100%;
				max-width: 100%;
				object-fit: cover;
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
</style>
