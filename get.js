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

 var contract = new ethers.Contract(address, abi, provider);

 var callPromise = contract.getValue();

callPromise.then(function(value) {
    console.log('Single Return Value:' + value);
});


var callPromise = contract.getAuthorAndValue();

callPromise.then(function(result) {
    console.log('Positional argument [0]; author:   ' + result[0]);
    console.log('Positional argument [1]; value:    ' + result[1]);
    console.log('Keyword argument [author]; author: ' + result.author);
    console.log('Keyword argument [value]; value:   ' + result.value);
});
