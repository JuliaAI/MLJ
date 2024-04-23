<script>
    import MarkdownIt from "markdown-it";
    import cheatSheet from "$lib/data/mlj_cheatsheet.md?raw";
    const md = new MarkdownIt();
</script>

{@html md.render(cheatSheet)}