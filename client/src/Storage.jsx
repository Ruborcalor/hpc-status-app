import React, { useEffect } from "react";
import axios from "axios";
import StorageCardGrid from "./components/StorageCardGrid";

const Storage = (props) => {
  const [storageData, setStorageData] = React.useState([]);

  useEffect(() => {
    axios
      .get("/pun/dev/hpc_2/api/user")
      .then((user) =>
        axios.get("/pun/dev/hpc_2/api/storageData").then((storageData) => {
          const userStorageData = storageData.data.filter(
            (storageObject) =>
              storageObject.users.indexOf(user.data.username) !== -1
          );
          setStorageData(userStorageData);
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <StorageCardGrid storageData={storageData} />;
};

export default Storage;
