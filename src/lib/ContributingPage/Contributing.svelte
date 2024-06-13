<script lang="ts">
import SvelteMarkdown from 'svelte-markdown';
import ContributingPageMD from '../../data/ContributingPage.md?raw';

</script>

<div class="md-container">
<SvelteMarkdown source={ContributingPageMD} />
</div>

<style lang="scss">


.md-container {
    margin: 1rem 4rem 1rem 2rem;
    :global(p) {
    margin-bottom: 2rem;
    }
    :global(a) {
        text-decoration: underline;
    }
    :global(h1),  :global(h2),  :global(h3),  :global(h4) {
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    } 
    :global(ul) {
            list-style-type: disc; /* Ensures bullets are shown */
            padding-left: 20px; /* Adds padding to indent the list */
            :global(li) {
                margin-bottom: 0.5rem;
            }
        }
        :global(ul) :global(ul) {
            list-style-type: circle; /* Different bullet style for nested lists */
            padding-left: 20px; /* Further indents nested lists */
        }
        :global(ul) :global(ul) :global(ul) {
            list-style-type: square; /* Another bullet style for deeper nested lists */
            padding-left: 20px; /* Further indents deeper nested lists */
        }
}



</style>
