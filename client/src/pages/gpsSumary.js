import * as React from "react";
import SummaryTable from "../components/summaryTable";
import { API } from "../config/api";

const Summary = () => {
  const [gps, setGps] = React.useState();
  const getGps = async () => {
    try {
      const response = await API.get("/devices");
      setGps(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getGps();
  }, []);

  return (
    <div
      className='bg-black d-flex align-items-center row'
      style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{ height: "600px" }}
        className='border border-white col-10 rounded-5 m-auto row p-5'>
        <div className='text-light'>
          <h2 className='mb-5'>GPS Summary</h2>
          <div>
            <SummaryTable data={gps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
