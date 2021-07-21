import React, { FC } from "react";
import Card, { CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
};

 const mockData = {
  title: "A Picture",
  url: "https://picsum.photos/id/237/750/600",
  copyright: "Joe",
  explanation: "here is some text",
};

const Template: FC<CardProps> = args => <Card {...args}/> 

export const CardLight = Template.bind({});
CardLight.args = {
    article: mockData
};