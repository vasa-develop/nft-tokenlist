const fs = require('fs');

var tokens = []
var numberOfRawDataFiles = 33

for (let i = 0; i < numberOfRawDataFiles; i++) {
    rawdata = fs.readFileSync('./cached/' + 'raw' + i + '.json')
    rawdata = JSON.parse(rawdata.toString())
    var list = rawdata.data.collections.edges.map((edge) => {
        node = edge.node
        return {
            "name": node.name,
            // "description": node.description,
            // "owner": node.owner ? node.owner.address : null,
            "chainId": node.assetContracts.edges.length > 0
                ? node.assetContracts.edges[0].node.blockExplorerLink.split('/')[2] == "polygonscan.com" ? 137 : 1
                : 1,
            "address": node.assetContracts.edges.length > 0
                ? node.assetContracts.edges[0].node.blockExplorerLink.split('/').pop()
                : "",
            "standard": node.assetContracts.edges.length > 0
                ? node.assetContracts.edges[0].node.tokenStandard.toLocaleLowerCase()
                : "",
            "symbol": node.assetContracts.edges.length > 0
                ? node.assetContracts.edges[0].node.symbol
                : null,
            // "assetCount": node.assetCount,
            "logoURI": node.imageUrl,
            // "tags": node.stringTraits
        }
    })
    tokens = [...tokens, ...list]
}

var final = {
    "name": "Genie Tokenlist",
    "timestamp": "2021-06-19T18:53:14.364Z",
    "version": {
        "major": 0,
        "minor": 0,
        "patch": 0
    },
    "tags": {},
    "logoURI": "blob:https://in.pinterest.com/4eaf7eed-b9e1-45ca-a7ee-6e483b353301",
    "keywords": ["genie", "erc20", "erc721", "erc1155"],
    "tokens": tokens
}

console.log("Number of tokens: ", tokens.length)

fs.writeFileSync("./genie.tokenlist.json", JSON.stringify(final, null, 2));