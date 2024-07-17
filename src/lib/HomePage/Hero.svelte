<!-- JS Goes here -->
<script lang="ts">
	import YAML from 'yaml';
	import FaDownload from 'svelte-icons/fa/FaDownload.svelte';
	import FaFile from 'svelte-icons/fa/FaFile.svelte';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	import FaBolt from 'svelte-icons/fa/FaBolt.svelte';
	// Components
	import MarkdownIt from 'markdown-it';
	// Helpers
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';
	import homeDataYaml from '../../data/HomePage.yaml?raw';
	import { goto } from '$app/navigation';

	let homeData = YAML.parse(homeDataYaml);
	let installHTML: string | undefined;
	let getStartedHTML: string | undefined;
	let highlighter;
	let md;
	let isLoading = true;

	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import('shiki/themes/synthwave-84.mjs')],
			langs: [import('shiki/langs/julia.mjs')],
			loadWasm: import('shiki/wasm')
		});
		md = new MarkdownIt();
		md.use(fromHighlighter(highlighter, { themes: { light: 'synthwave-84' } }));
		installHTML = md.render(homeData['installation']);
		getStartedHTML = md.render(homeData['getStarted']);
		isLoading = false;
	});
</script>

<!-- HTML Goes Here -->
<div
	style="background: linear-gradient(to bottom, rgb(100, 50, 100), rgb(130, 80, 130)); height: 100%;"
>
	<div class="hero-wrapper">
		<img src="./mlj-logo.png" style="max-width: 400px;" alt="logo" />
		<div class="mlj-text">
			<h2>Machine Learning in Julia</h2>
			<p style="color: #ddd; margin-top: 1rem; margin-bottom: 1rem; text-align: left; width: 90%;">
				A Julia package for general, composable and elegant machine learning at scale.
			</p>
			<div class="button-container">
				<button on:click={() => goto('/#get-started')}>
					Install
					<div class="icon-1">
						<FaDownload />
					</div>
				</button>
				<button on:click={() => goto('https://juliaai.github.io/MLJ.jl/stable/')}>
					Manual
					<div class="icon-2">
						<FaFile />
					</div>
				</button>
				<button on:click={() => goto('/tutorials')}>
					Tutorials
					<div class="icon-2">
						<FaPlay />
					</div>
				</button>
			</div>
		</div>
	</div>

	<div class="white-bg-wrapper">
		<div class="started-section" id="get-started">
			<div>
				{#if isLoading}
					<div>Loading...</div>
				{:else}
					<div class="code-container">
						<div>
							<h1>INSTALLATION</h1>
							{@html installHTML}
						</div>
						<div>
							<h1>GET STARTED</h1>
							{@html getStartedHTML}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-wrapper {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		padding: 2rem;
		// when screen is small switch to column
		@media only screen and (max-width: 900px) {
			flex-direction: column;
			justify-content: center !important;
			align-items: center !important;
			gap: 1rem;
			img {
				max-width: 56% !important;
			}
		}
	}

	.mlj-text {
		max-width: 600px;
		height: 100%;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 900px) {
			justify-content: center;
			align-items: center;
		}
		h2 {
			display: flex;
			align-items: center;
			color: white;
			font-size: 1.8rem;
			font-family: 'Lato';
			font-size: 2.8rem;
			font-weight: 700;
			text-align: center;
			@media only screen and (max-width: 600px) {
				font-size: 2rem;
			}
		}
		p {
			@media only screen and (max-width: 600px) {
				text-align: center !important;
			}
		}
		.button-container {
			@media only screen and (max-width: 600px) {
				flex-direction: column;
			}
		}
	}

	.button-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1.4rem;
		margin-top: 1.5rem;
		button {
			font-family: 'Lato';
			color: white;
			border: 1px solid white;
			padding: 0.5rem 1.5rem;
			border-radius: 0.3rem;
			font-size: 1.3rem;
		}
		// add hover effect
		button:hover {
			background: white;
			color: rgb(100, 50, 100);
		}
	}

	.icon-1 {
		width: 1rem;
		display: inline-block;
		margin-left: 0.4rem;
	}
	.icon-2 {
		width: 0.9rem;
		display: inline-block;
		margin-left: 0.4rem;
	}
	.white-bg-wrapper {
		background: #eee; //rgba(150, 100, 150, 0.4);
		border-top-left-radius: 4rem;
		border-top-right-radius: 4rem;
		margin-bottom: 4rem;
		.started-section {
			padding-top: 3rem;
			h1 {
				color: rgba(100, 50, 100, 1);
				padding: 0.5rem 1rem;
				border-radius: 2rem;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				align-self: flex-start;
				font-size: 2rem;
				font-family: 'Montserrat';
				// text-shadow: 2px 2px 4px rgba(178, 178, 178, 0.762);
				font-weight: 600;
			}
			.code-container {
				margin-top: 2rem;
				display: flex;
				flex-direction: row;
				gap: 3rem;
				justify-content: center;
				// change to column when screen is small
				@media only screen and (max-width: 900px) {
					flex-direction: column;
				}
				:global(pre) {
					padding: 1rem 2rem;
					border-radius: 1rem;
					height: 100%;

					display: flex;
					align-items: center;
					justify-content: center;
					@media only screen and (max-width: 900px) {
						width: 90%;
						font-size: 0.8rem;
					}
				}
				div {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					align-items: center;
					justify-content: center;
					p {
						color: rgb(100, 50, 100);
						font-size: 1.3rem;
						font-family: 'Lato';
					}
				}
			}
		}
	}
</style>
