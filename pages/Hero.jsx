import React from "react";
import { AuroraBackground } from "../components/AuroraBackground";
import ContainerTextFlip from "../components/ContainerTextFlip";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import "../pages/hero.css";
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const SignIn = () => {
    navigate("/SignIn");
  };
  const words = ["simple", "visual", "beautiful", "awesome"];
  return (
    <>
      <section className="h-[100vh] w-full  mx-auto">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="flex items-center justify-center max-w-[1300px] flex-col">
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                className={cn(
                  "hero-heading relative mb-6 text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 sm:text-4xl lg:text-6xl xl:text-7xl dark:text-zinc-100"
                )}
                layout
              >
                <div className="inline-block">
                  Dashwise makes data <ContainerTextFlip words={words} />
                  {/* <Blips /> */}
                </div>
              </motion.h1>
              <h2 className="hero-description text-left text-xl max-w-3xl font-neue tracking-tight lg:text-center text-gray-600 md:text-2xl">
                Track key metrics, uncover insights, and optimize decisions—all
                in one clean, powerful dashboard.
              </h2>
              <div className="mt-8 flex gap-4 items-center justify-center tracking-tight">
                <button className="px-3 py-2 border-neutral-400 border rounded-md cursor-pointer lg:text-xl lg:px-5 lg:py-3 hover:shadow-lg">
                  Learn More
                </button>

                <button onClick={SignIn} className="px-3 py-2 bg-blue-600 border-blue-750 text-white border lg:text-xl lg:px-5 lg:py-3 rounded-md cursor-pointer hover:shadow-lg hover:bg-gradient-to-b from-blue-500 to-blue-700 transition-all ease-in-out">
                  Get started
                </button>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>
    </>
  );
};

export default Hero;
