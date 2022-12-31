import tickers from '$lib/tickers';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const materials = await Promise.all(
        tickers.map(
            ticker => fetch(`https://rest.fnar.net/exchange/${ticker}.AI1`, {
                method: 'GET', headers: { 'accept': 'application/json' }
            })
                .then(response => response.json())
                .then(({ MaterialName, MaterialTicker, Ask, AskCount, Bid, BidCount, Price }) => ({
                    ticker: MaterialTicker,
                    name: pretty_name(MaterialName),
                    bid: Bid.toPrecision(3),
                    bid_count: BidCount,
                    ask: Ask.toPrecision(3),
                    ask_count: AskCount,
                    price: Price.toPrecision(3),
                }))
        )
    )

    return { materials };
};

function pretty_name(original_name) {
    switch (original_name) {
        case 'basicDeckElements':
            return 'basic deck elements';

        case 'basicBulkhead':
            return 'basic bulkhead';

        case "cottonRaw":
            return 'raw cotton fiber';

        case "siliconOre":
            return 'silicon ore';

        case "ironOre":
            return 'iron ore';

        case "aluminiumOre":
            return 'aluminium ore';

        case "stlFuel":
            return 'stl fuel';

        case "ftlFuel":
            return 'ftl fuel';

        case "drinkingWater":
            return 'drinking water';

        case "mineralConstructionGranulate":
            return "mineral construction granulate";

        case "pioneerLuxuryDrink":
            return 'caffeinated infusion';

        case 'pioneerLuxuryClothing':
            return 'padded work overall';

        case 'polyEthylene':
            return 'poly-ethylene';

        case 'basicWindow':
            return 'basic transparent aperture';

        case 'basicStructuralElements':
            return 'basic structural elements';

        case 'pioneerClothing':
            return 'basic overalls';

        default:
            return original_name;
    }
}