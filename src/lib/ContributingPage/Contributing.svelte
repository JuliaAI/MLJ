<script lang="ts">
	// Helpers
	import { onMount } from 'svelte';
	import { fetchIssues } from './helpers';
	// Components
	import SvelteMarkdown from 'svelte-markdown';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import snarkdown from 'snarkdown';
	// Data
	import YAML from 'yaml';
	import ContributingPageMD from '../../data/ContributingPage.md?raw';
	import contributingPageYaml from '../../data/ContributingPage.yaml?raw';

	// 1. Load the contributing data and extract the issues link
	let contributingData = YAML.parse(contributingPageYaml);
	let issuesLink = contributingData['issuesLink'];

	// 2. Fetch the issues from Github
	let issues: any[] = [];
	onMount(async () => {
		try {
			issues = await fetchIssues(issues, issuesLink);
		} catch (error) {
			console.error('Error fetching issues:', error);
		}
	});

	// 3. Make state to show or hide the issues
	let expandedIndex: number | null = null;
	function toggleExpand(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<div class="md-container">
	<!-- Contributing page markdown -->
	{@html snarkdown(ContributingPageMD)}
	<!-- Bucket list issues -->
	{#each issues as issue, index}
		<button class="headline" on:click={() => toggleExpand(index)}>
			<h2 class="project-headline">
				<div>{issue.title}</div>
				<div>
					{#if expandedIndex === index}
						<div style="width:30px; color: white; transform: translateY(6px)  ">
							<FaAngleDown />
						</div>
					{:else}
						<div style="width:26px; color: white; transform: translateY(6px) ">
							<FaAngleRight />
						</div>
					{/if}
				</div>
			</h2>
		</button>
		<!-- Issue body -->
		{#if expandedIndex === index}
			<div style="width: 95%; margin: auto;">
				<SvelteMarkdown source={issue.body || 'No detailed description provided.'} />
				<button class="contribute-button"
					><a
						style="color: white; text-decoration: none; font-family: Poppins; font-weight: 600;"
						href={issue.html_url}
						>Contribute to Project ►
					</a></button
				>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.headline {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		// flex-wrap: wrap;
		width: 100%;
		text-align: left;
		font-size: 1.05rem;
	}
	.project-headline {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: -0.1rem 2.5rem;
		align-items: center;
		gap: 1rem;
		// for small screen: more padding
		@media screen and (max-width: 600px) {
			padding: 0.3rem 1rem;
		}
	}

	.md-container h1 {
		margin-top: 0;
	}

	.contribute-button {
		margin-left: 0rem;
		background: linear-gradient(34deg, #845588, #59395c);
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
	}
	.contribute-button:hover {
		transform: scale(1.05);
		transition: 0.4s;
	}
</style>
