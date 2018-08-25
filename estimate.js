// to call a non-constant function, the contract needs to be
// initialized with a wallet or a customSigner
var ethers = require('ethers');
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "setValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "oldValue",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "newValue",
				"type": "string"
			}
		],
		"name": "valueChanged",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAuthorAndValue",
		"outputs": [
			{
				"name": "author",
				"type": "address"
			},
			{
				"name": "value",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"name": "value",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var address = '0x482ebde51308b43572482b03b6a428535c2cd646';

var provider = ethers.providers.getDefaultProvider('ropsten');

var privateKey = '0x763227fd83077baed56da3fdf7ea1de98b1d5ed62c8e67371117d185b5d41124';
var wallet = new ethers.Wallet(privateKey, provider);
var contract = new ethers.Contract(address, abi, wallet);






var estimatePromise = contract.estimate.setValue("World??");

estimatePromise.then(function(gasCost) {
    // gasCost is returned as BigNumber
    console.log('Estimated Gas Cost: ' + gasCost.toString());
});
