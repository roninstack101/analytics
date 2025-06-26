import "./App.css";
import Graph from "./Component/Graph/graph";
import Sidebar from "./Component/Header/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Dashboard = () => <h1 style={{ color: 'white' }}>Dashboard Page</h1>;
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
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 md:ml-[240px] p-4">
          <Routes>
            <Route path="/" element={<Graph />} />
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
