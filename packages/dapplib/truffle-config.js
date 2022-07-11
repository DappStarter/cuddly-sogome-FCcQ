require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rifle rural unknown hope civil army gasp'; 
let testAccounts = [
"0xe19185f4986fff7b221133bdec9285943095c1b4dc8609d823efe51bfbf88a9e",
"0xd102db52e4b80a28b5a01e71c455be755e5c62d1bbffb20524c556a6f54cf535",
"0x25a735e95b8034ff897084e309724270a978643dca0eb538347587cf87d82883",
"0x2d099f93096a77a91ae190a60aa48af77370c7fdb6b0a32d9770dab84b2b33fe",
"0x5420d69841ea024469caefdba35b647f7379e8af43a419c856e80ede4c2176b6",
"0x6f535ceb7399ee9ae26d87d33d451e0a2a36bb2f3c2bd136243543d3168f7063",
"0x93e2e1649f0806519f5cdbb23f78d64f6fd598b5b3a5977a397f89584848b586",
"0xcf89f75989d437d22030df6a5dc8f673839bd97b82503351446d8651d742ff0e",
"0x9fb999c568f2a1b700b63d6439ab7eba1425cb9e6445e79e11951a393cd2b075",
"0xcc6c8b5045832e0439d3390381a3536547ed2201e8164af7f9abaa3611aa5aeb"
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
            version: '^0.8.0'
        }
    }
};

