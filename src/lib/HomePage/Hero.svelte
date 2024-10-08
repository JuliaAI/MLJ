<!-- JS Goes here -->
<script lang="ts">
	import YAML from 'yaml';
	import FaDownload from 'svelte-icons/fa/FaDownload.svelte';
	import FaFile from 'svelte-icons/fa/FaFile.svelte';
	import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
	import FaBolt from 'svelte-icons/fa/FaBolt.svelte';
	import CardSlider from './CardSlider.svelte';
	import Features from './Features.svelte';
	import FaStar from 'svelte-icons/fa/FaStar.svelte';

	// Components
	import MarkdownIt from 'markdown-it';
	// Helpers
	import { fromHighlighter } from '@shikijs/markdown-it/core';
	import { getHighlighterCore } from 'shiki/core';
	import { onMount } from 'svelte';
	import homeDataYaml from '../../data/HomePage.yaml?raw';
	import { goto } from '$app/navigation';

	let homeData = YAML.parse(homeDataYaml);
	let codeHTMLs: string[] = [];
	let highlighter;
	let md;
	let isLoading = true;

	function wrapInJuliaCodeBlock(str: string) {
		return `\`\`\`julia\n${str}\n\`\`\``;
	}

	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import('shiki/themes/catppuccin-latte.mjs')],
			langs: [import('shiki/langs/julia.mjs')],
			loadWasm: import('shiki/wasm')
		});
		md = new MarkdownIt();
		md.use(fromHighlighter(highlighter, { themes: { light: 'catppuccin-latte' } }));
		for (let tour of homeData['tours']) {
			codeHTMLs.push(md.render(wrapInJuliaCodeBlock(tour['code'])));
		}
		isLoading = false;
	});

	let hoveredIndex = 0;
</script>

<!-- HTML Goes Here -->
<div
	style="background: linear-gradient(to bottom, rgb(100, 50, 100), rgb(130, 80, 130)); height: 100%;"
