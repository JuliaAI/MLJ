<script>
    import MarkdownIt from "markdown-it";
    import modelBrowser from "$lib/data/model_browser.md?raw";
    const md = new MarkdownIt();
</script>

{@html md.render(modelBrowser)}