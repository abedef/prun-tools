<script>
    import Recipe from "$lib/recipe.svelte";
    import recipes from "$lib/recipes";

    /** @type {import('./$types').LayoutServerData} */
    export let data;
</script>

<h1>production lines</h1>

{#each recipes as { name, inputs, outputs }}
    <h2>{name}</h2>
    <Recipe materials={data.materials} {inputs} {outputs} />
{/each}

<p>
    go <a href="/">back</a>
</p>
