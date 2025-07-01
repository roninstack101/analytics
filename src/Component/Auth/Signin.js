import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, Sun, Moon } from "lucide-react";

export default function SignIn({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white/10 backdrop-blur rounded-md"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5" style={{ color: "#1A237E" }} />
          )}
        </button>
      </div>

      {/* Card */}
      <div
        className={`w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl px-6 py-6 space-y-6 shadow-xl transition-all ${
          darkMode
            ? "bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
            : "bg-white/70 text-gray-900 backdrop-blur-xl shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Heading */}
        <h2
          className={`font-bold text-center mb-6 ${
            darkMode ? "text-purple-700" : "text-[rgba(0,103,216,0.8)]"
          }`}
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
        >
          Sign In
        </h2>

        {/* Email Input */}
        <div
          className={`flex items-center gap-3 border rounded-xl px-4 py-3 ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-gray-50 border-gray-300"
          }`}
        >
          <Mail
            size={20}
            className={`${
              darkMode ? "text-purple-700" : "text-[rgba(0,103,216,0.8)]"
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-transparent outline-none text-inherit ${
              darkMode
                ? "placeholder:text-gray-400 dark:placeholder-white/50"
                : "placeholder:text-gray-600 dark:placeholder-white/30"
            }`}
          />
        </div>

        {/* Password Input */}
        <div
          className={`flex items-center gap-3 border rounded-xl px-4 py-3 ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-gray-50 border-gray-300"
          }`}
        >
          <Lock
            size={20}
            className={`${
              darkMode ? "text-purple-700" : "text-[rgba(0,103,216,0.8)]"
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full bg-transparent outline-none text-inherit ${
              darkMode
                ? "placeholder:text-gray-400 dark:placeholder-white/50"
                : "placeholder:text-gray-600 dark:placeholder-white/30"
            }`}
          />
        </div>

        {/* Sign In Button */}
        <button
          className={`w-full py-3 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
            darkMode
              ? "bg-purple-700 text-white hover:bg-purple-800 hover:text-white"
              : "bg-[rgba(0,103,216,0.8)] text-white hover:bg-[rgba(0,103,216,1)] hover:text-white"
          }`}
        >
          <LogIn size={18} />
          Sign In
        </button>

        {/* Footer */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className={`font-semibold underline cursor-pointer ${
              darkMode
                ? "text-purple-400 hover:text-purple-300"
                : "text-blue-700 hover:text-blue-800"
            }`}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
