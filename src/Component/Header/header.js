import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Tables", path: "/tables" },
  { name: "Billing", path: "/billing" },
  { name: "Profile", path: "/profile" },
  { name: "Sign In", path: "/signin" },
  { name: "Sign Up", path: "/signup" },
];

const Header = ({ open, setOpen, darkMode, setDarkMode }) => {
  const location = useLocation();
  const lightColor = "rgba(0,103,216,0.8)";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageTitle =
    menuItems.find((item) => item.path === location.pathname)?.name ||
    "My Dashboard";

  return (
    <header
      className={`
      sticky z-10 rounded-md
      ${scrolled ? 'top-2 md:top-2 xl:top-2' : 'top-0'}
      md:ml-[16.5rem] xl:ml-[19rem] 
      px-4 py-3 font-[Poppins] 
      flex items-center justify-between
      transition-all duration-300
      ${scrolled
          ? (darkMode
            ? 'ml-2 mt-2 mr-2 md:mt-2 md:mr-2 xl:mt-2 xl:mr-2 bg-white/10 backdrop-blur border-white/10 text-white'
            : 'ml-2 mt-2 mr-2 md:mt-2 md:mr-2 xl:mt-2 xl:mr-2 bg-[#fff] text-white shadow-md border border-white/10')
          : ''}
    `}
    >

      {/* Sidebar Toggle for Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 z-50 rounded-md text-white md:hidden"
        style={{ color: !darkMode ? lightColor : "white" }}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Heading and Toggle */}
      <div className="flex items-center justify-between w-full">
        <span className="text-lg font-semibold mx-auto md:mx-0" style={{ color: !darkMode ? lightColor : "white" }}>
          {pageTitle}
        </span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white/10 backdrop-blur rounded-md text-white"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5" style={{ color: lightColor }} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
