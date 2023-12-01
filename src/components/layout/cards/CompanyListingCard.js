// import node module libraries
import { Card, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CompanyListingCard = (props) => {
	const { item } = props;
	return (
		<Card className="card-bordered mb-4 card-hover cursor-pointer">
			<Card.Body>
				<div>
					<div className="d-lg-flex">
						<div className="mb-3 mb-lg-0">
							<Image
								src={item.logo}
								alt={item.company}
								className="icon-shape border rounded-3 icon-xxl"
							/>
						</div>
						<div className="w-100 ms-lg-4">
							<div className="d-flex justify-content-between mt-1">
								<div>
									<h3 className="mb-1">
										<Link
											to="/marketing/jobs/company/about/"
											className="text-inherit"
										>
											{item.company}
										</Link>
									</h3>
									<div>
										<span className="text-dark fw-medium">
											{item.rating}{' '}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="10"
												height="10"
												fill="currentColor"
												className="bi bi-star-fill text-warning align-baseline"
												viewBox="0 0 16 16"
											>
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
										</span>
										<span className="ms-0">({item.totalReviews} Reviews)</span>
									</div>
								</div>
								<div>
									<Link to="#" className="btn btn-outline-primary btn-sm">
										Follow
									</Link>
								</div>
							</div>
							<div>
								<div className="mt-4">
									<Row className="g-2">
										<Col md={6} xs={12}>
											<div>
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
														fill="currentColor"
														className="bi bi-clock-fill text-muted align-text-bottom"
														viewBox="0 0 16 16"
													>
														<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
													</svg>
												</span>
												<span className="ms-1">{item.experience}</span>
											</div>
										</Col>
										<Col md={6} xs={12}>
											<div>
												{' '}
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
														fill="currentColor"
														className="bi bi-geo-alt-fill text-muted align-text-bottom"
														viewBox="0 0 16 16"
													>
														<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
													</svg>
												</span>
												<span className="ms-1">{item.location}</span>
											</div>
										</Col>
										<Col md={6} xs={12}>
											<div>
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
														fill="currentColor"
														className="bi bi-building  text-muted align-text-bottom"
														viewBox="0 0 16 16"
													>
														<path
															fillRule="evenodd"
															d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
														/>
														<path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
													</svg>
												</span>
												<span className="ms-1">{item.type}</span>
											</div>
										</Col>
										<Col md={6} xs={12}>
											<div>
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="bi bi-people-fill text-muted align-text-bottom"
														viewBox="0 0 16 16"
													>
														<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
														<path
															fillRule="evenodd"
															d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
														/>
														<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
													</svg>
												</span>
												<span className="ms-1">
													{item.employees} Employees ({item.country})
												</span>
											</div>
										</Col>
									</Row>
									<div>
										<div className="mt-3">
											<p className="mb-0">{item.briefInfo}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CompanyListingCard;
