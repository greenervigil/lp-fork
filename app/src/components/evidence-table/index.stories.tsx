import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
    title: 'App / components / tables / Evidence',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Evidence: Story = {
    args: {}
};
