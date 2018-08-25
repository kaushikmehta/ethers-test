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

var privateKey = '0x060df81be0c862ed5644a2cce0f4c1a6a490be3ba45a3642140ff2b758cfb614'; // actual pvt key -


var wallet = new ethers.Wallet(privateKey, provider);
var contract = new ethers.Contract(address, abi, wallet);

// This is identical to the above send
// var sendPromise = contract.functions.setValue("Hello World");

// Overriding parameters; any of these are optional and get passed
// as an additional parameter after all function parameters.
var overrideOptions = {
    value: ethers.utils.parseEther('1.0')
};

var sendPromise = contract.setValue("just sent this");

sendPromise.then(function(transaction) {
    console.log(transaction);
});
