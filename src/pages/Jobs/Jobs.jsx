import { Col, Container, Row } from "react-bootstrap";

import styles from "./jobs.module.scss";
const { Job_title, job_Info, employee_type, employee_btn, job } = styles;

const Jobs = () => {
  const jobListings = new Array(5).fill(null);

  return (
    <div className="pt-5">
      <Container>
        <h2 className={`text-center fs-2 fw-bold mb-5 ${Job_title}`}>
          Jobs You May Be Interested In
        </h2>
        <Row className="justify-content-center">
          <Col xl={8}>
            {jobListings.map((_, index) => (
              <div key={index} className={`${job} p-3 mb-4`}>
                <div className={employee_type}>
                  <p>Full Time</p>
                </div>
                <div className={`${job_Info} d-flex gap-3 mb-4`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla repellat cum impedit nemo obcaecati suscipit enim! Ex
                    eos itaque nobis?
                  </p>
                  <button className={employee_btn}>Apply Now</button>
                </div>
                <div className="d-flex gap-2">
                  <div className={employee_type}>
                    <p>Job name</p>
                  </div>
                  <div className={employee_type}>
                    <p>Salary</p>
                  </div>
                  <div className={employee_type}>
                    <p>Location</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
