import React, { useEffect } from "react";
import axios from 'axios';
import PartitionCardGrid from "./components/PartitionCardGrid";

const SharedPartitions = (props) => {
  const [sharedPartitionData, setSharedPartitionData] = React.useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASENAME + "/api/sharedPartitionData")
      .then((userSharedPartitionData) => {
        setSharedPartitionData(userSharedPartitionData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <PartitionCardGrid partitionData={sharedPartitionData} />;
};

export default SharedPartitions;

