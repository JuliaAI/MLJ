<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import cheatSheet from '$lib/data/mlj_cheatsheet.md?raw';
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';

	let md;
	let highlighter;
	let cheatsheetHTML: string | undefined;
	let isLoading = true;

	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import('shiki/themes/min-light.mjs')],
			langs: [import('shiki/langs/julia.mjs')],
			loadWasm: import('shiki/wasm')
		});
		md = new MarkdownIt();
		md.use(fromHighlighter(highlighter, { themes: { light: 'min-light' } }));
		cheatsheetHTML = md.render(cheatSheet)
		let pattern = /<h2>(.*?)<\/h2>([\s\S]*?)(?=<h2>|$)/g;
		cheatsheetHTML = cheatsheetHTML.replace(pattern, '<div>$&</div>');
		isLoading = false; // Set loading state to false once content is loaded
	});

	function downloadAsPDF() {
		window.print();
	}
</script>

<!-- <button on:click={downloadAsPDF}>Download as PDF</button> -->

{#if isLoading}
	<div>Loading...</div>
{:else}
	<div class="intents-container" id="print-this">
		{@html cheatsheetHTML}
	</div>
{/if}

<style lang="scss">
	.intents-container {
		column-count: 3;
        @media print {
            column-count: 4;
        }
		/* height: auto; */
		@media only screen and (max-width: 1200px) {
			column-count: 2;
		}
		@media only screen and (max-width: 600px) {
			gap: 0.3rem;
			column-count: 1;
			padding: 2rem 0.5rem 2rem;
		}
		gap: 0rem;
		padding: 3rem 3rem 1rem;

		:global(div) {
			border: 1px solid #6e4582;
			break-inside: avoid-column;
			@media print {
                break-inside: auto;
                overflow: auto;
                display: inline-block;

                
			}
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

		:global(h1) {
			font-family: 'Poppins';
			text-align: center;
			border: 1px solid #8b7099;
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
		:global(pre) {
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
        size: A3 landscape;
		margin: 0mm;
	}
</style>
