const fakeProducts = [
	{
		"id": 1,
		"name": "Martelo de Thor",
		"quantity": 10
	},
	{
		"id": 2,
		"name": "Traje de encolhimento",
		"quantity": 20
	},
	{
		"id": 3,
		"name": "Escudo do Capitão América",
		"quantity": 30
	}
];

const fakeSales = [
	{
		"saleId": 1,
		"date": "2022-03-31T16:31:50.000Z",
		"productId": 1,
		"quantity": 5
	},
	{
		"saleId": 1,
		"date": "2022-03-31T16:31:50.000Z",
		"productId": 2,
		"quantity": 10
	},
	{
		"saleId": 2,
		"date": "2022-03-31T16:31:50.000Z",
		"productId": 3,
		"quantity": 15
	}
]

const fakeUpdate = { id: 1, name: 'A volta dos que nao foram', quantity: 10 }

const fakeCreatedSale =   {
	"id": 1,
	"itemsSold": [
		{
			"productId": 1,
			"quantity": 3
		}
	]
}

module.exports = { fakeProducts, fakeSales, fakeUpdate };