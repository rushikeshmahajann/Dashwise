import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { BackgroundBeams } from "../components/BackgroundBeams";

const SignUpPage = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="max-w-[1300px] flex">
        <BackgroundBeams />

        <div className="w-max flex justify-center items-center">
          <SignUp
          path="/sign-up"
          routing="path"
            appearance={{
              elements: {
                formButtonPrimary: "your-org-button org-red-button",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
