import type { Meta, StoryObj } from "@storybook/react";
import ArchiveViewer from "./ArchiveViewer";

const meta = {
  title: "Components/ArchiveViewer",
  component: ArchiveViewer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ArchiveViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    document: {
      id: "123",
      filePath: "file.txt",
    },
  },
};
