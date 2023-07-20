// import node module libraries
import { Col, Row } from 'react-bootstrap';

const PageHeading = (props) => {
	const { title, description } = props;
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
					<div className="mb-3 mb-md-0">
						<h1 className="mb-1 h2 fw-bold">{title}</h1>
						<p
							className="mb-0"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</div>
			</Col>
		</Row>
	);
};

export default PageHeading;
