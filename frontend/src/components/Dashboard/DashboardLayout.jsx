import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function DashboardLayout () {
    const navigate = useNavigate();

    return (
        <section className="dashboard-section">
            <button onClick={() => navigate("/dashboard/me")}>Profile</button>
            <Outlet/>
        </section>
    )
}