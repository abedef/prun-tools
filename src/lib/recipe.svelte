<script>
    import Tile from "$lib/tile.svelte";

    export let inputs = [];
    export let outputs;

    export let materials;

    function find_ticker(ticker) {
        const found = materials.find((m) => m.ticker === ticker);

        if (!found)
            console.error(`did not find ${ticker} (${inputs} to ${outputs})`);

        return found;
    }

    $: unique_inputs = [...new Set(inputs)];
    $: unique_outputs = [...new Set(outputs)];

    $: input_total_cost = unique_inputs.reduce(
        (total, input) =>
            total +
            find_ticker(input).ask * inputs.filter((i) => i === input).length,

        0
    );

    $: output_total_price = unique_outputs.reduce(
        (total, output) =>
            total +
            find_ticker(output).bid *
                outputs.filter((o) => o === output).length,

        0
    );
</script>

<div>
    {#each unique_inputs as input, i}
        <Tile
            quantity={inputs.filter((i) => i === input).length}
            material={materials.find((m) => m.ticker === input)}
        />

        {i === unique_inputs.length - 1 ? "=" : "+ "}
    {/each}

    {#each unique_outputs as output}
        <Tile
            quantity={outputs.filter((o) => o === output).length}
            material={materials.find((m) => m.ticker === output)}
        />
    {/each}
</div>

<table>
    <tr>
        <th>cost of inputs</th>
        <td class="red">{Math.round(input_total_cost)}</td>
    </tr>

    <tr>
        <th>price of outputs</th>
        <td class="green">{Math.round(output_total_price)}</td>
    </tr>

    <tr>
        <th>margin</th>
        <td
            class:green={output_total_price > input_total_cost}
            class:red={!(output_total_price > input_total_cost)}
            >{Math.round(output_total_price - input_total_cost)}</td
        >
    </tr>
</table>

<style>
    div {
        padding: 1rem;
    }

    th {
        text-align: right;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>
