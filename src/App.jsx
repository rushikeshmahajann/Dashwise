import "./App.css";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

import Hero from "../pages/Hero";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <>
      <header className="header">
        <SignedOut>
          <Navbar />
          <Hero />
        </SignedOut>
        <SignedIn>
          <Dashboard />
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
