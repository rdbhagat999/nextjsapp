import PieChart from "@/components/piechart";
import BarChart from "./barchart";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard page</h1>
      <BarChart />
      <PieChart />
      <p>LineChart component is not displayed.</p>
    </>
  );
}
