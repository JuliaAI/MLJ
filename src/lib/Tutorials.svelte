<script lang="ts">
	import headString from '$lib/data/head.js?raw';
	import { flattenJSON } from './utilts';
	import Search from './Search.svelte';

	const pattern = /const navItems = (\[.*?\]);/s;
	const match = headString.match(pattern);
	const navItemsJson = match ? match[1] : '';
	const navItems = eval(navItemsJson);

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
			<Search tutorialsMode={true} items={flatTutorialsByTag} placeholder="Search over all tutorials" />
		</div>
		<div class="tag-containers-wrapper">
		{#each tags as tag}
			<div class="tag-container">
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
	.tag-containers-wrapper {
		column-count: 3;
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
				color: rgb(0, 0, 0);
				border-radius: 0.5rem;
				display: flex;
				font-size: 1rem;
				font-family: Poppins;
				text-align: center;
				font-weight: 500;
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
