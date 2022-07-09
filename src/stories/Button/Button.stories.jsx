import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: "primary",
  size: 'm',
  elevation: true,
  backgroundColor: "#1e86fd",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: "secondary",
  size: 'm',
  elevation: true,
  backgroundColor: "transparent",
};