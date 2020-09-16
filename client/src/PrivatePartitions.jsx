import React, { useEffect } from "react";
import axios from "axios";
import PartitionCardGrid from "./components/PartitionCardGrid";

const PrivatePartitions = (props) => {
  const [partitionData, setPartitionData] = React.useState([]);

  useEffect(() => {
    axios
      .get("/pun/dev/hpc_2/api/user")
      .then((user) =>
        axios
          .get("/pun/dev/hpc_2/api/privatePartitionData")
          .then((partitionData) => {
            const userPartitionData = partitionData.data.filter(
              (partitionObject) =>
                partitionObject.users.indexOf(user.data.username) !== -1
            );
            // console.log(user.data.username);
            // console.log(partitionData);
            // console.log(userPartitionData);
            setPartitionData(userPartitionData);
          })
      )
      .catch(console.log);
  }, []);

  return <PartitionCardGrid partitionData={partitionData} />;
};

export default PrivatePartitions;
