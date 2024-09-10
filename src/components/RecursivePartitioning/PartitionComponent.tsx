"use client";
import { useState } from "react";
import { getRandomColor, Partition } from "./RecursivePartitioning";
import { Rnd } from "react-rnd";
const PartitionComponent = () => {
  const [partitions, setPartitions] = useState<Partition[]>([
    {
      id: 1,
      color: getRandomColor(),
      width: 500,
      height: 500,
      x: 0,
      y: 0,
      isHorizontal: false,
    },
  ]);
  const handleSplit = (id: number, isVertical: boolean) => {
    setPartitions((prev) => {
      const partition = prev.find((p) => p.id === id);
      if (!partition) return prev;

      const newPartition: Partition = {
        id: prev.length + 1,
        color: getRandomColor(),
        width: isVertical ? partition.width / 2 : partition.width,
        height: isVertical ? partition.height : partition.height / 2,
        x: partition.x + (isVertical ? partition.width / 2 : 0),
        y: partition.y + (!isVertical ? partition.height / 2 : 0),
        isHorizontal: !isVertical,
      };

      const updatedPartition = {
        ...partition,
        width: isVertical ? partition.width / 2 : partition.width,
        height: isVertical ? partition.height : partition.height / 2,
      };

      return [
        ...prev.filter((p) => p.id !== id),
        updatedPartition,
        newPartition,
      ];
    });
  };

  const handleRemove = (id: number) => {
    setPartitions((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      {partitions.map((partition) => (
        <Rnd
          key={partition.id}
          size={{ width: partition.width, height: partition.height }}
          position={{ x: partition.x, y: partition.y }}
          onDragStop={(e, d) => {
            setPartitions((prev) =>
              prev.map((p) =>
                p.id === partition.id ? { ...p, x: d.x, y: d.y } : p
              )
            );
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setPartitions((prev) =>
              prev.map((p) =>
                p.id === partition.id
                  ? {
                      ...p,
                      width: ref.offsetWidth,
                      height: ref.offsetHeight,
                      ...position,
                    }
                  : p
              )
            );
          }}
        >
          <div
            className="relative flex justify-center items-center"
            style={{
              backgroundColor: partition.color,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <button
                className="px-2 py-1 text-sm bg-blue-500 text-white"
                onClick={() => handleSplit(partition.id, true)}
              >
                V
              </button>
              <button
                className="px-2 py-1 text-sm bg-green-500 text-white"
                onClick={() => handleSplit(partition.id, false)}
              >
                H
              </button>
              <button
                className="px-2 py-1 text-sm bg-red-500 text-white"
                onClick={() => handleRemove(partition.id)}
              >
                X
              </button>
            </div>
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default PartitionComponent;
