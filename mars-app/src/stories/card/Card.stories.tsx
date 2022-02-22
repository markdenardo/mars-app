import React, { FC } from "react";
<<<<<<< HEAD
import Card, { CardProps } from ".";
=======
import Card, { CardProps } from "./Card";
>>>>>>> 4cd5bf01edb379069a91c19d1ab9c44692b43348

export default {
  title: "Components/Card",
  component: Card,
};

<<<<<<< HEAD
 const mockData = {
=======
const mockData = {
>>>>>>> 4cd5bf01edb379069a91c19d1ab9c44692b43348
  title: "A Picture",
  url: "https://picsum.photos/id/237/750/600",
  copyright: "Joe",
  explanation: "here is some text",
};
<<<<<<< HEAD

const Template: FC<CardProps> = args => <Card {...args}/> 

export const CardLight = Template.bind({});
CardLight.args = {
    article: mockData
};
=======

const Template: FC<CardProps> = (args) => <Card {...args} />;

// export const CardLight = Template.bind({});
// CardLight.args = {
//   article: mockData,
// };
>>>>>>> 4cd5bf01edb379069a91c19d1ab9c44692b43348
