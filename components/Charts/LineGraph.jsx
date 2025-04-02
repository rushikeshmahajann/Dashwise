import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sample Line Chart",
      },
      
    },maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          120, 150, 180, 200, 170, 220, 250, 230, 210, 190, 160, 140
        ],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [
          100, 130, 160, 190, 140, 210, 240, 220, 200, 180, 150, 130
        ],
        borderColor: "#727273",
        backgroundColor: "rgba(148, 146, 147, 0.5)",
      },
    ],
  };

  return <div style={{width:"600px", height:"300px"}}><Line options={options} data={data} /></div>;
};

export default LineGraph;
