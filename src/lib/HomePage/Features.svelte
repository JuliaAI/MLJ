<script lang="ts">
	import YAML from 'yaml';
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';
	import MarkdownIt from 'markdown-it';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	import SvelteMarkdown from 'svelte-markdown';

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

<div class="tabs">
	<ul>
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
				<div style="display: flex; justify-content: space-around; gap: 0rem;">
					<div style="color: white">
						<SvelteMarkdown source={tab.content} />
					</div>
					{#if tab.code && !isLoading}
						<div class="code-container">
							{@html codeHTMLs[index]}
						</div>
					{/if}
				</div>
			</section>
		{/each}
	</div>
</div>

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
		cursor: pointer;
		color: white;
		margin: auto;
		border-radius: 1rem;
		font-family: 'Montserrat';
		padding: 0.8rem 0rem;
	}

	.content section {
		margin-top: 3rem !important;
		display: none;
		padding: 10px 0 10px 0;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 2rem;
		width: 100%;
		font-family: 'Montserrat';
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
		// change to column when screen is small
		@media only screen and (max-width: 900px) {
			flex-direction: column;
		}
		height: 400px;
		:global(pre) {
			margin-top: 2rem !important;

			margin-bottom: 2rem;
			padding: 2rem 2rem 2rem 2rem;
			border-radius: 1rem;
			width: 100%;
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
</style>
