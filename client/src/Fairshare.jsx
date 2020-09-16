import React, { useEffect } from "react";
import axios from "axios";
import FairshareCardGrid from "./components/FairshareCardGrid";

const Fairshare = (props) => {
  const [fairshareData, setFairshareData] = React.useState([]);

  useEffect(() => {
    axios
      .get("/pun/dev/hpc_2/api/user")
      .then((user) =>
        axios.get("/pun/dev/hpc_2/api/fairshareData").then((fairshareData) => {
          const userFairshareData = fairshareData.data.filter(
            (fairshareObject) =>
              fairshareObject.users.indexOf(user.data.username) !== -1
          );
          setFairshareData(userFairshareData);
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <FairshareCardGrid fairshareData={fairshareData} />;
};

export default Fairshare;
