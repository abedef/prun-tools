export default [
    {
        name: "aluminium (flux)",
        inputs: ["ALO", "ALO", "ALO", "ALO", "ALO", "ALO", "FLX", "C", "O"],
        outputs: ["AL", "AL", "AL", "AL"],
    },
    {
        name: "aluminium",
        inputs: ["ALO", "ALO", "ALO", "ALO", "ALO", "ALO", "C", "O"],
        outputs: ["AL", "AL", "AL"],
    },
    {
        name: "iron (flux)",
        inputs: ["FEO", "FEO", "FEO", "FEO", "FEO", "FEO", "FLX", "C", "O"],
        outputs: ["FE", "FE", "FE", "FE"],
    },
    {
        name: "iron",
        inputs: ["FEO", "FEO", "FEO", "FEO", "FEO", "FEO", "C", "O"],
        outputs: ["FE", "FE", "FE"],
    },
    {
        name: "mineral construction granulate",
        inputs: ["LST", "LST", "LST", "LST", "SIO", "SIO"],
        outputs: Array(50).fill("MCG"),
    },
    {
        name: "basic overalls",
        inputs: Array(50).fill("PE").concat("RCO"),
        outputs: Array(20).fill("OVE"),
    },
    {
        name: "poly-ethelyne",
        inputs: ["H", "H", "C"],
        outputs: Array(200).fill("PE"),
    },
    {
        name: "basic bulkhead",
        inputs: ["FE", "FE", "LST"],
        outputs: ["BBH"],
    },
    {
        name: "basic deck elements",
        inputs: Array(50).fill("PE"),
        outputs: ["BDE"],
    },
    {
        name: "basic structural elements",
        inputs: ["LST", "LST", "FE"],
        outputs: ["BSE"],
    },
    {
        name: "basic transparent aperture",
        inputs: Array(50).fill("PE").concat("FE"),
        outputs: ["BTA"],
    },
];