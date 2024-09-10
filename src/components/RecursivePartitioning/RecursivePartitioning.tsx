import type { NextPage } from "next";
import PartitionComponent from "./PartitionComponent";

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export type Partition = {
  id: number;
  color: string;
  width: number;
  height: number;
  x: number;
  y: number;
  isHorizontal: boolean;
};

const RecursivePartitioning: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">
        Recursive Partitioning
      </h1>
      <div className="flex justify-center items-center">
        <PartitionComponent />
      </div>
    </div>
  );
};

export default RecursivePartitioning;
