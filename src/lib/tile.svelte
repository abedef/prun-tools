<script>
    export let material;
    export let quantity = 1;

    $: color =
        material.ticker === "ALO" ||
        material.ticker === "FEO" ||
        material.ticker === "SIO"
            ? "rgb(209, 214, 224)"
            : material.ticker === "FLX"
            ? "rgb(255, 173, 218)"
            : material.ticker === "RCO"
            ? "rgb(219, 145, 145)"
            : material.ticker === "COF" || material.ticker === "PWO"
            ? "rgb(255, 151, 166)"
            : material.ticker === "RAT" ||
              material.ticker === "DW" ||
              material.ticker === "OVE"
            ? "rgb(255, 173, 173)"
            : material.ticker === "MCG"
            ? "rgb(151, 218, 255)"
            : material.ticker === "LST"
            ? "rgb(255, 240, 200)"
            : material.ticker === "C"
            ? "rgb(188, 173, 159)"
            : material.ticker === "SF" || material.ticker === "FF"
            ? "rgb(157, 250, 157)"
            : material.ticker === "PE" || material.ticker === "PG"
            ? "rgb(248, 158, 187)"
            : material.ticker === "O" || material.ticker === "H"
            ? "rgb(127, 232, 234)"
            : material.ticker === "BDE" ||
              material.ticker === "BSE" ||
              material.ticker === "BTA" ||
              material.ticker === "BBH"
            ? "rgb(142, 157, 225)"
            : material.ticker === "FE" || material.ticker === "AL"
            ? "rgb(181, 181, 181)"
            : "red";
</script>

<div
    class="unselectable"
    title={`${material.name}\nsell${quantity > 1 ? ` (×${quantity})` : ""}: ${
        quantity * material.bid
    }\nbuy${quantity > 1 ? ` (×${quantity})` : ""}: ${quantity * material.ask}`}
    style={`background-color: ${color}`}
>
    {material.ticker}
    {#if quantity && quantity > 1}
        <span>
            {quantity}
        </span>
    {/if}
</div>

<style>
    div {
        height: 3rem;
        width: 3rem;

        display: inline-flex;

        position: relative;

        align-items: center;
        justify-content: center;

        background-color: black;
        color: rgba(255, 255, 255);

        font-weight: bold;

        cursor: pointer;
    }

    span {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #00000080;

        font-size: xx-small;

        padding: 0.125rem;
    }

    .unselectable {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
</style>
