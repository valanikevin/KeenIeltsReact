import { v4 as uuid } from 'uuid';

export const BudgetCategoryData = [
	{
		id: uuid(),
		category: 'Design',
		percentage: 23,
		total: 9000
	},
	{
		id: uuid(),
		category: 'Saas Services',
		percentage: 10,
		total: 4500
	},
	{
		id: uuid(),
		category: 'Development',
		percentage: 23.5,
		total: 9030
	},

	{
		id: uuid(),
		category: 'SEO',
		percentage: 18,
		total: 6800
	},
	{
		id: uuid(),
		category: 'Entertainment',
		percentage: 4,
		total: 2400
	},
	{
		id: uuid(),
		category: 'Marketing',
		percentage: 19,
		total: 8320
	},
	{
		id: uuid(),
		category: 'Extra',
		percentage: 3.5,
		total: 2000
	}
];

export default BudgetCategoryData;
