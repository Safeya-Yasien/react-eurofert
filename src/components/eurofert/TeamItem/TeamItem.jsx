import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TEAM_IMAGES from "../../../assets/team";

import styles from "./teamItem.module.scss";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const { team_item, info, social } = styles;

const TeamItem = ({ name, role, image }) => {
  return (
    <div className={team_item}>
      <div>
        <img src={TEAM_IMAGES[image]} alt="team-1" />
      </div>
      <div className={info}>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <div className={social}>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  );
};

export default TeamItem;
