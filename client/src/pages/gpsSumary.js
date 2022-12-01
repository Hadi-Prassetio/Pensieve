import React from "react";
import SummaryTable from "../atoms/summaryTable";

const Summary = () => {
  return (
    <div
      className="bg-black d-flex align-items-center row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        style={{ height: "600px" }}
        className="border border-white col-10 rounded-5 m-auto row p-5"
      >
        <div className="text-light">
          <h2 className="mb-5">GPS Summary</h2>
          <div>
            <SummaryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
