import React from "react";
import { action } from "@storybook/addon-actions";
import Board from "./Board";

export default {
  title: "Board",
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
  onClick: action("clicked"),
};

export const AllX = Template.bind({});
AllX.args = {
  ...Default.args,
  squares: Array(9).fill("X"),
};

export const AllO = Template.bind({});
AllO.args = {
  ...Default.args,
  squares: Array(9).fill("O"),
};

export const AllTryangle = Template.bind({});
AllTryangle.args = {
  ...Default.args,
  squares: Array(9).fill("△"),
};
