<script lang="ts">
	// Components
	import AboutPageMD from '../../data/AboutPage.md?raw';
	import FeedbackForm from './Feedback.svelte';
	import snarkdown from 'snarkdown';
</script>

<div class="md-container">
	{@html snarkdown(AboutPageMD)}
	<FeedbackForm />
</div>

<style lang="scss">
	// Styles previously applied globally
</style>
