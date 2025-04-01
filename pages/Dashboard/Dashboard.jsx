import React, { useState } from "react";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CollapsedSidebar from "../../components/Sidebar/CollapsedSidebar";
import Home from "./Home";
import CommandMenu from "../../components/Search/CommandMenu";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section className="dashboard-section">
      <div className="dashboard-container flex">
        {
          menuOpen ? (<Sidebar toggleMenu={toggleMenu} />) : (<CollapsedSidebar toggleMenu={toggleMenu} />) 
          }
          <div className="placeholder-container"><Home setCmdOpen={setCmdOpen} /></div>
      </div>
      <CommandMenu open={cmdOpen} setOpen={setCmdOpen}/>
    </section>
  );
};

export default Dashboard;
