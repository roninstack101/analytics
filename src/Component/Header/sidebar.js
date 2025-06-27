import { useEffect, useState } from "react";
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
  Moon,
  Sun,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Change body background based on darkMode
  useEffect(() => {
    document.body.style.background = darkMode
      ? "url('/background-1.jpg') no-repeat top fixed"
      : "url('/windows 11.jpg') no-repeat top fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [darkMode, open]);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Tables", icon: Table, path: "/tables" },
    { name: "Billing", icon: CreditCard, path: "/billing" },
    { name: "Profile", icon: User, path: "/profile" },
    { name: "Sign In", icon: LogIn, path: "/signin" },
    { name: "Sign Up", icon: UserPlus, path: "/signup" },
  ];

  return (
    <>
      {/* Mobile/Tablet Header with toggle buttons inside */}
      <header className="md:hidden fixed top-0 left-0 z-10 w-full px-4 py-3 bg-white/10 backdrop-blur border-b border-white/20 text-white font-[Poppins] flex items-center justify-between">
        {/* Sidebar Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 z-50 rounded-md text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center Heading */}
        <span className="text-lg font-semibold">My Dashboard</span>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white/10 backdrop-blur rounded-md text-white"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Overlay (only for mobile when sidebar is open) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        ></div>
      )}

      <aside
        className={`
    fixed top-5 left-0 z-40 w-full max-w-[230px] xl:max-w-[264px] h-[calc(100vh-40px)]
    bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]
    border border-white/10 text-white p-6 rounded-2xl font-[Poppins] flex flex-col
    transition-all duration-300 ease-in-out
    ${open ? "translate-x-[20px]" : "-translate-x-full"}
    md:translate-x-0 md:left-5
  `}
      >
        <h2 className="text-center font-bold tracking-wide mb-5 text-[clamp(1rem,2vw,2rem)]">
          BOARD
        </h2>
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ name, icon: Icon, path }, index) => (
            <li className="m-0 p-0 rounded-[5px]" key={index}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3  w-full rounded-lg transition-colors duration-300
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
