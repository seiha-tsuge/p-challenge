import React from "react";
import Game from "./Game";

export default {
  title: "Game",
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const GameDefault = Template.bind({});
GameDefault.args = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};

export const GameDraw = Template.bind({});
GameDraw.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
    { squares: ["X", null, null, null, null, null, null, null, null] },
  ],
  stepNumber: 0,
  xIsNext: true,
};
