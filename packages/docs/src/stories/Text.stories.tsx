import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente excepturi, adipisci accusamus cupiditate incidunt eaque veniam vero ipsam repudiandae tempore libero, aspernatur mollitia iste odio ullam necessitatibus, sunt quaerat.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
