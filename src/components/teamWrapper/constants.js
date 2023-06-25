import { Popover } from "antd";

import { ReactComponent as DeathIcon } from "../../assets/svg/skull.svg";
import MoreInfo from "../moreInfo/moreInfo";

export const getTableHeaders = (isTeamMates) => [
  {
    title: 'Player',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    render: (text, player) => (
      <Popover content={<MoreInfo player={player} isTeamMates={isTeamMates} />} trigger="hover">
        <p className="team-wrapper-body__table-name">{text} </p>
      </Popover>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 60,
    key: 'status',
    render: text => text === 'dead' ? <DeathIcon /> : null,
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    width: 60,
    render: text => text,
  },
]
