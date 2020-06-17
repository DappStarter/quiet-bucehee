require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stomach deny mirror public grace civil army genre'; 
let testAccounts = [
"0x5f9f4105e3325b4e7fc79eae1f26b98ac8950a911e1813b043c5bc84a93418d0",
"0x19eb7a98d4d30013b75a7550ec55754572c98812d4705065caae31618f1f966c",
"0xf592099c5d8894f8118e63d3ec4bc3396c25983912b3f80e868acfd8420d21ea",
"0xd7f5939bd51efd1fbb112d99d9a33798b2108c6a2a8c9e846cdd602e470146c1",
"0x2bbcbaa9706a2e46691b2f20cbd5275e69be7b1fa5413be67b4ce2d6bddfb5af",
"0xe5a8b39b5082c74d15b274c3cf285cbf4477c5a4ee21be7f96bb41c18f8cc8b1",
"0xc161e1964eb58fcee918cc620a44e0df247e9006b931df6047e8d598e7f3c885",
"0x6c105e01a07b87b52b926c3512276e7955cf1a24e9c5eba20a8f6396a2d84b16",
"0xf1b63fce8a0fbb51d1fbb07ed50ff9b3cf58c79f9aeaf99bb1e7684804c056e5",
"0xc7f5764547f5bc502f10ff6c3f297dd288520cf6fd11e2dadf6f9aa0a05a07c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
