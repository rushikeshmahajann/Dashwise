import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale
);

const LineGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          5000, 7000, 6500, 8000, 7500, 9000, 10000, 9500, 11000, 10500, 11500,
          12000,
        ],
        borderColor: "#FCE7F3",
        backgroundColor: "#FCE7F3",
        tension: 0.5,
      },
      {
        label: "Expense",
        data: [
          3000, 4000, 3500, 5000, 4500, 5500, 6000, 5800, 6200, 6100, 6500,
          7000,
        ],
        borderColor: "#DBEAFE",
        backgroundColor: "#DBEAFE",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto p-1">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
