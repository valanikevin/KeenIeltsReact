// import node module libraries
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import bootstrap icons
import { CalendarCheck, Clock } from 'react-bootstrap-icons';

const WebinarCard = props => {
  const { item } = props;
  return (
    <Card className="mb-4 mb-xl-0 card-hover border">
      <Link to="#!">
        <Image src={item.image} alt="webinar-1"
          className="img-fluid w-100 rounded-top-3" />
      </Link>
      <Card.Body>
        <h3 className="mb-4 text-truncate">
          <Link to="#!" className="text-inherit ">{item.title}</Link>
        </h3>
        <div className="mb-4">
          <div className="mb-3 lh-1">
            <span className="me-1"><CalendarCheck size={14} /></span>
            <span>{item.date}</span>
          </div>
          <div className="lh-1">
            <span className="me-1"><Clock size={14} /></span>
            <span>{item.time}</span>
          </div>
        </div>
        <Link to="#!" className="btn btn-light-primary text-primary">Register Now</Link>
      </Card.Body>
    </Card>
  )
}

export default WebinarCard