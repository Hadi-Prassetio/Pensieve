import * as React from "react";
import Table from "react-bootstrap/table";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {SummaryData} from "../fakeData/data"


const SummaryTable = () => {
  const navigate = useNavigate()
  const total = SummaryData.length

  const [search, setSearch] = React.useState("");

  return (
    <div>
      <div className="mb-3 row justify-content-between ">
        <Form.Group className="col-3">
          <Form.Control
            className="rounded-pill border-0 text-light bg-dark text-center"
            type="search"
            placeholder="Search by Device Id/Type"
            aria-label="Search"
            onChange={(e)=>{setSearch(e.target.value)}}
            aria-describedby="search-addon"
          />
        </Form.Group>
        <div className="col-3 text-end">
          1 - 5 of {total}<IoIosArrowBack /> <IoIosArrowForward />
        </div>
      </div>
      <Table responsive="sm">
        <thead>
          <tr className="text-light">
            <th></th>
            <th>Device ID</th>
            <th>Device Type</th>
            <th>Time Stamp</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {SummaryData.filter(((item)=>{
            if(search == ""){
              return item
            }else if(item.deviceId.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return item
            }else if(item.deviceType.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
              return item
            }
          })).map((item, index) => (
            <tr key={index} className="text-light">
              <td></td>
              <td>{item.deviceId}</td>
              <td> {item.deviceType} </td>
              <td> {item.coordinate[item.coordinate.length-1]?.timeStamp} </td>
              <td> {item.coordinate[item.coordinate.length-1]?.location}</td>
              <td className="text-end">
                <button
                  onClick={()=>navigate(`/detail/${index}`)}
                  className="text-decoration-none text-black hover bg-black"
                >
                  see detail <BsArrowRight className="text-white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SummaryTable;