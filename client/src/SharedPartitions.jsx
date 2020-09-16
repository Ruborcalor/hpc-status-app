import React from "react";
import PartitionCardGrid from "./components/PartitionCardGrid";

const partitionData = [
  {
    name: "Public Partition 1",
    nodes: {
      active: 400,
      draining: 159,
      free: 252,
    },
    processors: {
      active: 13252,
      draining: 2000,
      free: 7748,
    },
    jobs: {
      running: 1325,
      queued: 200,
      blocked: 12,
    },
  },
  {
    name: "Public Partition 2",
    nodes: {
      active: 500,
      draining: 159,
      free: 252,
    },
    processors: {
      active: 13252,
      draining: 2000,
      free: 7748,
    },
    jobs: {
      running: 1325,
      queued: 200,
      blocked: 12,
    },
  },
];

const SharedPartitions = (props) => {
  return (
    <PartitionCardGrid partitionData={partitionData}/>
  );
};

export default SharedPartitions;
