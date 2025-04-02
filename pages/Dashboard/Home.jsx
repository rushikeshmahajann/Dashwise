import React from "react";
import Search from "../../components/Search/Search";
import { useUser } from "@clerk/clerk-react";
import { AnimatedTooltipPreview } from "../../components/AnimatedTooltipPreview";
import Link from "../../icons/Link";
import File from "../../icons/File";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import CalendarApp from "../../components/Calendar/Calendar";
const Home = ({ setCmdOpen, component }) => {
  const { user } = useUser();
  return (
    <section className="h-full w-full relative pb-2">
      <div className="flex justify-between items-end border-b border-neutral-300 pb-3 mb-4">
        <h2 className="text-neutral-700 text-2xl font-medium tracking-tight leading-normal">
          Welcome, {user?.firstName || "User"}! 👋🏻
        </h2>
        <div className="flex flex-row items-center justify-between gap-5">
          <Search setCmdOpen={setCmdOpen} />
          <div className="flex gap-4">
            <button className="home-nav-link">
              <File />
              Manage
            </button>
            <button className="home-nav-link">
              <Link /> Share
            </button>
          </div>
        </div>
        <div className="fixed right-8 bottom-6 z-999">
          <AnimatedTooltipPreview />
        </div>
      </div>
      <div className="relative overflow-y-auto h-[100%]">
       {component}
      </div>
    </section>
  );
};

export default Home;
