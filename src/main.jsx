import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider,  } from "react-router";
import ErrorComponent from '../components/ErrorComponent.jsx'
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";


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
    path: "/sign-in",
    element: <SignInPage />,
    errorElement: <ErrorComponent />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    errorElement: <ErrorComponent />,
  },
  {
    path:"/sso-callback",
    element: <AuthenticateWithRedirectCallback />,
    errorElement: <ErrorComponent />,
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
