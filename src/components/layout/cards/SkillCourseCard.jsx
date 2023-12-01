// import node module libraries
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SkillCourseCard = props => {
    const { item } = props;
    return (
        <Card className="mb-4 card-hover border">
            <Link to="#!">
                <Image src={item.image} alt="writing" className="img-fluid w-100 rounded-top-3" />
            </Link>
            <Card.Body>
                <h4 className="mb-3">
                    <Link to="#!" className="text-inherit">{item.title}</Link>
                </h4>
                <div className="d-flex align-items-center mb-5 lh-1">
                    <div>
                        <span className="text-inherit fw-semibold">{item.rating.toFixed(1)}</span>
                        <span className="ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                            fill="var(--geeks-success)" className="bi bi-star-fill align-baseline" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> ({item.votes})
                        </span>
                    </div>

                    <div className=" mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="var(--geeks-gray-400)" className="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg></div>
                    <div>
                        <span className="text-inherit fw-semibold me-1">{item.duration}</span> {item.durationUnit}
                    </div>

                </div>
                <Link to="#!">Enroll Today <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg></span></Link>
            </Card.Body>
        </Card>
    )
}

export default SkillCourseCard