>
	<div class="hero-wrapper">
		<img src="./mlj-logo.png" style="max-width: 400px;" alt="logo" />
		<div class="mlj-text">
			<h2>{homeData['packageName']}</h2>
			<p style="color: #ddd; margin-top: 1rem; margin-bottom: 1rem; text-align: left; width: 90%;">
				{homeData['packageDescription']}
			</p>
			<div class="button-container">
				<button on:click={() => goto('/#get-started')}>
					Install
					<div class="icon-1">
						<FaDownload />
					</div>
				</button>
				<button on:click={() => window.open('https://juliaai.github.io/MLJ.jl/stable/')}>
					Docs
					<div class="icon-2">
						<FaFile />
					</div>
				</button>
				<button on:click={() => window.open(homeData['extraButton']['link'])}>
					{homeData['extraButton']['name']}
					<div class="icon-3">
						<FaStar />
					</div>
				</button>
			</div>
		</div>
	</div>

	<div
		style="background: rgb(110, 60, 110); border-top-left-radius: 4rem; border-top-right-radius: 4rem;"
	>
		<div class="white-bg-wrapper">
			<div class="started-section" id="get-started">
				<div
					style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 0rem;"
				>
					<h1 style="text-align: left; margin-bottom: 1rem;">{homeData['sections'][0]['name']}</h1>
					<p>{homeData['sections'][0]['subtitle']}</p>
				</div>
				<div>
					{#if isLoading}
						<div>Loading...</div>
					{:else}
						<div class="code-container">
							<div>
								<ol class="tour-list">
									{#each homeData['tours'] as tour, ind}
										<li
											on:mouseenter={() => (hoveredIndex = ind)}
											class:hovered={ind === hoveredIndex}
										>
											{tour['name']}
										</li>
									{/each}
								</ol>
								<!-- loop on homeData['tours'] -->
							</div>
							<div>
								{#each homeData['tours'] as tour, ind}
									{#if ind == 0}
										{@html codeHTMLs[hoveredIndex]}
									{/if}
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="white-bg-wrapper" style="background: rgb(110, 60, 110); border-radius: 0rem;">
	<div class="started-section" id="get-started">
		<div
			style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 1rem;"
		>
			<h1 style="text-align: left; margin-bottom: 0rem;">{homeData['sections'][1]['name']}</h1>
			<p>{homeData['sections'][1]['subtitle']}</p>
		</div>
		<Features />
	</div>
</div>
<div class="white-bg-wrapper" style=" border-radius: 0rem;">
	<div class="started-section" id="get-started">
		<div
			style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 1rem;"
		>
			<h1 style="text-align: left; margin-bottom: 1rem;">{homeData['sections'][2]['name']}</h1>
			<p>{homeData['sections'][0]['subtitle']}</p>
		</div>
		<CardSlider images={homeData['users']} />
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

	.tour-list {
		list-style: none;
		padding-left: 0;
		margin-left: -7rem;
		li {
			padding: 1rem 0rem;
			margin-left: 1rem;
			font-size: 1.3rem;
			font-family: 'Montserrat', sans-serif; /* Added a fallback font */
			font-weight: 500;
			position: relative;
			padding-left: 50px;
			color: white;
			background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LACMTA_Circle_Purple_Line.svg/512px-LACMTA_Circle_Purple_Line.svg.png');
			background-repeat: no-repeat;
			background-position: 5px 18px; /* Adjusts the position of the bullet */
			background-size: 30px 30px;
			cursor: pointer;
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
			font-family: 'Montserrat';
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
	.icon-3 {
		width: 1.4rem;
		display: inline-block;
		margin-left: 0.4rem;
	}
	.white-bg-wrapper {
		background: rgba(100, 50, 100, 1); //rgba(150, 100, 150, 0.4);
		border-top-left-radius: 4rem;
		border-top-right-radius: 4rem;
		padding-bottom: 4rem;
		.started-section {
			padding-top: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h1,
			p {
				color: #eee;
				margin-left: -3rem;
				border-radius: 2rem;
				font-family: 'Montserrat';
			}
			h1 {
				font-size: 2.4rem;
				font-weight: 600;
				@media only screen and (max-width: 900px) {
					font-size: 1.8rem;
					text-align: center;
				}
				@media only screen and (max-width: 600px) {
					font-size: 1.6rem;
					margin: auto;
				}
			}
			p {
				padding-left: 0.3rem;
				color: #c4c4c4;
				@media only screen and (max-width: 900px) {
					font-size: 0.9rem;
					text-align: center;
					margin: auto;
				}
				@media only screen and (max-width: 600px) {
					font-size: 0.8rem;
					text-align: center;
					margin: auto;
				}
			}
			.code-container {
				display: flex;
				flex-direction: row;
				gap: 13rem;

				justify-content: center;
				height: 400px;
				// change to column when screen is small
				@media only screen and (max-width: 900px) {
					flex-direction: column;
					gap: 1rem;
					height: auto;
				}

				.tour-list {
					margin: auto;
					padding-right: 2rem;
				}

				:global(pre) {
					word-wrap: break-word;
					margin-top: 3rem !important;
					margin-bottom: 2rem;
					padding: 2rem 5rem 2rem 0rem;
					border-radius: 1rem;
					width: 600px;
					display: flex;
					align-items: center;
					justify-content: center;
					@media only screen and (max-width: 1000px) {
						width: '' !important;
						font-size: 0.8rem;
					}
					@media only screen and (max-width: 600px) {
						width: '' !important;
						font-size: 0.7rem;
					}

					opacity: 0.95;
				}
				div {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					align-items: center;
					justify-content: center;
					p {
						color: #eee;
						font-size: 1.3rem;
						font-family: 'Lato';
					}
				}
			}
		}
	}

	.hovered {
		font-weight: bold !important;
		color: white !important;
	}
</style>
