import { v4 as uuid } from 'uuid';

export const BudgetCategoryData = [
	{
		id: uuid(),
		category: 'Concept',
		total: 12000,
		expensesUSD: 6500,
		expensesPercent: 52,
		updown: 'up'
	},
	{
		id: uuid(),
		category: 'Design',
		total: 18000,
		expensesUSD: 8000,
		expensesPercent: 45,
		updown: 'down'
	},
	{
		id: uuid(),
		category: 'Development',
		total: 64000,
		expensesUSD: 38000,
		expensesPercent: 54,
		updown: 'down'
	},

	{
		id: uuid(),
		category: 'SEO',
		total: 8000,
		expensesUSD: 3000,
		expensesPercent: 65,
		updown: 'down'
	},
	{
		id: uuid(),
		category: 'Extra',
		total: 2000,
		expensesUSD: 1500,
		expensesPercent: 85,
		updown: 'up'
	},
	{
		id: uuid(),
		category: 'Marketing',
		total: 34500,
		expensesUSD: 24500,
		expensesPercent: 88,
		updown: 'up'
	}
];

export default BudgetCategoryData;
