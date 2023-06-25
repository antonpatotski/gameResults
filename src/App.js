import GameResults from "./components/gameResults/gameResults";
import { ConfigProvider, theme } from "antd";

const { darkAlgorithm } = theme;

function App() {
  return (
    <ConfigProvider
      theme={{ algorithm: darkAlgorithm }}
    >
      <GameResults />
    </ConfigProvider>
  )
}

export default App;
