/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}
 
  transactions.forEach(transaction => {
    const { category, price } = transaction
 
    categoryTotals[category] = (categoryTotals[category] || 0) + price
  })
 
  const result = Object.keys(categoryTotals).map(category => (
    {
      category,
      totalSpent: categoryTotals[category],
    }
  ))
 
  return result
 }

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-shirt',
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
