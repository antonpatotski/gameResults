import { Button } from "antd";

import './moreInfo.scss';

const MoreInfo = ({ player: { kills, deaths }, isTeamMates }) => (
  <div className="more-info__container">
    <p className="more-info__row">
      <span className="more-info-row__title">Total kills:</span>
      &nbsp;
      <span className="more-info-row__value">{ kills }</span>
    </p>
    <p className="more-info__row">
      <span className="more-info-row__title">Total deaths:</span>
      &nbsp;
      <span className="more-info-row__value">{ deaths }</span>
    </p>
    { isTeamMates && (<Button size="small">Send friendship request</Button>) }
  </div>
)

export default MoreInfo;
