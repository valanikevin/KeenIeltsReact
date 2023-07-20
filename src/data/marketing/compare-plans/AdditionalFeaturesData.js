import { v4 as uuid } from 'uuid';

export const AdditionalFeaturesData = [
	{
		id: uuid(),
		title: 'Essentials',
		features: [
			{
				id: uuid(),
				title: 'Unlimited viewers',
				free: true,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Public packages',
				free: true,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Cross-platform Desktop app',
				free: true,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Sketch & Figma import',
				free: true,
				growth: true,
				enterprise: true
			}
		]
	},
	{
		id: uuid(),
		title: 'Customer Support and Success',
		features: [
			{
				id: uuid(),
				title: 'Community support',
				free: true,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Email support',
				free: true,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Dedicated account manager',
				free: false,
				growth: true,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Sketch & Figma import',
				free: false,
				growth: false,
				enterprise: true
			}
		]
	},
	{
		id: uuid(),
		title: 'Design Systems',
		features: [
			{
				id: uuid(),
				title: 'Smart Components',
				free: false,
				growth: false,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Custom Fonts',
				free: false,
				growth: false,
				enterprise: true
			},
			{
				id: uuid(),
				title: 'Figma Files',
				free: false,
				growth: false,
				enterprise: true
			}
		]
	}
];

export default AdditionalFeaturesData;
