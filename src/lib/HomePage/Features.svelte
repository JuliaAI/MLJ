<script lang="ts">
	import YAML from 'yaml';
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';
	import MarkdownIt from 'markdown-it';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	import IoIosAt from 'svelte-icons/io/IoIosAt.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import IoIosCopy from 'svelte-icons/io/IoIosCopy.svelte';
	import { RingLoader } from 'svelte-loading-spinners';

	// Reactive state to track the selected tab index
	let selectedTabIndex = 0;
	import homeDataYaml from '../../data/HomePage.yaml?raw';

	// Define tab data
	let homeData = YAML.parse(homeDataYaml);

	const tabs = homeData['features'];

	function wrapInJuliaCodeBlock(str: string) {
		return `\`\`\`julia\n${str}\n\`\`\``;
	}

	let highlighter;
	let md;
	let codeHTMLs: string[] = [];
	let isLoading = true;

	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import('shiki/themes/catppuccin-latte.mjs')],
			langs: [import('shiki/langs/julia.mjs')],
			loadWasm: import('shiki/wasm')
		});
		md = new MarkdownIt();
		md.use(fromHighlighter(highlighter, { themes: { light: 'catppuccin-latte' } }));
		for (let tour of homeData['features']) {
			codeHTMLs.push(md.render(wrapInJuliaCodeBlock(tour['code'])));
		}
		isLoading = false;
	});

	console.log(codeHTMLs);
</script>

{#if isLoading}
	<div
		style="width: 100%; height: 50vh; display: flex; justify-content: center; align-items: center"
	>
		<RingLoader size="60" color="#6e4582" unit="px" duration="1s" />
	</div>
{:else}
	<div class="tabs">
		<ul style="display: flex; justify-content: center; flex-direction: row; flex-wrap: wrap;">
			{#each tabs as tab, index}
				<li
					on:click={() => (selectedTabIndex = index)}
					class:selectedTab={selectedTabIndex === index}
				>
					{tab.title}
				</li>
			{/each}
		</ul>
		<div class="content">
			{#each tabs as tab, index}
				<section class:selectedContent={selectedTabIndex === index}>
					<div
						style="padding: 0; display: flex; flex-direction: column; justify-content: space-around; gap: 0rem; align-items: center"
					>
						<h1 style="color: white; font-weight: 600;">{tab.title}</h1>
						{#if tab.code && !isLoading}
							<div class="code-container">
								<button on:click={() => navigator.clipboard.writeText(tab.code)} class="copy-icon">
									<IoIosCopy />
								</button>
								{@html codeHTMLs[index]}
							</div>
						{/if}
						<div class="markdown-container">
							<SvelteMarkdown source={tab.content} />
						</div>
					</div>
				</section>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	h1 {
		text-align: center;
		color: #428bff;
		font-weight: 300;
		padding: 40px 0 20px 0;
		margin: 0;
	}

	.tabs {
		position: relative;
		background: rgba(255, 255, 255, 0);
		padding: 50px;
		padding-bottom: 80px;
		width: 85%;
		margin: 0 auto;
		border-radius: 5px;
	}

	.markdown-container {
		color: white;
		line-height: 150%;
		:global(p) {
			text-align: justify;
		}
		:global(ul) {
			padding-left: 2rem;
		}
		:global(a) {
			background-color: #6e4582;
			padding: 0.2rem 0.3rem;
			border-radius: 0.5rem;
		}
		:global(strong) {
			:global(a) {
				display: block;
				padding: 0.4rem 0.6rem;
				background-color: #6e4582;
				border-radius: 0.7rem;
				margin-right: 0.5rem;
				margin-top: 0.5rem;
				width: max-content;
			}
		}
		:global(li) {
			margin-top: 0.4rem;
			margin-bottom: 0.4rem;
		}
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		gap: 2rem;
	}

	li {
		flex: 1;
		text-align: center;
		border: rgba(255, 255, 255, 0.591) 1px solid;
		cursor: pointer;
		color: white;
		margin: auto;
		border-radius: 1rem;
		font-family: 'Montserrat';
		padding: 0.8rem 0.3rem;
		font-size: 0.9rem;
	}

	.content section {
		margin-top: 2rem !important;
		display: none;
		border-radius: 2rem;
		width: 100%;
		font-family: 'Montserrat';
		background-color: rgb(100, 50, 100);
		padding: 3rem 4rem;
		padding-top: 0 !important;
	}

	.selectedTab {
		display: block !important;
		color: rgb(110, 60, 110);
		background-color: #eee;
		font-weight: 600;
	}

	.selectedContent {
		display: block !important;
	}

	.code-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative;
		// change to column when screen is small
		@media only screen and (max-width: 900px) {
			flex-direction: column;
		}
		// min-height: 400px;
		@media only screen and (max-width: 900px) {
			display: none;
		}
		:global(pre) {
			margin-top: 0rem !important;
			font-size: 0.95rem;
			margin-bottom: 2rem;
			padding: 2rem 2rem 2rem 2rem;
			border-radius: 1rem;
			min-width: 800px;
			display: flex;
			align-items: center;
			justify-content: center;
			@media only screen and (max-width: 900px) {
				width: 90%;
				font-size: 0.8rem;
			}

			opacity: 0.95;
		}
	}

	.copy-icon {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		color: rgb(122, 61, 126);
		cursor: pointer;
		font-size: 0.7rem;
		transition: color 0.3s;
		width: 1.3rem;
		z-index: 99;
	}

	.copy-icon:hover {
		color: rgb(122, 61, 126, 0.5);
	}
</style>
