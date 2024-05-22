<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import cheatSheet from '$lib/data/mlj_cheatsheet.md?raw';
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';

	let md;
	let highlighter;
	let isLoading = true;
	let cheatsheetHTML: string | undefined;
	let cheatsheetHTMLArr: string[];
	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import('shiki/themes/min-light.mjs')],
			langs: [import('shiki/langs/julia.mjs')],
			loadWasm: import('shiki/wasm')
		});
		md = new MarkdownIt();
		md.use(fromHighlighter(highlighter, { themes: { light: 'min-light' } }));
		cheatsheetHTML = md.render(cheatSheet.replace('@repl', 'julia'));
		let pattern = /<h2>(.*?)<\/h2>([\s\S]*?)(?=<h2>|$)/g;
		cheatsheetHTML = cheatsheetHTML.replace(pattern, '<div>$&</div>');
		cheatsheetHTML = cheatsheetHTML.replace(/<pre/g, '<p class="pre"').replace(/<\/pre>/g, '</p>');
		cheatsheetHTMLArr = cheatsheetHTML
			.split('<div>')
			.filter((section) => section.trim() !== '')
			.map((section) => `<div>${section}</div>`);
		isLoading = false;
	});

	function downloadAsPDF() {
		window.print();
	}
	let fractions = [[0, 1.3/6], [1.3/6, 3.8/6], [3.8/6, 6/6],]

</script>

{#if isLoading}
	<div>Loading...</div>
{:else}
<div style="display: flex; flex-direction: column; gap: 0rem; width: 100%">
	<button style=" font-family:Poppins; font-size: 1rem; background-color: #6e4582; width:300px; margin: auto; margin-top: 1rem; color: white; border-radius: 3rem; padding: 0.5rem;" on:click={downloadAsPDF} >Download the Cheat Sheet</button>
	<div class="intents-container row" id="print-this">
		{#each fractions as fraction, frac_ind}
			<div class="column">
				{#each cheatsheetHTMLArr.filter((_, index) =>  index < fraction[1] * cheatsheetHTMLArr.length && index >= fraction[0] * cheatsheetHTMLArr.length)  as section}
					{@html section}
				{/each}
			</div>
		{/each}
	</div>
</div>
{/if}

<style lang="scss">
	.row {
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		@media only screen and (max-width: 600px) {
			padding: 1rem !important;
		}
	}

	.column {
		flex: 33%;
		max-width: 33%;
		padding: 0 !important;
		@media only screen and (max-width: 1200px) {
			flex: 50% !important;
			max-width: 50% !important;
		}
		@media only screen and (max-width: 600px) {
			flex: 100% !important;
			max-width: 100% !important;
		}
	}
	.intents-container {
		gap: 0rem;
		padding: 1rem 3rem 1rem;

		:global(div) {
			border: 0.5px solid #6e4582;
			break-inside: avoid-column;
			padding: 1rem;
			padding-bottom: 2rem;
			background-color: #f1f1f1;
		}
		:global(p) {
			margin: 1rem 0rem;
		}

		:global(h2) {
			font-family: 'Poppins';
			text-align: center;
			font-size: 1.4rem;
			margin-bottom: 1.5rem;
			background-color: #6e4582;
			color: white;
			padding: 0.8rem;
			border-radius: 10px;
			:global(code) {
				background-color: transparent !important;
				font-size: 1.1rem;
			}
		}
		:global(li) {
			margin-left: 2rem;
		}

		:global(h1) {
			font-family: 'Poppins';
			text-align: center;
			//border: 1px solid #8b7099;
			padding: 0.9rem;
			color: #462c53;
			background-color: #f1f1f1;
			:global(code) {
				background-color: transparent !important;
				font-size: 1.1rem;
			}
		}
		:global(h3) {
			display: inline-block;
			background-color: #6e4582;
			color: #f1f1f1;
			border-radius: 10px;
			padding: 0.4rem 0.8rem;
			:global(code) {
				background-color: transparent !important;
				font-size: 1.1rem;
			}
		}
		:global(h4) {
			display: inline-block;
			color: #462c53;
			border-radius: 10px;
		}

		:global(code) {
			display: inline-block;
			background-color: #ffffff;
			padding: 0.3rem;
			border-radius: 10px;
			margin: 0.3rem;
			font-size: 0.75rem;
		}
		:global(pre),
		:global(.pre) {
			display: inline-block;
			padding: 0.5rem;
			border-radius: 10px;
			width: 100%;
			:global(code) {
				background-color: transparent !important;
				padding: 0rem !important;
				margin: 0rem !important;
			}
		}

		:global(table) {
			width: 100%;
			border-collapse: collapse;

			:global(th),
			:global(td) {
				padding: 8px;
				text-align: left;
				border-bottom: 1px solid #ddd;
				text-align: center;
			}

			:global(th) {
				background-color: #f2f2f2;
				text-align: center;
			}

			:global(tr:hover) {
				background-color: #f5f5f5;
			}
		}
	}

	@media print {
		:global(body) :global(*) {
			visibility: hidden;
		}
		#print-this,
		#print-this :global(*) {
			visibility: visible;
		}
		#print-this {
			position: absolute;
			left: 0;
			top: 0;
			// width: 320mm;
			overflow: visible;
		}
	}

	@page {
		size: A3 portrait;
		margin: 0mm;
		padding: 0mm;
	}
</style>
