# Deploy NFTs on Polygon

Based on a guide from [Pinata](https://medium.com/pinata/how-to-create-layer-2-nfts-with-polygon-and-ipfs-aef998ff8ef2)
Understanding relationship between NFT contract, asset files and metadata.

**Notes:**
   * asset file and metadata.json file are uploaded separately. 
   * NFT (ERC721) contract references a `uri` that is pointing to the `metadata.json`. The metadata file then points to the asset file in its `image` key
   * same process in ethereum or polygon, just switch network configurations. 
   * after deploying and updating uri, check [NFT contract](https://mumbai.polygonscan.com/token/0xd5dc2cbfde4c0b587870ec7aa040c9551228be23#readContract) on polygonscan -> call `tokenURI()` -> get `ipfs://QmQ3ayz3G45ztZR3L2s2Vjfcy9CmYr1kKpQmhhkXWYafDs` -> get `"image"` attribute -> get asset file / folder
