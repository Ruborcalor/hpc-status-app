import React from "react";
import PartitionCardGrid from "./components/PartitionCardGrid";

const partitionData = [
  {
    name: "Private Partition 1",
    nodes: {
      active: 200,
      draining: 459,
      free: 552,
    },
    processors: {
      active: 20987,
      draining: 2000,
      free: 1758,
    },
    jobs: {
      running: 100,
      queued: 200,
      blocked: 100,
    },
  },
  {
    name: "Private Partition 2",
    nodes: {
      active: 600,
      draining: 859,
      free: 952,
    },
    processors: {
      active: 23252,
      draining: 1000,
      free: 1748,
    },
    jobs: {
      running: 325,
      queued: 200,
      blocked: 92,
    },
  },
];

const PrivatePartitions = (props) => {
  return (
    <PartitionCardGrid partitionData={partitionData}/>
  );
};

export default PrivatePartitions;
