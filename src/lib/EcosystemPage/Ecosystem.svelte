<script lang="ts">
	import Title from '$lib/Common/Title.svelte';
	import ecosystemDataYaml from '../../data/EcosystemPage.yaml?raw';
	import YAML from 'yaml';
	import SvelteMarkdown from 'svelte-markdown';
	import { goto } from '$app/navigation';
	import { Tooltip } from '@svelte-plugins/tooltips';
	import Modal from '$lib/EcosystemPage/Modal.svelte';

	let ecosystemData = YAML.parse(ecosystemDataYaml);

	function cleanString(str: string) {
		if (str.endsWith('.jl')) {
			str = str.slice(0, -3);
		}

		if (str.startsWith('MLJ')) {
			str = str.slice(3);
		}

		return str;
	}

	let showModal = false;
	let modalTitle = '';
	let modalText = '';
	let modalLink = '';
	function openModal(title: string, text: string, link: string) {
		showModal = true;
		modalTitle = title;
		modalText = text;
		modalLink = link;
	}

	function closeModal() {
		showModal = false;
		modalTitle = '';
		modalText = '';
		modalLink = '';
	}

</script>

<!-- This is still under construction. -->
<div class="background-wrapper">
	<h1
		style="color: white; font-size: 2.5rem; text-align:center; padding-top: 2rem; letter-spacing: 5px; font-family: 'Exo 2'"
	>
		Enter the MLJ Universe
	</h1>
	<div class="markdown-holder">
		<p style="text-align:'center'; color: #e1e1e1aa">
			<SvelteMarkdown source={ecosystemData['hint']} />
		</p>
	</div>
	<div class="grid-container">
		{#each ecosystemData['organizations'] as org, index}
			<button
				class="grid-item {index === 0 ? 'grid-item-large' : index === 1 ? 'grid-item-wide' : ''}"
				on:click={() => {
					openModal(org.orgName, org.orgMarkdownDesc, org.orgLink);
				}}
			>
				<div
					style="display: flex; gap: 0.5rem; align-items: center; flex-direction: row; justify-content:center;"
				>
					{#if org.orgName.startsWith('MLJ')}
						<img
							alt="logo"
							style="width: {index === 0 ? '200px' : '80px'}"
							class="mlj-logo"
							src="./mlj-logo.png"
						/>
					{/if}
					<div>
						<h3
							style="font-family: 'Lato'; font-style: italic; letter-spacing: -0.8px; font-size: 2rem;"
						>
							{cleanString(org.orgName)}
						</h3>
					</div>
				</div>
				<div>
					<a href={org.orgLink}> {org.orgName + ((org.orthogonal) ? ' ⊥' : '')} </a>
				</div>
			</button>
		{/each}
	</div>
	<div class="markdown-holder">
		<p style="text-align:'center';">
			<SvelteMarkdown source={ecosystemData['finalHint']} />
		</p>
	</div>
</div>
<Modal {showModal} name={modalTitle} text={modalText} link={modalLink} on:closeModal={closeModal} />


<style lang="scss">
	.background-wrapper {
		background: rgb(100, 50, 100); /* Fallback background color */
		background: linear-gradient(to bottom, rgb(100, 50, 100), rgb(57, 39, 57));
		background-size: 100% 100%;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
		padding: 40px;
		// handle phone
		@media screen and (max-width: 600px) {
			// make them all in one column
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding: 16px;
		}
	}

	.grid-item {
		background-color: #00000044;
		border: 1px solid #ddd;
		padding: 25px;
		text-align: center;
		transition: background-color 0.3s ease;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		a {
			font-family: 'Lato';
			font-size: 0.9rem;
			font-weight: 500 !important;
			color: #ffffff !important;
		}
		h3 {
			background: #fff;

			-webkit-background-clip: text;
			background-clip: text;

			color: transparent;
		}
	}

	.grid-item-large {
		grid-column: span 2;
		grid-row: span 2;
	}
	.grid-item-wide {
		grid-column: span 2;
	}

	.grid-item a {
		text-decoration: none;
		color: #333;
	}

	.grid-item:hover {
		background-color: #00000066;
	}
	.mlj-logo {
		width: 100px;
	}
	.markdown-holder {
		display: flex; 
		flex-direction: column; 
		align-items: center; 
		padding: 1rem 3rem;
		p {
			color: #e1e1e1aa;
		}
		:global(a) {
			text-decoration: underline;
		}
		@media screen and (max-width: 600px) {
			padding: 1rem 1rem;
		}
	}
</style>
