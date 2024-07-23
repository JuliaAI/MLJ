<script>
	// Reactive state to track the selected tab
	let selectedTab = 'tab1';

	// Define tab data
	const tabs = [
		{
			id: 'tab1',
			title: 'High-level Design',
			content: 'Some discussion about the feature and may be a code block'
		},
		{
			id: 'tab2',
			title: 'Nested Hyperparameters',
			content: 'Maybe code block and some discussion of the feature'
		},
		{
			id: 'tab3',
			title: 'Neural Networks',
			content: 'Ding ding.'
		},
		{
			id: 'tab4',
			title: 'Language Models',
			content: 'Cool.'
		}
	];
</script>

<div class="tabs">
	<ul>
		{#each tabs as tab (tab.id)}
			<li on:click={() => (selectedTab = tab.id)} class:selected={selectedTab === tab.id}>
				<br />
				<span>{tab.title}</span>
			</li>
		{/each}
	</ul>
	<div class="slider">
		<div
			class="indicator"
			style="transform: translateX({tabs.findIndex((tab) => tab.id === selectedTab) * 100}%);"
		></div>
	</div>
	<div class="content">
		{#each tabs as tab (tab.id)}
			<section class:selected={selectedTab === tab.id}>
				<p style="color: white; margin: 2rem 0rem;">{tab.content}</p>
			</section>
		{/each}
	</div>
</div>

<style>
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
		width: 70%;
		margin: 0 auto;
		border-radius: 5px;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	li {
		flex: 1;
		text-align: center;
		cursor: pointer;
		color: white;
	}

	.content section {
		display: none;
	}

	.selected {
		display: block !important;
	}

	.indicator {
		background: #fefefe;
		height: 4px;
		width: 25%;
		transition: transform 0.3s ease;
	}
</style>
