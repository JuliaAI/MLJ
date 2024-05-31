<script lang="ts">
	import Title from '$lib/Common/Title.svelte';
	import ecosystemDataYaml from '../../data/EcosystemPage.yaml?raw';
	import YAML from 'yaml';
	import SvelteMarkdown from 'svelte-markdown';
	import { goto } from '$app/navigation';
	import { Tooltip } from '@svelte-plugins/tooltips';

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
</script>

<Title text={ecosystemData['title']} />
This is still under construction.
<div class="grid-container">
	{#each ecosystemData['organizations'] as org, index}
		<button
			class="grid-item {index === 0 ? 'grid-item-large' : (index === 1) ? 'grid-item-wide' : ''}"
			on:click={() => goto(org.orgLink)}
		>
			<div
				style="display: flex; gap: 0.5rem; align-items: center; flex-direction: row; justify-content:center;"
			>
				{#if org.orgName.startsWith('MLJ')}
					<img
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
				<a href={org.orgLink}> {org.orgName} </a>
			</div>
		</button>
	{/each}
</div>

<style lang="scss">
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
		padding: 40px;
	}

	.grid-item {
		background-color: #f9f9f9;
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
            color: #606060;
		}
        h3 {

            background-image: linear-gradient(200deg,  rgb(3, 183, 3),  rgb(58, 87, 229), rgb(160, 44, 166),);

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
		background-color: #eaeaea;
	}
	.mlj-logo {
		width: 100px;
	}
</style>
