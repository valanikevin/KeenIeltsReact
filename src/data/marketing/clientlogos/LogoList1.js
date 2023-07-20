import { v4 as uuid } from 'uuid';

// import media files
import PaypalBrandLogo from 'assets/images/brand/paypal.svg';
import NetflixBrandLogo from 'assets/images/brand/netflix.svg';
import XboxBrandLogo from 'assets/images/brand/xbox.svg';
import InstagramBrandLogo from 'assets/images/brand/instagram.svg';
import PinterestBrandLogo from 'assets/images/brand/pinterest.svg';
import StripeBrandLogo from 'assets/images/brand/stripe.svg';

const LogoList1 = [
	{
		id: uuid(),
		logoimage: PaypalBrandLogo
	},
	{
		id: uuid(),
		logoimage: NetflixBrandLogo
	},
	{
		id: uuid(),
		logoimage: XboxBrandLogo
	},
	{
		id: uuid(),
		logoimage: InstagramBrandLogo
	},
	{
		id: uuid(),
		logoimage: PinterestBrandLogo
	},
	{
		id: uuid(),
		logoimage: StripeBrandLogo
	}
];

export default LogoList1;
