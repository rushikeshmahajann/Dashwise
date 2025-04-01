import "./App.css";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

import Hero from "../pages/Hero";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <main className="main">
        <SignedOut>
          <Navbar />
          <Hero />
        </SignedOut>
        <SignedIn>
          <Dashboard />
          <UserButton />
        </SignedIn>
      </main>
    </>
  );
}

export default App;
