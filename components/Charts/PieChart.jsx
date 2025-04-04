import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();

      const total = data.todos.length;
      const completed = data.todos.filter((todo) => todo.completed).length;
      const ongoing = total - completed;
      const pending = data.todos.filter((todo) => !todo.completed).length;

      setChartData({
        labels: ["Completed", "Ongoing", "Pending"],
        datasets: [
          {
            data: [completed, ongoing, pending],
            backgroundColor: ["#FFEDD5", "#DBEAFE", "#FEF9C3"],
            hoverBackgroundColor: ["#FCD9B6", "#BFDBFE", "#fef08a"],
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (!chartData) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-full max-w-md mx-auto h-50 p-1 flex justify-center">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
