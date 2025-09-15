import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DetailsPopup = ({ details, onClose }) => {
  const labels = details.data.map((item) => Object.keys(item)[0]);
  const values = details.data.map((item) => Object.values(item)[0]);

  const chartData = {
    labels,
    datasets: [
      {
        label: details.title,
        data: values,
        backgroundColor: "#add8e6",
      },
    ],
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -20%)",
        background: "#fff",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <h3>{details.title}</h3>
      <Bar data={chartData} options={{ responsive: true }} />
      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          backgroundColor: "#ccc",
          color: "#000",
          border: "none",
          padding: "5px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default DetailsPopup;
