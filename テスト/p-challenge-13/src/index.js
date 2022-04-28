import ReactDOM from "react-dom";
import "./index.css";

import Game from "./components/Game";

ReactDOM.render(
  <Game
    history={[{ squares: Array(9).fill(null) }]}
    stepNumber={0}
    xIsNext={true}
  />,
  document.getElementById("root")
);
