import './App.css';
import Sidebar from './Component/Header/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => <h1 style={{ color: 'white' }}>Dashboard Page</h1>;
const Tables = () => <h1 style={{ color: 'white' }}>Tables Page</h1>;
const Billing = () => <h1 style={{ color: 'white' }}>Billing Page</h1>;
const Profile = () => <h1 style={{ color: 'white' }}>Profile Page</h1>;
const SignIn = () => <h1 style={{ color: 'white' }}>Sign In Page</h1>;
const SignUp = () => <h1 style={{ color: 'white' }}>Sign Up Page</h1>;

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ marginLeft: '280px', padding: '0 2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
