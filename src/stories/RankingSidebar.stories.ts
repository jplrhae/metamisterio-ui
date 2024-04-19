import type { Meta, StoryObj } from "@storybook/react";
import RankingSidebar from "./RankingSidebar";

const meta = {
  title: "Components/RankingSidebar",
  component: RankingSidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof RankingSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    session: {
      users: [
        { name: "Alice", points: 100 },
        { name: "Bob", points: 50 },
        { name: "Charlie", points: 25 },
      ],
      documentId: "123",
      playerLimit: 4,
    },
  },
};
