import * as React from "react";
import { useParams } from "react-router-dom";
import { Detailtable, DetailTitle, Piechart } from "../components/detailTable";
import { API } from "../config/api";

const Detail = () => {
  const { id } = useParams();

  const [detail, setDetail] = React.useState();
  const getDetail = async () => {
    try {
      const response = await API.get(`/device/${id}`);
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetail();
  }, []);

  return (
    <div
      className='bg-black d-flex align-items-center row'
      style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{ height: "600px" }}
        className='border border-white col-10 rounded-5 m-auto row p-5'>
        <div className='text-light'>
          <DetailTitle data={detail} />
          <div className='row g-5'>
            <div className='col-4'>
              <Detailtable data={detail} />
            </div>
            <div className='col-8'>
              <Piechart data={detail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
