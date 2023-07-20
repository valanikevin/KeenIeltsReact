const theme = {
	primary: 'var(--geeks-primary)',
	secondary: 'var(--geeks-secondary)',
	success: 'var(--geeks-success)',
	info: 'var(--geeks-info)',
	warning: 'var(--geeks-warning)',
	danger: 'var(--geeks-danger)',
	dark: 'var(--geeks-dark)',
	light: 'var(--geeks-light)',
	white: 'var(--geeks-white)',
	gray100: 'var(--geeks-gray-100)',
	gray200: 'var(--geeks-gray-200)',
	gray300: 'var(--geeks-gray-300)',
	gray400: 'var(--geeks-gray-400)',
	gray500: 'var(--geeks-gray-500)',
	gray600: 'var(--geeks-gray-600)',
	gray700: 'var(--geeks-gray-700)',
	gray800: 'var(--geeks-gray-800)',
	gray900: 'var(--geeks-gray-900)',
	black: 'var(--geeks-black)',
	lightPrimary: 'var(--geeks-light-primary)',
	lightSecondary: 'var(--geeks-light-secondary)',
	lightSuccess: 'var(--geeks-light-success)',
	lightDanger: 'var(--geeks-light-danger)',
	lightWarning: 'var(--geeks-light-warning)',
	lightInfo: 'var(--geeks-light-info)',
	darkPrimary: 'var(--geeks-dark-primary)',
	darkSecondary: 'var(--geeks-dark-secondary)',
	darkSuccess: 'var(--geeks-dark-success)',
	darkDanger: 'var(--geeks-dark-danger)',
	darkWarning: 'var(--geeks-dark-warning)',
	darkInfo: 'var(--geeks-dark-info)',
	transparent: 'transparent',
	borderColor: 'var(--geeks-border-color)'
};
/** Traffic Chart Series and options used in Dashboard Overview page  */
export const TrafficChartSeries = [44, 55, 41];
export const TrafficChartOptions = {
	dataLabels: { enabled: !1 },
	labels: ['Direct', 'Referral', 'Organic'],
	colors: [theme.darkPrimary, theme.primary, theme.lightPrimary],
	legend: {
		labels: { colors: [theme.gray500], useSeriesColors: !1 },
		position: 'bottom'
	},
	plotOptions: { pie: { expandOnClick: !1, donut: { size: '70%' } } },
	chart: { type: 'donut' },
	tooltip: { theme: 'light', marker: { show: !0 }, x: { show: !1 } },
	states: { hover: { filter: { type: 'none' } } },
	stroke: { show: !0, colors: [theme.transparent] },
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					height: 300
				}
			}
		},
		{
			breakpoint: 5000,
			options: {
				chart: {
					height: 280
				}
			}
		}
	]
};

/** Earnings Chart Series and options used in Dashboard Overview page  */

export const EarningsChartSeries = [
	{
		name: 'Current Month',
		data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
	}
];
export const EarningsChartOptions = {
	height: 'auto',
	labels: [
		'Jan',
		'Feb',
		'March',
		'April',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	],
	chart: {
		fontFamily: '$font-family-base',
		height: '350px',
		type: 'line',
		toolbar: { show: !1 }
	},
	colors: [theme.primary],
	stroke: { width: 4, curve: 'smooth', colors: [theme.primary] },
	xaxis: {
		axisBorder: { show: !1 },
		axisTicks: { show: !1 },
		crosshairs: { show: !0 },
		labels: {
			style: {
				fontSize: '13px',
				fontWeight: 400,
				colors: theme.gray500,
				fontFamily: 'inter'
			}
		}
	},
	yaxis: {
		labels: {
			formatter: function (e) {
				return e + 'k';
			},
			style: { fontSize: '13px', fontWeight: 400, colors: theme.gray500 },
			offsetX: -15
		},
		tickAmount: 3,
		min: 10,
		max: 40
	},
	grid: {
		borderColor: theme.borderColor,
		strokeDashArray: 5,
		xaxis: { lines: { show: !1 } },
		yaxis: { lines: { show: !0 } },
		padding: { top: 0, right: 0, bottom: 0, left: 0 }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		offsetY: -50,
		fontSize: '16px',
		markers: {
			width: 10,
			height: 10,
			strokeWidth: 0,
			strokeColor: theme.white,
			fillColors: void 0,
			radius: 12,
			onClick: void 0,
			offsetX: 0,
			offsetY: 0
		},
		itemMargin: { horizontal: 0, vertical: 20 }
	},
	tooltip: { theme: 'light', marker: { show: !0 }, x: { show: !1 } },
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					height: 300
				}
			}
		},
		{
			breakpoint: 5000,
			options: {
				chart: {
					height: 280
				}
			}
		}
	]
};

