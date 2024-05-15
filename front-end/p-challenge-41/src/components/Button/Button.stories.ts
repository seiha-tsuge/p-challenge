import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Apply: Story = {
  args: {
    children: "応募する",
    size: "medium",
  },
};

export const Delete: Story = {
  args: {
    children: "削除する",
    color: "red",
  },
};

export const DeleteDisabled: Story = {
  args: {
    children: "削除する",
    disabled: true,
  },
};
