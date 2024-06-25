<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import ContributingPageMD from '../../data/ContributingPage.md?raw';
	import contributingPageYaml from '../../data/ContributingPage.yaml?raw';
	import YAML from 'yaml';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';

	let contributingData = YAML.parse(contributingPageYaml);

	let expandedIndex: number | null = null;

	function toggleExpand(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<div class="md-container">
	<SvelteMarkdown source={ContributingPageMD} />

	{#each contributingData.projects as project, index}
		<div class="headline" on:click={() => toggleExpand(index)}>
			
			<h2 style="width: 100%">
                {project.projectName}
            </h2>
            <div >
                {#if expandedIndex === index}
                <div style="width:30px; color: white; transform: translateX(-50px) translateY(14px); ">
                    <FaAngleDown/>
                </div>
                {:else}
                <div style="width:26px; color: white; transform: translateX(-50px) translateY(9px); ">
                    <FaAngleRight />
                </div>
                {/if}
            </div>
		</div>
		{#if expandedIndex === index}
			<SvelteMarkdown source={project.projectMD} />
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
		width: 100%;
	}

	.md-container h1 {
		margin-top: 0;
	}
</style>
