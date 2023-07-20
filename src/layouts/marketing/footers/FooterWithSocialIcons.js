// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiGithub } from '@mdi/js';

const FooterWithSocialIcons = () => {
	return (
		<Row>
			<Col xl={{ offset: 1, span: 10 }} lg={12} md={12}>
				<Row className="align-items-center mt-6 mb-4">
					<Col md={6} xl={8} lg={8} xs={8}>
						<p className="mb-0">© Geeks. 2023 Codescandy.</p>
					</Col>
					<Col
						md={6}
						xl={4}
						lg={4}
						xs={4}
						className="d-flex justify-content-end"
					>
						<Link to="#" className="text-muted text-primary-hover me-3  ">
							<Icon path={mdiFacebook} size={1} />
						</Link>
						<Link to="#" className="text-muted text-primary-hover me-3  ">
							<Icon path={mdiTwitter} size={1} />
						</Link>
						<Link to="#" className="text-muted text-primary-hover">
							<Icon path={mdiGithub} size={1} />
						</Link>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
export default FooterWithSocialIcons;
