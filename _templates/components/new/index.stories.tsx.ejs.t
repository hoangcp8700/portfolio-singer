---
to: src/components/<%= level %>/<%= h.inflection.capitalize(name) %>/index.stories.tsx
---

import type { Meta, StoryFn } from '@storybook/react';

import <%= h.changeCase.pascal(name) %> from '.';

const meta = {
  title: 'Components/<%= level %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>>;

export default meta;

const Template: StoryFn<typeof <%= h.changeCase.pascal(name) %>> = (args) => {
  return <<%= h.changeCase.pascal(name) %> {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
