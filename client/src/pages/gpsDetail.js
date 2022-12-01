import React from "react";
import { DetailTitle, Detailtable, Piechart } from "../atoms/detailTable";
import { useParams } from "react-router-dom";


const Detail = () => {
  const {id} = useParams()
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
          <DetailTitle id={id}/>
          <div className="row g-5">
            <div className="col-4">
              <Detailtable id={id}/>
            </div>
            <div className="col-8">
              <Piechart id={id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
