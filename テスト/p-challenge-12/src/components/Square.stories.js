import React from "react";
import { action } from "@storybook/addon-actions";
import Square from "./Square";

export default {
  title: "Square",
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: null,
  onClick: action("clicked"),
};

export const X = Template.bind({});
X.args = {
  ...Default.args,
  value: "X",
};

export const O = Template.bind({});
O.args = {
  ...Default.args,
  value: "O",
};

export const Triange = Template.bind({});
Triange.args = {
  ...Default.args,
  value: "△",
};
