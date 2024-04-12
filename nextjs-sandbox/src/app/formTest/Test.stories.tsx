import type { Meta, StoryObj } from "@storybook/react";
import Test from "./Test";

const meta = {
  title: "Test",
  component: Test,
  tags: ["autodocs"],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof Test>;

export const Normal: Story = {
  render: () => <Test text={"yaaaaaaaaaaaaaaa"} />,
};
Normal.storyName = "Test Component";
