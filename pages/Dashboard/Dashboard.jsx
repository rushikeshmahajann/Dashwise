import React, { useState } from "react";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CollapsedSidebar from "../../components/Sidebar/CollapsedSidebar";
import Home from "./Home";
import CommandMenu from "../../components/Search/CommandMenu";
import CalendarApp from "../../components/Calendar/Calendar";
import FlowDesigner from '../../components/FlowDesigner/FlowDesigner'
import Analytics from "../../components/Analytics/Analytics";
const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "kanban":
        return <Home setCmdOpen={setCmdOpen} component={<KanbanBoard />} />;
      case "home":
        return <Home setCmdOpen={setCmdOpen} component={<Analytics />} />;
      case "calendar":
        return <Home setCmdOpen={setCmdOpen} component={<CalendarApp />} />;
      case "flow-designer":
        return <Home setCmdOpen={setCmdOpen} component={<FlowDesigner />} />;
      default:
        return <Home setCmdOpen={setCmdOpen} component={<Analytics />} />
    }
  };
  return (
    <section className="dashboard-section h-full w-full">
      <div className="dashboard-container flex overflow-hidden">
        {menuOpen ? (
          <Sidebar toggleMenu={toggleMenu} onMenuClick={handleMenuClick} />
        ) : (
          <CollapsedSidebar toggleMenu={toggleMenu} />
        )}
        <div className="placeholder-container overflow-hidden">
          {renderActiveComponent()}
        </div>
      </div>
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} />
    </section>
  );
};

export default Dashboard;
