import { Table } from "antd";

import { ReactComponent as ChampIcon } from "../../assets/svg/champion.svg";
import { getTableHeaders } from "./constants";

import './teamWrapper.scss';

const TeamWrapper = ({ isTeamMates, children }) => (
  <div className={`team-wrapper__container team-wrapper__container--${isTeamMates ? 'blue' : 'red'}`}>
    {children}
  </div>
)

TeamWrapper.Header = ({ isTeamMates, isChampion }) => (
  <div className="team-wrapper__header">
    <h4 className="team-wrapper-header__title">{ isTeamMates ? 'Your team' : 'Enemies team' }</h4>
    { isChampion && (<p className="team-wrapper-header__champ-banner"><ChampIcon/> Champion!</p>) }
  </div>
)

TeamWrapper.Body = ({ team, isTeamMates }) => (
  <div className="team-wrapper__body">
    <Table
      columns={getTableHeaders(isTeamMates)}
      dataSource={team}
      pagination={false}
    />
  </div>
)

export default TeamWrapper;
