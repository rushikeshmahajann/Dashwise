"use client";
import { AuroraBackground } from "../components/AuroraBackground";
import { useNavigate } from "react-router-dom";

export default function ErrorComponent() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center w-[100vw]">
  
        <div className="mx-auto w-full">
          <div className="mb-8 flex justify-center">
            <span className="text-8xl">😬</span>
          </div>

          <h1 className="mx-auto mb-4 text-4xl max-w-md font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Oops! Something went wrong
          </h1>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md max-w-md mx-auto">
            <p className="text-lg text-gray-600 tracking-tight max-w-lg">
              Sorry for the inconvenience.It is likely a react 19 issue I'll fix this issue as soon as
              possible. Please return to the home page to continue.
            </p>
          </div>

          <button
            onClick={()=>handleGoHome()}
            className="rounded-full bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-blue-400 hover:scale-105"
          >
            Return to Dashboard
          </button>

          <p className="mt-6 text-sm  text-gray-500">
            If this problem persists, please contact me at{" "}
            <a className="cursor-pointer underline" href="tel:+91-7249144033">
              +91-7249144033
            </a>
            .
          </p>
        </div>
    </div>
  );
}
