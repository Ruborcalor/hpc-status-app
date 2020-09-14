import React from "react";
import StorageCardGrid from "./components/StorageCardGrid";

const storageData = [
  {
    name: "Homefolder",
    path: "/n/academic_homes/g_34166/u_316301_g_34166",
    block: {
      limit: 1000,
      usage: 932
    },
    file: {
      limit: 400,
      usage: 274
    }
  },
  {
    name: "Global Scratch",
    path: "/n/scratch",
    block: {
      limit: 5000,
      usage: 932
    },
    file: {
      limit: 500,
      usage: 300
    }
  },
];

const Storage = (props) => {
  return (
    <StorageCardGrid storageData={storageData}/>
  );
};

export default Storage;

