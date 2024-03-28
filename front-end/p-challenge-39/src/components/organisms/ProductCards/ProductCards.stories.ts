import type { Meta, StoryObj } from '@storybook/react';

import { ProductCards } from './ProductCards';

const meta: Meta<typeof ProductCards> = {
  title: 'Organisms/ProductCards',
  component: ProductCards,
};

export default meta;
type Story = StoryObj<typeof ProductCards>;

export const Default: Story = {};
