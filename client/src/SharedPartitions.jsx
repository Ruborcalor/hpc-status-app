import React, { useEffect } from "react";
import axios from 'axios';
import PartitionCardGrid from "./components/PartitionCardGrid";

const SharedPartitions = (props) => {
  const [partitionData, setPartitionData] = React.useState([]);

  useEffect(() => {
    axios.get('/api/sharedPartitionData')
      .then(( partitionData ) => {
        console.log(partitionData);
        setPartitionData(partitionData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios.get('/user')
  //     .then(({ username }) => {
  //       axios.get()
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  return (
    <PartitionCardGrid partitionData={partitionData}/>
  );
};

export default SharedPartitions;

