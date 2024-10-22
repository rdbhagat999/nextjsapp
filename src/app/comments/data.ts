export type Comment = {
  id: number;
  text: string;
  userId: number;
};

export const comments: Comment[] = [
  {
    id: 1,
    text: "first comment 1",
    userId: 1,
  },
  {
    id: 2,
    text: "second comment 2",
    userId: 2,
  },
  {
    id: 3,
    text: "third comment 3",
    userId: 3,
  },
];
