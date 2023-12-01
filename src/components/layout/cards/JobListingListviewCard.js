// import node module libraries
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

const JobListingListviewCard = (props) => {
	const { item } = props;

	return (
		<Card className="card-bordered mb-4 card-hover cursor-pointer">
			<Card.Body>
				<div>
					<div className="d-md-flex">
						<div className="mb-3 mb-md-0">
							<Image
								src={item.logo}
								alt="Geeks UI - Bootstrap 5 Template"
								className="icon-shape border rounded-circle"
							/>
						</div>
						<div className="ms-md-3 w-100 mt-3 mt-xl-1">
							<div className="d-flex justify-content-between mb-5">
								<div>
									<h3 className="mb-1 fs-4">
										<Link
											to={`/marketing/jobs/listing/${item.slug}`}
											className="text-inherit me-1"
										>
											{item.position}
										</Link>
										{item.featured && (
											<span className="badge bg-danger-soft ms-2">
												Featured Job
											</span>
										)}
									</h3>
									<div>
										<span>at {item.company} </span>
										<span className="text-dark ms-2 fw-medium">
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
									{/* bookmark */}
									<GKTippy content="Add to Bookmarks">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-bookmark text-muted bookmark"
											viewBox="0 0 16 16"
										>
											<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
										</svg>
									</GKTippy>
								</div>
							</div>
							<div className="d-md-flex justify-content-between ">
								<div className="mb-2 mb-md-0">
									<span className="me-2">
										<i className="fe fe-briefcase text-muted"></i>
										<span className="ms-1 ">{item.experience}</span>
									</span>
									<span className="me-2">
										<i className="fe fe-dollar-sign text-muted"></i>
										<span className="ms-1 ">{item.salary}</span>
									</span>
									<span className="me-2">
										<i className="fe fe-map-pin text-muted"></i>
										<span className="ms-1 ">{item.location}</span>
									</span>
								</div>
								<div>
									<i className="fe fe-clock text-muted"></i>{' '}
									<span>{item.postedOn}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default JobListingListviewCard;
