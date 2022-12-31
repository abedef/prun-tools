<script>
    import Tile from "$lib/tile.svelte";

    /** @type {import('./$types').LayoutServerData} */
    export let data;

    let factor_value = "";
    $: factor = factor_value === "" ? 1 : parseFloat(factor_value);
</script>

<h1>
    prices <input bind:value={factor_value} type="text" placeholder="factor" />
</h1>

<table>
    <tr>
        <th />
        <th>name</th>
        <th>bid</th>
        <th>ask</th>
        <th>price</th>
    </tr>
    {#each data.materials as material}
        <tr>
            <td><Tile {material} /></td>
            <td>{material.name}</td>
            <td
                >{material.bid * factor}
                <span class="dimmed">({material.bid_count})</span></td
            >
            <td
                >{material.ask * factor}
                <span class="dimmed">({material.ask_count})</span></td
            >
            <td>{material.price * factor}</td>
        </tr>
    {/each}
</table>

{#if factor !== 1}
    <p>showing all values multiplied by a factor of {factor}</p>
{/if}

<p>
    click <a href="/production">here</a> for production information
</p>

<style>
    .dimmed {
        opacity: 0.2;
    }

    th {
        text-align: left;
    }

    tr:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>