/** Session Chart Series and options used in Dashboard Analytics page  */

export const SessionChartSeries = [
	{
		name: 'Session Duration',
		data: [600, 1e3, 400, 2e3, 500, 900, 2500, 1800, 3800],
		colors: [theme.primary]
	},
	{
		name: 'Page Views',
		data: [1e3, 2e3, 800, 1200, 300, 1900, 1600, 2e3, 1e3]
	},
	{
		name: 'Total Visits',
		data: [2200, 1e3, 3400, 900, 500, 2500, 3e3, 1e3, 2500]
	}
];

export const SessionChartOptions = {
	chart: {
		toolbar: { show: !1 },
		height: 200,
		type: 'line',
		zoom: { enabled: !1 }
	},
	dataLabels: { enabled: !1 },
	stroke: { width: [4, 3, 3], curve: 'smooth', dashArray: [0, 5, 4] },
	legend: { show: !1 },
	colors: [theme.primary, theme.success, theme.warning],
	markers: { size: 0, hover: { sizeOffset: 6 } },
	xaxis: {
		categories: [
			'01 Jan',
			'02 Jan',
			'03 Jan',
			'04 Jan',
			'05 Jan',
			'06 Jan',
			'07 Jan',
			'08 Jan',
			'09 Jan',
			'10 Jan',
			'11 Jan',
			'12 Jan'
		],
		labels: {
			style: {
				colors: [theme.gray500],
				fontSize: '12px',
				fontFamily: 'Inter',
				cssClass: 'apexcharts-xaxis-label'
			}
		},
		axisBorder: {
			show: !0,
			color: theme.borderColor,
			height: 0,
			width: '100%',
			offsetX: 0,
			offsetY: 0
		},
		axisTicks: {
			show: !0,
			borderType: 'solid',
			color: theme.borderColor,
			height: 6,
			offsetX: 0,
			offsetY: 0
		}
	},
	yaxis: {
		labels: {
			style: {
				colors: [theme.gray500],
				fontSize: '12px',
				fontFamily: 'Inter',
				cssClass: 'apexcharts-xaxis-label'
			},
			offsetX: -12,
			offsetY: 0
		}
	},
	tooltip: {
		y: [
			{
				title: {
					formatter: function (e) {
						return e + ' (mins)';
					}
				}
			},
			{
				title: {
					formatter: function (e) {
						return e + ' per session';
					}
				}
			},
			{
				title: {
					formatter: function (e) {
						return e;
					}
				}
			}
		]
	},
	grid: { borderColor: theme.borderColor },
	responsive: [
		{ breakpoint: 480, options: { chart: { height: 300 } } },
		{ breakpoint: 1441, options: { chart: { height: 360 } } },
		{ breakpoint: 1980, options: { chart: { height: 400 } } },
		{ breakpoint: 2500, options: { chart: { height: 470 } } },
		{ breakpoint: 3000, options: { chart: { height: 450 } } }
	]
};

/** Active Users Chart Series and options used in Dashboard Analytics page  */

export const ActiveUserChartSeries = [
	{
		data: [
			25, 66, 41, 70, 63, 25, 44, 22, 36, 19, 54, 44, 32, 36, 29, 54, 25, 66,
			41, 65, 63, 25, 44, 12, 36, 39, 25, 44, 42, 36, 54
		]
	}
];
export const ActiveUserChartOptions = {
	chart: { type: 'bar', height: 302, sparkline: { enabled: !0 } },
	states: {
		normal: { filter: { type: 'none', value: 0 } },
		hover: { filter: { type: 'darken', value: 0.55 } },
		active: {
			allowMultipleDataPointsSelection: !1,
			filter: { type: 'darken', value: 0.55 }
		}
	},
	colors: [theme.primary],
	plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
	xaxis: { crosshairs: { width: 1 } },
	tooltip: {
		fixed: { enabled: !1 },
		x: { show: !1 },
		y: {
			title: {
				formatter: function (e) {
					return 'Active User';
				}
			}
		},
		marker: { show: !1 }
	},
	responsive: [
		{ breakpoint: 480, options: { chart: { height: 300 } } },
		{ breakpoint: 1441, options: { chart: { height: 300 } } },
		{ breakpoint: 1981, options: { chart: { height: 300 } } },
		{ breakpoint: 2500, options: { chart: { height: 400 } } },
		{ breakpoint: 3000, options: { chart: { height: 450 } } }
	]
};

