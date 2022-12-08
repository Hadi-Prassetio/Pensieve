import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import Table from "react-bootstrap/table";
import { Pie } from "react-chartjs-2";
import dateFormat from "dateformat"

ChartJS.register(ArcElement, Tooltip, Legend);

export const DetailTitle = ({ data }) => {
  return (
    <>
      <h2 className=''>{data?.deviceId}</h2>
      <h3 className='mb-4'> {data?.deviceType} </h3>
    </>
  );
};

export const Detailtable = ({ data }) => {
  return (
    <Table className='sm table table-bordered'>
      <thead className=''>
        <tr className='text-light '>
          <th>Timestamp</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody className=''>
        {data?.locations?.map((item) => (
          <tr key={item.id} className='text-light'>
            <td> {dateFormat(item.createdAt, "yyyy-mm-dd HH:MM:ss")} </td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const Piechart = ({ data }) => {
  const calculation = [];
  const value = [];

  data?.locations?.forEach((item) => {
    if (calculation[item?.location]) {
      calculation[item?.location]++;
      value.push(item?.location);
    } else {
      calculation[item?.location] = 1;
      value.push(item?.location);
    }
  });

  const unique = [...new Map(value.map((item) => [item, item])).values()];

  const chart = {
    labels: unique,

    datasets: [
      {
        label: "% time spent on time location",
        data: [
          calculation[unique[0]],
          calculation[unique[1]],
          calculation[unique[2]],
          calculation[unique[3]],
        ],
        backgroundColor: ["#FD841F", "#E97777", "#434242", "#A5F1E9"],
        borderColor: ["#E14D2A", "#FF9F9F", "#222222", "#7FE9DE"],
        borderWidth: 1,
      },
    ],
  };

  const count = unique?.map(
    (item) => (calculation[item] / data.locations.length) * 100
  );

  return (
    <Table className='sm table table-bordered'>
      <thead className=''>
        <tr className='text-light row'>
          <th className='col-7'>
            <div className='col-8 mx-auto'>
              <Pie data={chart} />
            </div>
          </th>
          <th className='col-5 d-flex relative align-items-center'>
            <div className='mx-auto'>
              <div>
                <p>{chart.datasets[0].label}</p>
                <div className="d-flex">
                <ul>
                  {chart?.labels.map((item) => (
                    <li>
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
                <ul className="list-unstyled">
                  {count.map((item) => (
                    <li>
                      <div>={Math.floor(item)}%</div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
    </Table>
  );
};
