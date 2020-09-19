import React, { useEffect } from "react";
import axios from "axios";
import PartitionCardGrid from "./components/PartitionCardGrid";

const PrivatePartitions = (props) => {
  const [privatePartitionData, setPrivatePartitionData] = React.useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASENAME + "/api/privatePartitionData")
      .then((userPrivatePartitionData) => {
        setPrivatePartitionData(userPrivatePartitionData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <PartitionCardGrid partitionData={privatePartitionData} />;
};

export default PrivatePartitions;