/** Traffic Channel Chart Series and options used in Dashboard Analytics page  */

export const TrafficChannelChartSeries = [60, 55, 12, 17];
export const TrafficChannelChartOptions = {
	labels: ['Organic Search', 'Direct', 'Refferrals', 'Social Media'],
	colors: [theme.primary, theme.success, theme.danger, theme.warning],
	chart: { type: 'donut' },
	legend: { show: !1 },
	dataLabels: { enabled: !1 },
	plotOptions: { pie: { donut: { size: '50%' } } },
	stroke: { width: 0, colors: [theme.borderColor] },
	responsive: [
		{ breakpoint: 480, options: { chart: { height: 300 } } },
		{ breakpoint: 1441, options: { chart: { height: 200 } } },
		{ breakpoint: 1980, options: { chart: { height: 300 } } },
		{ breakpoint: 2000, options: { chart: { height: 270 } } },
		{ breakpoint: 2500, options: { chart: { height: 350 } } },
		{ breakpoint: 3000, options: { chart: { height: 500 } } }
	]
};

/** Operating System Chart Series and options used in Dashboard Analytics page  */

export const OperatingSystemChartSeries = [55, 88, 80, 75];
export const OperatingSystemChartOptions = {
	labels: ['Window', 'macOS', 'Linux', 'Android'],
	chart: { type: 'polarArea', height: 350 },
	colors: [theme.danger, theme.success, theme.primary, theme.info],
	legend: { show: !1 },
	stroke: { colors: [theme.borderColor] },
	fill: { opacity: 0.9 },
	plotOptions: {
		polarArea: {
			rings: { strokeWidth: 1, strokeColor: [theme.borderColor] },
			spokes: {
				strokeWidth: 1,
				connectorColors: [
					theme.borderColor,
					theme.borderColor,
					theme.borderColor,
					theme.borderColor
				]
			}
		}
	},
	responsive: [
		{ breakpoint: 480, options: { chart: { height: 300 } } },
		{ breakpoint: 1441, options: { chart: { height: 270 } } },
		{ breakpoint: 1980, options: { chart: { height: 370 } } },
		{ breakpoint: 2500, options: { chart: { height: 350 } } },
		{ breakpoint: 3000, options: { chart: { height: 500 } } }
	]
};

/** User Chart Series and options used in Dashboard Analytics -> StartRightChart component */
export const UserChartSeries = [
	{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }
];
export const UserChartOptions = {
	chart: {
		height: 60,
		type: 'area',
		toolbar: { show: !1 },
		sparkline: { enabled: !0 },
		grid: { show: !1, padding: { left: 0, right: 0 } }
	},
	dataLabels: { enabled: !1 },
	stroke: { curve: 'smooth', width: 2 },
	colors: [theme.primary],
	fill: {
		type: 'gradient',
		gradient: {
			gradientToColors: [theme.primary],
			shadeIntensity: 0.9,
			opacityFrom: 0.5,
			opacityTo: 0.04,
			stops: [0, 80, 100]
		}
	},
	series: [{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }],
	xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
	yaxis: [{ y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } }],
	tooltip: { x: { show: !1 } }
};

/** Visitor Chart Series and options used in Dashboard Analytics -> StartRightChart component */
export const VisitorChartSeries = [
	{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }
];
export const VisitorChartOptions = {
	chart: {
		height: 60,
		type: 'area',
		toolbar: { show: !1 },
		sparkline: { enabled: !0 },
		grid: { show: !1, padding: { left: 0, right: 0 } }
	},
	colors: [theme.success],
	dataLabels: { enabled: !1 },
	stroke: { curve: 'smooth', width: 2 },
	fill: {
		colors: [theme.success],
		type: 'gradient',
		gradient: {
			type: 'vertical',
			gradientToColors: [theme.success],
			shadeIntensity: 0.7,
			opacityFrom: 0.5,
			opacityTo: 0.04,
			stops: [0, 80, 100]
		}
	},
	series: [{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }],
	xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
	yaxis: [{ y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } }],
	tooltip: { x: { show: !1 } }
};

