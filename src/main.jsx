import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorComponent from '../components/ErrorComponent.jsx'
import SignInPage from "../pages/SignInPage.jsx";
import Home from "../pages/Dashboard/Home.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Some Clerk Key error");
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/SignIn",
    element: <SignInPage />,
    errorElement: <ErrorComponent />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"
    appearance={{
      layout: {
        animations: "true",
        unsafe_disableDevelopmentModeWarnings: "true",
        termsPageUrl: 'https://clerk.com/terms'
      }
    }}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
