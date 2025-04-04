import React, { useState } from "react";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CollapsedSidebar from "../../components/Sidebar/CollapsedSidebar";
import Home from "./Home";
import CommandMenu from "../../components/Search/CommandMenu";
import CalendarApp from "../../components/Calendar/Calendar";
import FlowDesigner from "../../components/FlowDesigner/FlowDesigner";
import Analytics from "../../components/Analytics/Analytics";
import { handleMenuClick } from "../../lib/handleMenuClick";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");

  const menuClickHandler = handleMenuClick(setActiveComponent);

  const renderComponentByName = (name) => {
    switch (name) {
      case "kanban":
        return <KanbanBoard />;
      case "calendar":
        return <CalendarApp />;
      case "flow-designer":
        return <FlowDesigner />;
      case "home":
      default:
        return <Analytics />;
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "kanban":
        return (
          <Home
            key={activeComponent}
            setCmdOpen={setCmdOpen}
            componentName={activeComponent}
            component={renderComponentByName(activeComponent)}
          />
        );
      case "home":
        return (
          <Home
            key={activeComponent}
            setCmdOpen={setCmdOpen}
            componentName={activeComponent}
            component={renderComponentByName(activeComponent)}
          />
        );
      case "calendar":
        return (
          <Home
            key={activeComponent}
            setCmdOpen={setCmdOpen}
            componentName={activeComponent}
            component={renderComponentByName(activeComponent)}
          />
        );
      case "flow-designer":
        return (
          <Home
            key={activeComponent}
            setCmdOpen={setCmdOpen}
            componentName={activeComponent}
            component={renderComponentByName(activeComponent)}
          />
        );
      default:
        return (
          <Home
            key={activeComponent}
            setCmdOpen={setCmdOpen}
            componentName={activeComponent}
            component={renderComponentByName(activeComponent)}
          />
        );
    }
  };

  return (
    <section className="dashboard-section h-full w-full">
      <div className="dashboard-container flex overflow-hidden">
        {menuOpen ? (
          <Sidebar toggleMenu={setMenuOpen} onMenuClick={menuClickHandler} />
        ) : (
          <CollapsedSidebar toggleMenu={setMenuOpen} />
        )}
        <div className="placeholder-container pb-2 overflow-hidden">
          {renderActiveComponent()}
        </div>
      </div>
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen} />
    </section>
  );
};

export default Dashboard;