/** Bounce Chart Series and options used in Dashboard Analytics -> StartRightChart component */
export const BounceChartSeries = [
	{ name: 'Bonus Rate', data: [28, 40, 36, 52, 38, 60, 55] }
];
export const BounceChartOptions = {
	chart: {
		height: 60,
		type: 'line',
		toolbar: { show: !1 },
		sparkline: { enabled: !0 },
		grid: { show: !1, padding: { left: 0, right: 0 } }
	},
	colors: [theme.darkWarning],
	dataLabels: { enabled: !1 },
	stroke: { curve: 'straight', width: 4 },
	markers: { size: 4, hover: { size: 6, sizeOffset: 3 } },
	xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
	yaxis: [{ y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } }],
	tooltip: { x: { show: !1 } }
};

/** Average Visit Time Chart Series and options used in Dashboard Analytics -> StartRightChart component */
export const AverageVisitTimeChartSeries = [
	{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }
];
export const AverageVisitTimeChartOptions = {
	chart: {
		height: 60,
		type: 'area',
		toolbar: { show: !1 },
		sparkline: { enabled: !0 },
		grid: { show: !1, padding: { left: 0, right: 0 } }
	},
	colors: [theme.danger],
	dataLabels: { enabled: !1 },
	stroke: { curve: 'smooth', width: 2 },
	fill: {
		type: 'gradient',
		gradient: {
			gradientToColors: [theme.danger],
			shadeIntensity: 0.7,
			opacityFrom: 0.5,
			opacityTo: 0.04,
			stops: [0, 80, 100]
		}
	},
	series: [{ name: 'User', data: [28, 40, 36, 52, 38, 60, 55] }],
	xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
	yaxis: [{ y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } }],
	tooltip: { x: { show: !1 } }
};

/** Order Column Chart Series and options used in Front side Instructor Dashboard page */

export const OrderColumnChartSeries = [{ data: [4, 6, 5, 3, 5, 6, 8, 9] }];
export const OrderColumnChartOptions = {
	chart: { toolbar: { show: !1 }, type: 'bar', height: 272 },
	colors: [theme.primary],
	plotOptions: {
		bar: { horizontal: !1, columnWidth: '12%', endingShape: 'rounded' }
	},
	dataLabels: { enabled: !1 },
	stroke: { show: !0, width: 1, colors: [theme.transparent] },
	xaxis: {
		categories: [
			'1 Jun',
			'9 Jun',
			'16 jun',
			'18 Jun',
			'19 Jun',
			'22 jun',
			'24 Jun',
			'26 Jun'
		],
		axisBorder: { show: !1 },
		labels: {
			offsetX: 0,
			offsetY: 5,
			style: { fontSize: '13px', fontWeight: 400, colors: theme.gray500 }
		}
	},
	grid: {
		borderColor: theme.borderColor,
		strokeDashArray: 5,
		xaxis: { lines: { show: !1 } },
		yaxis: { lines: { show: !0 } },
		padding: { top: 0, right: 0, bottom: 0, left: -10 }
	},
	yaxis: {
		title: { text: void 0 },
		plotOptions: {
			bar: { horizontal: !1, endingShape: 'rounded', columnWidth: '80%' }
		},
		labels: {
			style: { fontSize: '13px', fontWeight: 400, colors: theme.gray500 },
			offsetX: -10
		}
	},
	fill: { opacity: 1 },
	tooltip: {
		y: {
			formatter: function (e) {
				return e + ' sales ';
			}
		},
		marker: { show: !0 }
	}
};

/** Order Column Chart Series and options used in Front side Instructor Dashboard page */
export const PayoutChartSeries = [
	{ name: 'Inflation', data: [40, 20, 50, 80, 65] }
];

export const PayoutChartOptions = {
	chart: { height: 150, type: 'bar', toolbar: { show: !1 } },
	colors: [theme.lightPrimary],
	grid: { show: !1 },
	tooltip: { enabled: !1 },
	plotOptions: { bar: { endingShape: 'flat', columnWidth: '65%' } },
	dataLabels: { enabled: !1 },
	xaxis: {
		labels: { show: !1 },
		categories: [],
		position: 'top',
		axisBorder: { show: !1 },
		axisTicks: { show: !1 },
		tooltip: { enabled: !0 }
	},
	yaxis: { show: !1 }
};

