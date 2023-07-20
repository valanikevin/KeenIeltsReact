import { v4 as uuid } from 'uuid';

// import media files
import StripeLogo from 'assets/images/brand/gray-logo-stripe.svg';
import AirbnbLogo from 'assets/images/brand/gray-logo-airbnb.svg';
import DiscordLogo from 'assets/images/brand/gray-logo-discord.svg';
import IntercomLogo from 'assets/images/brand/gray-logo-intercom.svg';
import PinterestLogo from 'assets/images/brand/gray-logo-pinterest.svg';
import NetflixLogo from 'assets/images/brand/gray-logo-netflix.svg';

const LogoList2 = [
	{
		id: uuid(),
		logoimage: StripeLogo
	},
	{
		id: uuid(),
		logoimage: AirbnbLogo
	},
	{
		id: uuid(),
		logoimage: DiscordLogo
	},
	{
		id: uuid(),
		logoimage: IntercomLogo
	},
	{
		id: uuid(),
		logoimage: PinterestLogo
	},
	{
		id: uuid(),
		logoimage: NetflixLogo
	}
];

export default LogoList2;
