import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobsSearched, queryUser } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const isLoading = useSelector(
    (state) => state.jobs.isLoading
  );
  const hasError = useSelector(
    (state) => state.jobs.hasError
  );
  const errorMessage = useSelector(
    (state) => state.jobs.errorMessage
  );
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(queryUser(query));
  };
  useEffect(() => {
    dispatch(jobsSearched());
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites">
            {" "}
            Le aziende salvate precedentemente{" "}
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading && <Spinner animation="border" />}
          {hasError && !isLoading && (
            <Alert variant="danger">{errorMessage}</Alert>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
