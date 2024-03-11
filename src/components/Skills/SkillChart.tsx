import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "Full",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Other",
      data: [8, 1, 2, 1, 9, 9],
      backgroundColor: "rgba(3, 99, 132, 0.2)",
      borderColor: "rgba(3, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
};

const SkillChart = () => {
  return (
    <div className=" bg-white rounded margin-auto border-2 border-red-500 h-80vh w-80vh sm:max-h-50vh lg:min-w-max lg:max-w-60vh lg:max-h-60vh content-between m-5 ">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillChart;
