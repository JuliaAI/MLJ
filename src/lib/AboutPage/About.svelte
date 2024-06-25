<script lang="ts">
import SvelteMarkdown from 'svelte-markdown';
import AboutPageMD from '../../data/AboutPage.md?raw';
import FeedbackForm from './Feedback.svelte';

</script>

<div class="md-container">
<SvelteMarkdown source={AboutPageMD} />
<FeedbackForm />

</div>

<style lang="scss">


</style>
