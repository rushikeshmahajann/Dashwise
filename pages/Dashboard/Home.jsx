import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "../../components/Search/Search";
import { useUser } from "@clerk/clerk-react";
import { AnimatedTooltipPreview } from "../../components/AnimatedTooltipPreview";
import Link from "../../icons/Link";
import File from "../../icons/File";

const Home = ({ setCmdOpen, component, componentName }) => {
  const { user } = useUser();

  return (
    <section className="h-full w-full relative pb-2">
      <div className="flex justify-between items-end border-b border-neutral-300 px-2 pt-4 sm:px-0 sm:pt-0 pb-3 mb-4">
        <h2 className="text-neutral-700 text-2xl font-medium tracking-tight leading-normal">
          Welcome, {user?.firstName || "User"}! 👋🏻
        </h2>

        <div className="md:flex flex-row items-center justify-between gap-5 hidden">
          <Search setCmdOpen={setCmdOpen} />
          <div className="hidden lg:flex gap-4">
            <button className="home-nav-link">
              <File />
              Manage
            </button>
            <button className="home-nav-link">
              <Link /> Share
            </button>
          </div>
        </div>
        <div className="fixed hidden md:block bottom-2 right-5 md:bottom-10 md:right-15 z-0 md:z-[10] ">
          <AnimatedTooltipPreview />
        </div>
      </div>

      <div className="relative overflow-y-auto h-full lg:h-[90vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={componentName}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {component}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Home;
