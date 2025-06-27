import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Grid from "./Component/Header/bentogrid";
import Header from "./Component/Header/header";
import Sidebar from "./Component/Header/sidebar";

// Dummy Pages
const Tables = () => (
  <h1 className="text-white text-3xl font-semibold text-center py-8">
    Tables Page
  </h1>
);
const Billing = () => (
  <h1 className="text-white text-3xl font-semibold text-center py-8">
    Billing Page
  </h1>
);
const Profile = () => (
  <h1 className="text-white text-3xl font-semibold text-center py-8">
    Profile Page
  </h1>
);
const SignIn = () => (
  <h1 className="text-white text-3xl font-semibold text-center py-8">
    Sign In Page
  </h1>
);
const SignUp = () => (
  <h1 className="text-white text-3xl font-semibold text-center py-8">
    Sign Up Page
  </h1>
);

function App() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.background = darkMode
      ? "url('/background-1.jpg') no-repeat top fixed"
      : "url('/windows 11.jpg') no-repeat top fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [darkMode, open]);

  return (
    <Router>
      <div className="flex  min-h-screen">
        <Sidebar open={open} setOpen={setOpen} darkMode={darkMode} />
        <div className="flex-1 ">
          <Header
            open={open}
            setOpen={setOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Routes>
            <Route path="/" element={<Grid />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
