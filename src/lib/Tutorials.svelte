<script lang="ts">
	import headString from '$lib/data/head.js?raw';
	import { flattenJSON } from './utilts';
	import Search from './Search.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Carousel from 'svelte-carousel'

	const pattern = /const navItems = (\[.*?\]);/s;
	const match = headString.match(pattern);
	const navItemsJson = match ? match[1] : '';
	const navItems = eval(navItemsJson);

	function applyStyleBasedOnHash(tag=null): void {
		// Get the current URL hash
		const hash: string = window.location.hash;

		// Check if there is a hash in the URL
		if (true) {
			// Get the part after the last / in the url
			const id = (tag) ? tag : window.location.pathname.split('/').pop() || '';

			// replace all %20 with spaces
			const idWithSpaces = id.replace(/%20/g, ' ');
			// Get the element by the id
			const element: HTMLElement | null = document.getElementById(idWithSpaces);
			const elementButton:  HTMLElement | null = document.getElementById(idWithSpaces+"-button");
			// If the element exists, apply the shadow style
			if (element && elementButton) {
				// Create an overlay element
				const overlay: HTMLDivElement = document.createElement('div');
				overlay.style.position = 'fixed';
				overlay.style.top = '0';
				overlay.style.left = '0';
				overlay.style.width = '100%';
				overlay.style.height = '100%';
				overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
				overlay.style.zIndex = '999';

				// Append the overlay to the body
				document.body.appendChild(overlay);

				// Bring the target element to the front
				element.style.position = 'relative';
				element.style.zIndex = '1000';
				element.style.backgroundColor = 'white'; // Optional: set background to avoid transparency issues
				element.style.borderRadius = '20px';

				// scale the element as well
				element.style.transform = 'scale(1.05)';
				element.style.transition = 'transform 0.3s ease-in-out';

				// put a shadow for 3d
				element.style.boxShadow = '2px 2px 4px 3px rgba(0, 0, 0, 0.3)';

				elementButton.style.color = "white";
				elementButton.style.backgroundColor = "#6e4582";

				// Add a click event listener to the overlay to remove the styles when clicked
				overlay.addEventListener('click', () => {
					elementButton.style.color = "";
					elementButton.style.backgroundColor = "";
					element.style.position = '';
					element.style.zIndex = '';
					element.style.backgroundColor = '';
					element.style.borderRadius = '';
					element.style.transform = '';
					element.style.transition = '';
					element.style.boxShadow = '';
					// Remove the overlay
					document.body.removeChild(overlay);
				});
				// // Calculate the offset position to scroll just before the element
				const offset = 100; // Adjust this value as needed
				const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - offset;

				// Smooth scroll to the calculated position
				setTimeout(()=> {
				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});}
			)
			}
		}
	}

	onMount((): void => {
		applyStyleBasedOnHash();
	});
	// when href changes

	type Tutorial = {
		name: string;
		href: string;
	};

	type Section = {
		name: string;
		href: string;
		tags?: string[];
	};

	type NavigationItem = {
		name: string;
		href: string;
		sections: Section[];
		sectionItemWidth?: string;
		id: string;
	};

	function getTutorialsByTag(navItems: NavigationItem[]): Record<string, Tutorial[]> {
		const tutorialsByTag: Record<string, Tutorial[]> = {};

		navItems.forEach((navigationItem) => {
			navigationItem.sections.forEach((section) => {
				if (section.tags) {
					section.tags.forEach((tag) => {
						if (!tutorialsByTag[tag]) {
							tutorialsByTag[tag] = [];
						}
						tutorialsByTag[tag].push({ name: section.name, href: section.href });
					});
				}
			});
		});

		return tutorialsByTag;
	}

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
	function removeDuplicatesByKey(arr, key) {
		const seen = new Set();
		return arr.filter((obj) => {
			const value = obj[key];
			if (seen.has(value)) {
				return false;
			}
			seen.add(value);
			return true;
		});
	}
	let flatTutorialsByTag = removeDuplicatesByKey(flattenJSON(tutorialsByTag), 'href');
	function renameAttributes(list: any, mapping: any) {
		return list.map((obj: any) => {
			const newObj = {};
			Object.keys(obj).forEach((key) => {
				if (mapping[key]) {
					newObj[mapping[key]] = obj[key];
				} else {
					newObj[key] = obj[key];
				}
			});
			return newObj;
		});
	}
	const attributeMapping = {
		name: 'modelName',
		href: 'link'
	};
	flatTutorialsByTag = renameAttributes(flatTutorialsByTag, attributeMapping);
	
</script>

<div class="container">
	<div
		class="headline"
		style="display: flex; cursor: pointer; flex-direction: column; justify-content: center; align-items: center; border-radius:3rem; margin-top: 1.5rem; padding: 1rem; width:100%; "
	>
		<h1
			style="margin: 1rem; font-family: 'Lato'; font-weight: 700; font-style: italic;  font-size: 2.4rem; text-align:center; width:80%"
		>
			Looking for a <span style="color:darkmagenta;">Ph.D. in ML?</span> We've Got All
			<span style="color:darkmagenta;"> Needed Tutorials</span>
		</h1>
	</div>

	<div style="padding-top: 1rem; display:flex; justify-content: center; align-items: center;">
		<Search
			tutorialsMode={true}
			items={flatTutorialsByTag}
			placeholder="Search over all tutorials"
		/>
	</div>
	<div
		class="headtext"
	>
		<p>
			Looking for an intuitive sequential progression of tutorials? See <a
				style="color: darkmagenta; "
				href="https://juliaai.github.io/DataScienceTutorials.jl/">DataScienceTutorials.jl</a
			>
		</p>
	</div>
	<div class="tag-buttons-container">
		<Carousel
		particlesToShow={6}
  		particlesToScroll={3}
		infinite={true}
		initialPageIndex={0}
		>
		{#each tags.reverse() as tag}
			<button
			id="{tag}-button"
			on:click={()=>{
				goto(`/tutorials/${tag.replace('%20', ' ')}`)
				applyStyleBasedOnHash(tag);
				}}
			>{tag}</button>
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
		align-items:center; 
		margin-top:1rem; 
		font-family: 'Poppins';
		@media screen and (max-width: 900px) {
			text-align: center;
			font-size: 0.9rem;
		}
	}
	:global(.sc-carousel-dots__container) {
		display: none !important;
	}
	.tag-buttons-container, :global(.sc-carousel__pages-container) {
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
