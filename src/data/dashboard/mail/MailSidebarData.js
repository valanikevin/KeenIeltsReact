// import MDI icons
import Icon from '@mdi/react';
import { mdiLabelVariant, mdiLabel } from '@mdi/js';

const MailSidebarData = [
	{
		id: 1,
		label: 'Inbox',
		icon: <i className="fe fe-inbox me-2 "></i>,
		link: '/dashboard/mail',
		counter: 3
	},
	{
		id: 2,
		label: 'Sent',
		icon: <i className="fe fe-send me-2 "></i>,
		link: '#',
		counter: 5
	},
	{
		id: 3,
		label: 'Drafts',
		link: '/dashboard/mail-draft',
		icon: <i className="fe fe-mail me-2 "></i>
	},
	{
		id: 4,
		label: 'Spam',
		icon: <i className="fe fe-alert-circle me-2 "></i>,
		link: '#',
		counter: 1
	},
	{
		id: 5,
		label: 'Trash',
		icon: <i className="fe fe-trash-2 me-2 "></i>,
		link: '#'
	},
	{
		id: 6,
		label: 'Archive',
		icon: <i className="fe fe-archive me-2 "></i>,
		link: '#'
	},
	{
		id: 7,
		label: 'Starred',
		icon: <i className="fe fe-star me-2"></i>,
		link: '#',
		counter: 1
	},
	{
		id: 8,
		label: 'Important',
		icon: <Icon path={mdiLabelVariant} size={0.6} className="me-2" />,
		link: '#'
	},
	{
		id: 9,
		label: 'Personal',
		icon: <Icon path={mdiLabel} size={0.6} className="text-success me-2" />,
		link: '#'
	}
];

export default MailSidebarData;
