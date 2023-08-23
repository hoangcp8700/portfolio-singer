---
to: src/containers/<%= h.inflection.capitalize(name) %>/index.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';

import <%= h.changeCase.pascal(name) %>Container from '.';

const meta = {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>Container,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
