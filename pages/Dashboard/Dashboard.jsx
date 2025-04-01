import React from "react";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container flex">
        <Sidebar />
        <KanbanBoard />
      </div>
    </section>
  );
};

export default Dashboard;
