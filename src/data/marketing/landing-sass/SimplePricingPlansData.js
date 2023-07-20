export const free = [
	{
		plantitle: 'Free',
		monthly: 0,
		yearly: 0,
		buttonText: 'Start designing',
		buttonClass: 'outline-primary',
		featureHeading: 'All core features, including:',
		features: [
			{ feature: '20+ high quality design', active: true },
			{ feature: 'Instant access to 2 icon library', active: true },
			{ feature: '24+ Free initial components', active: true },
			{ feature: '300+ beautiful design pages', active: false },
			{ feature: 'Admin dashboard pages', active: false },
			{ feature: 'Support 24/7 hours', active: false }
		]
	}
];

export const pro = [
	{
		plantitle: 'Pro',
		monthly: 39,
		yearly: 49,
		buttonText: 'Try free for 30 days',
		buttonClass: 'primary',
		featureHeading: 'Everything in Starter, plus:',
		features: [
			{ feature: '120+ high quality design', active: true },
			{ feature: 'Instant access to 2 icon library', active: true },
			{ feature: '24+ Free initial components', active: true },
			{ feature: '300+ beautiful design pages', active: true },
			{ feature: 'Admin dashboard pages', active: true },
			{ feature: 'Support 24/7 hours', active: true }
		]
	}
];

export const SimplePricingCard = [free, pro];

export default SimplePricingCard;
