import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const FifteenDaysPerformanceChart = ({ overallPerformance }) => {
  const data = {
    labels: overallPerformance["fifteen_days_chart"].dates,
    datasets: [
      {
        label: "Overall Score",
        data: overallPerformance["fifteen_days_chart"]["overall"].average_bands, // Sample overall scores for each day
        borderColor: "#0052CC",
        tension: 0.4,
        fill: false,
        borderWidth: 4,
      },
    ],
  };

  const additionalData = {
    Listening:
      overallPerformance["fifteen_days_chart"]["listening"].average_bands,
    Reading: overallPerformance["fifteen_days_chart"]["reading"].average_bands,
    Writing: overallPerformance["fifteen_days_chart"]["writing"].average_bands,
    Speaking:
      overallPerformance["fifteen_days_chart"]["speaking"].average_bands,
    Tests: overallPerformance["fifteen_days_chart"]["overall"].attempt_count,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const index = context.dataIndex;
            const value = context.dataset.data[index];

            // Construct additional data string for the tooltip
            let additionalInfo = `Overall: ${value} \n`;
            Object.keys(additionalData).forEach((key) => {
              additionalInfo += `${key}: ${additionalData[key][index]}\n`;
            });

            return additionalInfo;
          },
        },
      },
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      y: {
        display: true,
        beginAtZero: false, // Change to false to use the automatic scaling

        grace: "0%", // Adds a bit of space at the top and bottom of the scale
        title: {
          display: false,
        },
      },
      x: {
        display: false, // Set to true if you want to display the x-axis
        title: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 4, // Adjust the line thickness
        tension: 0.4, // Smoothens the line
      },
      point: {
        radius: 3, // Adjust the size of points on the line
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default FifteenDaysPerformanceChart;
