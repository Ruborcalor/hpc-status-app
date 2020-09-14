import React from "react";
import FairshareCardGrid from "./components/FairshareCardGrid";

const fairshareData = [
  {
    name: "Lab 1",
    fairshare: 0.7,
    fairshareTableData: [
      {
        user: "mwesson",
        usage: 9688438,
      },
      {
        user: "trhone",
        usage: 2423585
      },
      {
        user: "saydjari",
        usage: 2234131
      },
      {
        user: "rualanxue",
        usage: 40678
      },
      {
        user: "mwesson",
        usage: 9688438,
      },
      {
        user: "trhone",
        usage: 2423585
      },
      {
        user: "saydjari",
        usage: 2234131
      },
      {
        user: "rualanxue",
        usage: 40678
      }
    ]
  },
  {
    name: "Lab 2",
    fairshare: 0.2,
    fairshareTableData: [
      {
        user: "mwesson",
        usage: 9688438,
      },
      {
        user: "trhone",
        usage: 2423585
      },
      {
        user: "saydjari",
        usage: 2234131
      },
      {
        user: "rualanxue",
        usage: 40678
      }
    ]
  },
];

const Fairshare = (props) => {
  return (
    <FairshareCardGrid fairshareData={fairshareData}/>
  );
};

export default Fairshare;

