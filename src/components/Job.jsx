import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTofavourites,
  removeFromfavourites,
} from "../redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.content || []
  );

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{
        border: "1px solid #00000033",
        borderRadius: 4,
      }}
    >
      <Col xs={3} className="d-flex align-items-center">
        <Link to={`/${data.company_name}`}>
          {data.company_name}
        </Link>
        {favorites.includes(data.company_name) ? (
          <Button
            variant="btn"
            onClick={() => {
              dispatch(
                removeFromfavourites(data.company_name)
              );
            }}
          >
            <p className={"text-danger m-0"}>
              <i className={"bi bi-heart-fill"}></i>
            </p>
          </Button>
        ) : (
          <Button
            variant="btn"
            onClick={() => {
              dispatch(addTofavourites(data.company_name));
            }}
          >
            <p className={"text-black m-0"}>
              <i className={"bi bi-heart"}></i>
            </p>
          </Button>
        )}
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