/** Total Earning Chart  Series and options used in Front side Instructor Dashboard page */
export const TotalEarningChartSeries = [
	{ data: [50, 80, 5, 90, 12, 150, 12, 80, 150] }
];
export const TotalEarningChartOptions = {
	chart: { width: 130, type: 'line', toolbar: { show: !1 } },
	colors: [theme.primary],
	stroke: {
		show: !0,
		curve: 'smooth',
		lineCap: 'butt',
		colors: [theme.success],
		width: 2,
		dashArray: 0
	},
	xaxis: {
		axisBorder: { show: !1 },
		labels: { show: !1 },
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
	},
	yaxis: { labels: { show: !1 } },
	grid: { show: !1 },
	tooltip: { enabled: !1 }
};

/** Budget Expense Chart series and options used in dashboard project budget page  *
 *  added in v1.2.0
 */

export const BudgetExpenseChartSeries = [
	{ name: 'Series 1', data: [90, 32, 30, 40, 100, 20] }
];
export const BudgetExpenseChartOptions = {
	stroke: { show: !0, width: 2, colors: [theme.primary], dashArray: 0 },
	fill: { colors: '#754ffe', opacity: 0.4 },
	colors: [theme.primary],
	dataLabels: { enabled: !0, background: { enabled: !0, borderRadius: 2 } },
	chart: { height: 350, type: 'radar', toolbar: { show: !1 } },
	plotOptions: {
		radar: {
			size: 150,
			offsetX: 0,
			offsetY: 0,
			polygons: {
				strokeColors: theme.borderColor,
				strokeWidth: 1,
				connectorColors: theme.borderColor,
				fill: { colors: void 0 }
			}
		}
	},
	xaxis: {
		categories: [
			'Design',
			'SaaS Services',
			'Development',
			'SEO',
			'Entertainment',
			'Marketing'
		],
		labels: {
			show: !0,
			style: {
				colors: [
					theme.gray400,
					theme.gray400,
					theme.gray400,
					theme.gray400,
					theme.gray400,
					theme.gray400
				],
				fontSize: '14px',
				fontFamily: 'Inter',
				fontWeight: 600
			}
		}
	},
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					height: 400
				}
			}
		},
		{
			breakpoint: 5000,
			options: {
				chart: {
					height: 350
				}
			}
		}
	]
};

/** overall progress chart  Series and options used in Front side Instructor Dashboard page
 *   added in v1.2.0 for /dashboard/projects/single/overview page
 */
export const OverallProgressChartSeries = [75];
export const OverallProgressChartOptions = {
	chart: { height: 350, type: 'radialBar', toolbar: { show: false } },
	colors: [theme.primary, theme.warning],
	plotOptions: {
		radialBar: {
			startAngle: -135,
			endAngle: 225,
			hollow: {
				margin: 0,
				size: '70%',
				background: theme.white,
				image: undefined,
				imageOffsetX: 0,
				imageOffsetY: 0,
				position: 'front',
				dropShadow: {
					enabled: true,
					top: 3,
					left: 0,
					blur: 4,
					opacity: 0.24
				}
			},
			track: {
				background: theme.white,
				strokeWidth: '67%',
				margin: 0, // margin is in pixels
				dropShadow: {
					enabled: true,
					top: -3,
					left: 0,
					blur: 4,
					opacity: 0.35
				}
			},

			dataLabels: {
				showOn: 'always',
				name: {
					show: false
				},
				value: {
					formatter: function (val) {
						return parseInt(val) + '%';
					},
					color: theme.dark,
					fontSize: '48px',
					fontWeight: '700',
					show: true
				}
			}
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			type: 'horizontal',
			shadeIntensity: 0.5,
			gradientToColors: [theme.warning],
			inverseColors: false,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
	stroke: {
		lineCap: 'round'
	}
};

/** task summary chart series and options used in dashboard page
 *   added in v1.2.0 for /dashboard/projects/single/task page
 */
export const TaskSummaryChartSeries = [
	{
		name: 'Closed',
		type: 'column',
		data: [12, 18, 20, 32, 19, 25, 30]
	},
	{
		name: 'New',
		type: 'line',
		data: [20, 32, 28, 50, 38, 35, 49]
	}
];
export const TaskSummaryChartOptions = {
	chart: { height: 350, type: 'line', toolbar: { show: false } },
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '40%',
			borderRadius: 5
		}
	},
	markers: { colors: [theme.dark], fillColor: theme.gray200 },
	colors: [theme.lightPrimary, theme.primary],
	legend: { show: false },
	stroke: { width: [0, 4], colors: [theme.lightPrimary] },
	dataLabels: { enabled: true, enabledOnSeries: [1] },
	labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	xaxis: {
		labels: {
			style: {
				fontSize: '13px',
				fontWeight: 400,
				colors: theme.gray500,
				fontFamily: 'inter'
			}
		},
		axisBorder: {
			show: !0,
			color: theme.borderColor,
			height: 0,
			width: '100%',
			offsetX: 0,
			offsetY: 0
		},
		axisTicks: {
			show: !0,
			borderType: 'solid',
			color: theme.borderColor,
			height: 6,
			offsetX: 0,
			offsetY: 0
		}
	},
	yaxis: {
		labels: {
			style: {
				fontSize: '13px',
				fontWeight: 400,
				colors: theme.gray500,
				fontFamily: 'inter'
			}
		}
	},
	grid: { borderColor: theme.borderColor }
};

