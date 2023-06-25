import { playersTeam1, playersTeam2 } from "../../constants/mockData";
import TeamWrapper from "../teamWrapper/teamWrapper";

import './gameResults.scss';

const GameResults = () => (
  <div className="game-results__container">
    <h1>Match results</h1>

    <div className="game-results__body">
      <TeamWrapper isTeamMates>
        <TeamWrapper.Header isTeamMates isChampion />
        <TeamWrapper.Body isTeamMates team={playersTeam1} />
      </TeamWrapper>

      <TeamWrapper>
        <TeamWrapper.Header />
        <TeamWrapper.Body team={playersTeam2} />
      </TeamWrapper>
    </div>
  </div>
)

export default GameResults;
