import { v4 as uuid } from 'uuid';

// import media files
import Dropbox from 'assets/images/brand/dropbox-logo.svg';
import HubSpot from 'assets/images/brand/hubspot.svg';
import Drive from 'assets/images/brand/google-drive.svg';
import Slack from 'assets/images/brand/slack-logo.svg';
import Zapier from 'assets/images/brand/zapier.svg';

export const AppIntegrationData = [
	{
		id: uuid(),
		applogo: Dropbox,
		appname: 'Dropbox',
		content: 'Bring your files and cloud content together.'
	},
	{
		id: uuid(),
		applogo: HubSpot,
		appname: 'HubSpot',
		content: 'Full platform of marketing, sales, other service.'
	},
	{
		id: uuid(),
		applogo: Drive,
		appname: 'Drive',
		content: 'Integrates seamlessly with Docs, Sheets...'
	},
	{
		id: uuid(),
		applogo: Slack,
		appname: 'Slack',
		content: 'New way to communicate with your team'
	},
	{
		id: uuid(),
		applogo: Zapier,
		appname: 'Zapier',
		content: 'Streamline work with automation today.'
	},
	{
		id: uuid(),
		applogo: HubSpot,
		appname: 'HubSpot',
		content: 'Full platform of marketing,sales, other service.'
	}
];

export default AppIntegrationData;
