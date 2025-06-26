import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Table,
  CreditCard,
  User,
  LogIn,
  UserPlus,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // true = Dark by default

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Tables", icon: Table, path: "/tables" },
    { name: "Billing", icon: CreditCard, path: "/billing" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Sign In", icon: LogIn, path: "/signin" },
    { name: "Sign Up", icon: UserPlus, path: "/signup" },
  ];

  useEffect(() => {
    document.body.style.background = darkMode
      ? "url('/background-1.jpg') no-repeat top fixed"
      : "url('/windows 11.jpg') no-repeat top fixed";
    document.body.style.backgroundSize = "cover";
  }, [darkMode]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 left-5 z-50 p-2 bg-white/10 backdrop-blur rounded-md text-white"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 p-2 rounded-md text-white bg-white/10 backdrop-blur"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-5 left-5 z-40 w-[230px] max-w-[90vw] h-[calc(100vh-40px)]
          bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]
          border border-white/10 text-white p-6 rounded-2xl font-[Poppins] flex flex-col
          overflow-y-auto scrollbar-thin scrollbar-thumb-white/20
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:flex
        `}
      >
        <h2 className="text-center font-bold tracking-wide mb-5 text-[clamp(1rem,2vw,2rem)]">
          BOARD
        </h2>
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ name, icon: Icon, path }, index) => (
            <li key={index}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300
                  ${
                    currentPath === path
                      ? "bg-purple-700 text-white font-semibold"
                      : "text-gray-400 hover:bg-purple-700 hover:text-white font-medium"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[clamp(0.9rem,2vw,1rem)]">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
