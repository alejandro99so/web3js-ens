const { ENS } = require('web3-eth-ens');

const init = async () => {
    const ens = new ENS(undefined,'https://eth.drpc.org');
    console.log("getAddress: ", await ens.getAddress('vitalik.eth'));
    const hash = await ens.getContenthash('ethereum.eth');
    console.log("Content Hash: ", hash);
    const owner = await ens.getOwner('ethereum.eth');
    console.log("Owner: ", owner);
    const resolver = await ens.getResolver('ethereum.eth');
    console.log("Resolver: ", resolver.options.address);
    const result = await ens.recordExists('ethereum.eth');
    console.log("Result: ", result);
}

init()