import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function DashboardLayout () {
    const navigate = useNavigate();

    return (
        <section className="dashboard-section">
            <div className="dashboard-sidebar">
                <div className="dashboard-top-section">
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/me")}>Profile</button>
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/friends")}>Friends</button>
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/chats")}>Chats</button>
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/hangouts")}>Hangouts</button>
                </div>
                <div className="dashboard-bottom-section">
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/settings")}>Settings</button>
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/languages")}>Languages</button>
                    <button className="dashboard-button" onClick={() => navigate("/dashboard/support")}>Support</button>
                </div>
            </div>
            <Outlet/>
        </section>
    )
}