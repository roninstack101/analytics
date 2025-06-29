import { useState } from "react";
import { Mail, Lock, UserPlus, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ darkMode, setDarkMode }) {
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
        className={`w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl px-6 py-12 space-y-6 shadow-xl transition-all ${
          darkMode
            ? "bg-white/5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
            : "bg-white/70 text-gray-900 backdrop-blur-xl shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Heading */}
        <h2
          className={`font-extrabold text-center mb-6 ${
            darkMode ? "text-purple-700" : "text-[rgba(0,103,216,0.8)]"
          }`}
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}
        >
          Create an Account
        </h2>

        <div className="space-y-5">
          {/* Email Input */}
          <div
            className={`flex items-center gap-3 border rounded-xl px-4 py-3 ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <Mail size={20} className="text-indigo-700" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-inherit placeholder-gray-500 dark:placeholder-white/50"
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
            <Lock size={20} className="text-indigo-700" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-inherit placeholder-gray-500 dark:placeholder-white/50"
            />
          </div>

          {/* Sign Up Button */}
          <button
            className={`w-full py-3 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
              darkMode
                ? "bg-purple-700 text-white hover:bg-purple-800"
                : "bg-[rgba(0,103,216,0.8)] text-white hover:bg-[rgba(0,103,216,1)]"
            }`}
          >
            <UserPlus size={20} />
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-center text-sm dark:text-white">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className={`font-semibold underline cursor-pointer ${
                darkMode
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-blue-700 hover:text-blue-800"
              }`}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
