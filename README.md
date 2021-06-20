## NFT tokenlist
> A tokenlist for ERC721, ERC1155

This repository implements a mechanism to generate customizable tokenlist using some simple scripts which pull the data from [OpenSea Graphql API](https://api.opensea.io/graphql). 

The scripts follow the [collectibles tokenlist schema from 0xsequence](https://github.com/0xsequence/collectible-lists).

You can find a sample tokenlist supporting 3300 NFTs in [trimmed_3300_nfts.tokenlist.json](./trimmed_3300_nfts.tokenlist.json).

## How NFT tokenlist generation works? [WIP]
- Use the [`.env`](./.env) file to specify the parameters.
- Use the parameters to generate the NFT tokenlist (from cached data or opensea endpoint).

## Further Work
- Create an extension of [EIP747](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-747.md) to allow a Dapp to suggest a user subscribe to a token list.