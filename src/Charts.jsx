import React from "react";
import { Card } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";
import userData from "./data/mock_data.json";

const filter_getCount = (target, ele) => {
  return userData.filter((e) => e[target] === ele).length;
};

const filter_getRangeCount = (min, max = 60) => {
  return userData.filter((e) => e.age >= min && e.age < max).length;
};

export const Chart = ({ title, desc, chartName }) => {
  const getTagname = (chartName) => {
    switch (chartName) {
      case "ByProfession":
        return <ByProfession />;
      case "ByAgeRange":
        return <ByAgeRange />;
      case "ByLocality":
        return <ByLocality />;
      case "ByGroupCount":
        return <ByGroupCount />;
      default:
        return "";
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer>{getTagname(chartName)}</Card.Footer>
    </Card>
  );
};

export const ByProfession = () => {
  const data = {
    labels: [...new Set(userData.map((item) => item.profession))],
    datasets: [
      {
        label: "By Profession",
        data: [
          filter_getCount("profession", "Employed"),
          filter_getCount("profession","Student"),
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} className="w-75 mx-auto h-75" />;
};

export const ByAgeRange = () => {
  const data = {
    labels: ["13-18", "18-25", "25+"],
    datasets: [
      {
        label: "By Age",
        data: [
          filter_getRangeCount(13, 18),
          filter_getRangeCount(18, 25),
          filter_getRangeCount(25),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} className="w-75 mx-auto h-75" />;
};

export const ByLocality = () => {
  const label = [...new Set(userData.map((item) => item.locality))];
  let data_count = []  ;
  for(let i = 0; i < label.length; i++) {
    let e = filter_getCount("locality",label[i]);
    data_count.push(e);
  }
  const data = {
    labels: label,
    datasets: [
      {
        label: "By Profession",
        data: data_count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 66, 0.2)",
          "rgba(54, 162, 76, 0.2)",
          "rgba(255, 206, 96, 0.2)",
          "rgba(75, 192, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 66, 1)",
          "rgba(54, 162, 76, 1)",
          "rgba(255, 206, 96, 1)",
          "rgba(75, 192, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} className="w-75 mx-auto h-75" />;
};
export const ByGroupCount = () => {
  const data = {
    labels: [0, 1, 2],
    datasets: [
      {
        label: "By Group Head Count",
        data: [
          filter_getCount("guest_count", 0),
          filter_getCount("guest_count", 1),
          filter_getCount("guest_count", 2),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 66, 0.2)",
          "rgba(54, 162, 76, 0.2)",
          "rgba(255, 206, 96, 0.2)",
          "rgba(75, 192, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 66, 1)",
          "rgba(54, 162, 76, 1)",
          "rgba(255, 206, 96, 1)",
          "rgba(75, 192, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} className="w-75 mx-auto h-75" />;
};