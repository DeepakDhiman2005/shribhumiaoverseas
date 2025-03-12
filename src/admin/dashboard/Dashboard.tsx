import DashboardProvider from "../../providers/DashboardProvider";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
    return <>
        <DashboardProvider title="Dashboard">
            <DashboardCards />
        </DashboardProvider>
    </>
}

export default Dashboard;