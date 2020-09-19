import React, { useEffect } from "react";
import axios from "axios";
import FairshareCardGrid from "./components/FairshareCardGrid";

const Fairshare = (props) => {
  const [fairshareData, setFairshareData] = React.useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASENAME + "/api/fairshareData")
      .then((userFairshareData) => {
        setFairshareData(userFairshareData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <FairshareCardGrid fairshareData={fairshareData} />;
};

export default Fairshare;