/** task completion status chart series and options used in dashboard page
 *   added in v1.2.0 for /dashboard/projects/single/task page
 */
export const TaskStatusChartSeries = [75, 25];
export const TaskStatusChartOptions = {
	dataLabels: { enabled: false },
	labels: ['Completed', 'Incomplete'],
	colors: [theme.primary, theme.info],
	chart: { width: 480, type: 'donut' },
	plotOptions: { pie: { expandOnClick: !1, donut: { size: '75%' } } },
	legend: {
		position: 'bottom',
		fontFamily: 'inter',
		fontWeight: 500,
		fontSize: '14px',
		markers: {
			width: 8,
			height: 8,
			strokeWidth: 0,
			strokeColor: theme.white,
			fillColors: undefined,
			radius: 12,
			customHTML: undefined,
			onClick: undefined,
			offsetX: -2,
			offsetY: 1
		},
		itemMargin: {
			horizontal: 8,
			vertical: 0
		}
	},
	tooltip: {
		theme: 'light',
		marker: {
			show: true
		},
		x: {
			show: false
		}
	},
	states: { hover: { filter: { type: 'none' } } },
	stroke: { show: !0, colors: [theme.transparent] },
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					height: 300
				}
			}
		},
		{
			breakpoint: 5000,
			options: {
				chart: {
					height: 380
				}
			}
		}
	]
};

/** task by sections chart series and options used in dashboard page
 *   added in v1.2.0 for /dashboard/projects/single/task page
 */
export const TaskSectionChartSeries = [44, 65, 89, 75];
export const TaskSectionChartOptions = {
	series: [44, 65, 89, 75],
	chart: {
		height: 350,
		type: 'radialBar'
	},
	legend: {
		show: true,
		fontSize: '14px',
		fontFamily: 'Inter',
		fontWeight: 500,
		position: 'bottom',
		itemMargin: {
			horizontal: 8,
			vertical: 0
		},
		labels: {
			colors: theme.gray500,
			useSeriesColors: false
		},
		markers: {
			width: 8,
			height: 8,
			offsetY: 1,
			offsetX: -2
		}
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {},
				value: {
					fontSize: '24px',
					fontWeight: 600,
					formatter: function (val) {
						return val;
					}
				},
				total: {
					show: true,
					label: 'Total',
					fontSize: '12px',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return 273;
					}
				}
			},
			track: {
				background: theme.borderColor,
				margin: 10
			}
		}
	},
	labels: ['Design', 'Frontend', 'Development', 'Issues'],
	colors: [theme.primary, theme.success, theme.info, theme.warning]
};

export const ChartData = [
	TrafficChartSeries,
	TrafficChartOptions,
	EarningsChartSeries,
	EarningsChartOptions,

	SessionChartSeries,
	SessionChartOptions,
	ActiveUserChartSeries,
	ActiveUserChartOptions,
	TrafficChannelChartSeries,
	TrafficChannelChartOptions,
	OperatingSystemChartSeries,
	OperatingSystemChartOptions,

	UserChartSeries,
	UserChartOptions,
	VisitorChartSeries,
	VisitorChartOptions,
	BounceChartSeries,
	BounceChartOptions,
	AverageVisitTimeChartSeries,
	AverageVisitTimeChartOptions,

	OrderColumnChartSeries,
	OrderColumnChartOptions,

	PayoutChartSeries,
	PayoutChartOptions,

	TotalEarningChartSeries,
	TotalEarningChartOptions,

	BudgetExpenseChartSeries,
	BudgetExpenseChartOptions,

	OverallProgressChartSeries,
	OverallProgressChartOptions,

	TaskSummaryChartSeries,
	TaskSummaryChartOptions,

	TaskStatusChartSeries,
	TaskStatusChartOptions,

	TaskSectionChartSeries,
	TaskSectionChartOptions
];

export default ChartData;
