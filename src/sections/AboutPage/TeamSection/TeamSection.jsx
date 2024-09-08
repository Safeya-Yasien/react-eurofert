import { Container, Row, Col } from "react-bootstrap";

import { CustomTitle, TeamItem } from "../../../components/eurofert";

import { team } from "../../../data/teamData.json";

import styles from "./team_section.module.scss";
const { our_team } = styles;

const TeamSection = () => {
  return (
    <section className={our_team}>
      <Container>
        <CustomTitle title={"team"} highlightedText={"our"} />
        <Row>
          {team &&
            team.map((teamItem) => (
              <Col md={6} lg={4} key={teamItem.id} className="mb-sm-5 mb-lg-0">
                <TeamItem {...teamItem} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
