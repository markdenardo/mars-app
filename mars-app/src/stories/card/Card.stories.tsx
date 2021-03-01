import React, { FC } from "react";
import App from "../../App";
import Card, { CardProps } from '.';

export default {
  title: "Components/cards/Cards",
  component: Card,
};

const Template: FC<CardProps> = (args) => <Card {...args} />;

// export const CardLight = Template.bind({});
// CardLight.args = {

//   styleType: "light",
// };